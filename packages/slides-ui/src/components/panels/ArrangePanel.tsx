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

import React from 'react';

import type { Nullable } from '@univerjs/core';
import { LocaleService, useDependency } from '@univerjs/core';
import clsx from 'clsx';
import { Button } from '@univerjs/design';
import { BottomSingle, MoveDownSingle, MoveUpSingle, TopmostSingle } from '@univerjs/icons';
import { CanvasView } from '@univerjs/slides';
import type { Image, Rect, RichText } from '@univerjs/engine-render';
import styles from './index.module.less';

enum ArrangeTypeEnum {
    forward,
    backward,
    front,
    back,
}

interface IProps {
    unitId: string;
}

export default function ArrangePanel(props: IProps) {
    const { unitId } = props;

    const localeService = useDependency(LocaleService);
    const canvasView = useDependency(CanvasView);

    const page = canvasView.getRenderUnitByPageId(unitId);
    const scene = page?.scene;
    if (!scene) return null;

    const transformer = scene.getTransformer();
    if (!transformer) return null;

    const selectedObjects = transformer.getSelectedObjectMap();
    const object = selectedObjects.values().next().value as Nullable<Rect | RichText | Image>;
    if (!object) return null;

    const onArrangeBtnClick = (arrangeType: ArrangeTypeEnum) => {
        const allObjects = scene.getAllObjects();

        const [minZIndex, maxZIndex] = allObjects.reduce(([min, max], obj) => {
            const zIndex = obj.zIndex;
            const minZIndex = zIndex < min ? zIndex : min;
            const maxZIndex = zIndex > max ? zIndex : max;

            return [minZIndex, maxZIndex];
        }, [0, 0]);

        if (arrangeType === ArrangeTypeEnum.back) {
            object.setProps({ zIndex: minZIndex - 1 });
        } else if (arrangeType === ArrangeTypeEnum.front) {
            object.setProps({ zIndex: maxZIndex + 1 });
        } else if (arrangeType === ArrangeTypeEnum.forward) {
            object.setProps({ zIndex: object.zIndex + 1 });
        } else if (arrangeType === ArrangeTypeEnum.backward) {
            object.setProps({ zIndex: object.zIndex - 1 });
        }
    };

    return (
        <div className={styles.imageCommonPanelGrid}>
            <div className={styles.imageCommonPanelRow}>
                <div className={clsx(styles.imageCommonPanelColumn, styles.imageCommonPanelTitle)}>
                    <div>{localeService.t('image-panel.arrange.title')}</div>
                </div>
            </div>
            <div className={styles.imageCommonPanelRow}>
                <div className={clsx(styles.imageCommonPanelColumn, styles.imageCommonPanelSpan2)}>
                    <Button size="small" onClick={() => { onArrangeBtnClick(ArrangeTypeEnum.forward); }}>
                        <span className={styles.imageCommonPanelInline}>
                            <MoveUpSingle />
                            {localeService.t('image-panel.arrange.forward')}
                        </span>

                    </Button>
                </div>
                <div className={clsx(styles.imageCommonPanelColumn, styles.imageCommonPanelSpan2)}>
                    <Button size="small" onClick={() => { onArrangeBtnClick(ArrangeTypeEnum.backward); }}>
                        <span className={styles.imageCommonPanelInline}>
                            <MoveDownSingle />
                            {localeService.t('image-panel.arrange.backward')}
                        </span>

                    </Button>
                </div>
            </div>
            <div className={styles.imageCommonPanelRow}>
                <div className={clsx(styles.imageCommonPanelColumn, styles.imageCommonPanelSpan2)}>
                    <Button size="small" onClick={() => { onArrangeBtnClick(ArrangeTypeEnum.front); }}>
                        <span className={styles.imageCommonPanelInline}>
                            <TopmostSingle />
                            {localeService.t('image-panel.arrange.front')}
                        </span>

                    </Button>
                </div>
                <div className={clsx(styles.imageCommonPanelColumn, styles.imageCommonPanelSpan2)}>
                    <Button size="small" onClick={() => { onArrangeBtnClick(ArrangeTypeEnum.back); }}>
                        <span className={styles.imageCommonPanelInline}>
                            <BottomSingle />
                            {localeService.t('image-panel.arrange.back')}
                        </span>

                    </Button>
                </div>
            </div>
        </div>
    );
}
