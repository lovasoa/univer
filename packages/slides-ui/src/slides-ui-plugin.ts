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

import type { Dependency, SlideDataModel } from '@univerjs/core';
import { Inject, Injector, IUniverInstanceService, Plugin, UniverInstanceType } from '@univerjs/core';

import { IImageIoService, ImageIoService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import type { IUniverSlidesDrawingConfig } from './controllers/slide-ui.controller';
import { SlideUIController } from './controllers/slide-ui.controller';
import { SlideRenderController } from './controllers/slide.render-controller';
import { ISlideEditorBridgeService, SlideEditorBridgeService } from './services/slide-editor-bridge.service';
import { SlideEditorBridgeRenderController } from './controllers/slide-editor-bridge.render-controller';
import { ISlideEditorManagerService, SlideEditorManagerService } from './services/slide-editor-manager.service';
import { SlideEditingRenderController } from './controllers/slide-editing.render-controller';

export const SLIDE_UI_PLUGIN_NAME = 'SLIDE_UI';

export class UniverSlidesUIPlugin extends Plugin {
    static override pluginName = SLIDE_UI_PLUGIN_NAME;
    static override type = UniverInstanceType.UNIVER_SLIDE;

    constructor(
        private readonly _config: Partial<IUniverSlidesDrawingConfig> = {},
        @Inject(Injector) override readonly _injector: Injector,
        @IRenderManagerService private readonly _renderManagerService: IRenderManagerService,
        @IUniverInstanceService private readonly _univerInstanceService: IUniverInstanceService
    ) {
        super();
    }

    override onStarting(injector: Injector): void {
        ([
            [ISlideEditorBridgeService, { useClass: SlideEditorBridgeService }],
            [ISlideEditorManagerService, { useClass: SlideEditorManagerService }],
            [
                SlideUIController,
                {
                    useFactory: () => this._injector.createInstance(SlideUIController, this._config),
                },
            ],
            [IImageIoService, { useClass: ImageIoService }],
        ] as Dependency[]).forEach((d) => injector.add(d));
    }

    override onReady(): void {
        ([
            [SlideRenderController],
        ] as Dependency[]).forEach((m) => {
            this.disposeWithMe(this._renderManagerService.registerRenderModule(UniverInstanceType.UNIVER_SLIDE, m));
        });
    }

    override onRendered(): void {
        ([
            [SlideEditorBridgeRenderController],
            [SlideEditingRenderController],

        ] as Dependency[]).forEach((m) => {
            this.disposeWithMe(this._renderManagerService.registerRenderModule(UniverInstanceType.UNIVER_SLIDE, m));
        });

        this._markSlideAsFocused();
    }

    private _markSlideAsFocused() {
        const currentService = this._univerInstanceService;
        try {
            const slide = currentService.getCurrentUnitForType<SlideDataModel>(UniverInstanceType.UNIVER_SLIDE)!;
            currentService.focusUnit(slide.getUnitId());
        } catch (e) {
        }
    }
}
