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

import type { IDisposable } from '@univerjs/core';
import {
    createIdentifier,
    Disposable, DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
    IContextService,
    Inject,
    IUniverInstanceService,
    ThemeService,
} from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IEditorService } from '@univerjs/ui';

export const ISlideEditorBridgeService = createIdentifier<SlideEditorBridgeService>('univer.slide-editor-bridge.service');
export interface ISlideEditorBridgeService {
    // currentEditCellState$: Observable<Nullable<IEditorBridgeServiceParam>>;
    // visible$: Observable<IEditorBridgeServiceVisibleParam>;
    // interceptor: InterceptorManager<{
    //     BEFORE_CELL_EDIT: typeof BEFORE_CELL_EDIT;
    //     AFTER_CELL_EDIT: typeof AFTER_CELL_EDIT;
    //     AFTER_CELL_EDIT_ASYNC: typeof AFTER_CELL_EDIT_ASYNC;
    // }>;
    dispose(): void;
    // refreshEditCellState(): void;
    // setEditCell(param: ICurrentEditCellParam): void;
    // getEditCellState(): Readonly<Nullable<IEditorBridgeServiceParam>>;
    // // Gets the DocumentDataModel of the latest table cell based on the latest cell contents
    // getLatestEditCellState(): Readonly<Nullable<IEditorBridgeServiceParam>>;
    // changeVisible(param: IEditorBridgeServiceVisibleParam): void;
    // changeEditorDirty(dirtyStatus: boolean): void;
    // getEditorDirty(): boolean;
    // isVisible(): IEditorBridgeServiceVisibleParam;
    // enableForceKeepVisible(): void;
    // disableForceKeepVisible(): void;
    // isForceKeepVisible(): boolean;
    // getCurrentEditorId(): Nullable<string>;
}

export class SlideEditorBridgeService extends Disposable implements ISlideEditorBridgeService, IDisposable {
    private _editorUnitId: string = DOCS_NORMAL_EDITOR_UNIT_ID_KEY;

  // private _currentEditCell: Nullable<ICurrentEditCellParam> = null;

    constructor(
        @IRenderManagerService private readonly _renderManagerService: IRenderManagerService,
        @Inject(ThemeService) private readonly _themeService: ThemeService,
        @IUniverInstanceService private readonly _univerInstanceService: IUniverInstanceService,
        @IEditorService private readonly _editorService: IEditorService,
        @IContextService private readonly _contextService: IContextService
    ) {
        super();
        console.log('SlideEditorBridgeService _editorService', this._editorService);
    }

    override dispose() {
        super.dispose();
    }
}
