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

import { CustomRangeType, Disposable, LifecycleStages, OnLifecycle, Tools } from '@univerjs/core';
import { DocCustomRangeService } from '@univerjs/docs';
import { DocHyperLinkModel } from '@univerjs/docs-hyper-link';
import { Inject } from '@wendellhu/redi';

@OnLifecycle(LifecycleStages.Ready, DocHyperLinkCustomRangeController)
export class DocHyperLinkCustomRangeController extends Disposable {
    constructor(
        @Inject(DocCustomRangeService) private readonly _docCustomRangeService: DocCustomRangeService,
        @Inject(DocHyperLinkModel) private readonly _docHyperLinkModel: DocHyperLinkModel
    ) {
        super();

        this._initCustomRangeHooks();
    }

    private _initCustomRangeHooks() {
        this.disposeWithMe(
            this._docCustomRangeService.addClipboardHook({
                onCopyCustomRange: (unitId, range) => {
                    const { rangeId, rangeType, ...ext } = range;

                    if (rangeType === CustomRangeType.HYPERLINK) {
                        const link = this._docHyperLinkModel.getLink(unitId, rangeId);
                        if (!link) {
                            return range;
                        }
                        const newId = Tools.generateRandomId();
                        this._docHyperLinkModel.addLink(unitId, {
                            id: newId,
                            payload: link.payload,
                        });

                        return {
                            ...ext,
                            rangeId: newId,
                            rangeType,
                        };
                    }
                    return range;
                },
            })
        );
    }
}
