/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable ts/no-explicit-any */

import type { IAccessor, IdentifierDecorator, IDisposable } from '@univerjs/core';
import { createIdentifier } from '@univerjs/core';

import type { IChannel, IMessageProtocol } from './rpc.service';
import { ChannelClient, ChannelServer, propertyIsEventSource } from './rpc.service';

export interface IRPCChannelService {
    requestChannel(name: string): IChannel;
    registerChannel(name: string, channel: IChannel): void;
}

export const IRPCChannelService = createIdentifier<IRPCChannelService>('IRPCChannelService');

/**
 * This service is responsible for managing the RPC channels.
 */
export class ChannelService implements IDisposable {
    private readonly _client: ChannelClient;
    private readonly _server: ChannelServer;

    constructor(_messageProtocol: IMessageProtocol) {
        this._client = new ChannelClient(_messageProtocol);
        this._server = new ChannelServer(_messageProtocol);
    }

    dispose(): void {
        this._client.dispose();
        this._server.dispose();
    }

    requestChannel(name: string): IChannel {
        return this._client.getChannel(name);
    }

    registerChannel(name: string, channel: IChannel): void {
        this._server.registerChannel(name, channel);
    }
}

/**
 * This function provides a service that works as a proxy. When service is called, it would check
 * if there's a local service with the identifier. If so, it would call the service directly. If not,
 * it would call over RPC instead.
 */
export function makeIsomoService<T extends object>(
    accessor: IAccessor,
    serviceIdentifier: IdentifierDecorator<T>
) {
    return new Proxy({} as T, {
        get(_: T, propKey: string) {
            return function (...args: any[]) {
                const hasLocal = accessor.has(serviceIdentifier);
                if (hasLocal) {
                    const localService = accessor.get(serviceIdentifier);
                    const expectedFunction = localService[propKey as keyof T];
                    if (typeof expectedFunction !== 'function') {
                        throw new TypeError('[IsomoService]: you can only IsomoService to call functions upon.');
                    }

                    const result = expectedFunction.apply(localService, args);
                    return Promise.resolve(result);
                }

                const channel = accessor.get(IRPCChannelService).requestChannel(serviceIdentifier.toString());
                const isObservable = propertyIsEventSource(propKey);
                if (isObservable) {
                    const observable = channel.subscribe(propKey, args[0]);
                    return observable;
                }

                return channel.call(propKey, args[0]);
            };
        },
    });
}

