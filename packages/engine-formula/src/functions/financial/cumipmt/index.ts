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

import { calculateFV, calculatePMT, checkVariantsErrorIsArrayOrBoolean } from '../../../basics/financial';
import { ErrorType } from '../../../basics/error-type';
import type { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { NumberValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';

export class Cumipmt extends BaseFunction {
    override minParams = 6;

    override maxParams = 6;

    override calculate(rate: BaseValueObject, nper: BaseValueObject, pv: BaseValueObject, startPeriod: BaseValueObject, endPeriod: BaseValueObject, type: BaseValueObject) {
        const { isError, errorObject, variants } = checkVariantsErrorIsArrayOrBoolean(rate, nper, pv, startPeriod, endPeriod, type);

        if (isError) {
            return errorObject as ErrorValueObject;
        }

        rate = (variants as BaseValueObject[])[0];
        nper = (variants as BaseValueObject[])[1];
        pv = (variants as BaseValueObject[])[2];
        startPeriod = (variants as BaseValueObject[])[3];
        endPeriod = (variants as BaseValueObject[])[4];
        type = (variants as BaseValueObject[])[5];

        const rateValue = +rate.getValue();
        const nperValue = +nper.getValue();
        const pvValue = +pv.getValue();
        let startPeriodValue = +startPeriod.getValue();
        const endPeriodValue = +endPeriod.getValue();
        const typeValue = +type.getValue();

        if (Number.isNaN(rateValue) || Number.isNaN(nperValue) || Number.isNaN(pvValue) || Number.isNaN(startPeriodValue) || Number.isNaN(endPeriodValue) || Number.isNaN(typeValue)) {
            return ErrorValueObject.create(ErrorType.VALUE);
        }

        if (
            rateValue <= 0 ||
            nperValue <= 0 ||
            pvValue <= 0 ||
            startPeriodValue < 1 ||
            endPeriodValue < 1 ||
            startPeriodValue > endPeriodValue ||
            ![0, 1].includes(typeValue)
        ) {
            return ErrorValueObject.create(ErrorType.NUM);
        }

        if (Math.trunc(startPeriodValue) !== startPeriodValue && Math.trunc(endPeriodValue) !== endPeriodValue && Math.trunc(startPeriodValue) === Math.trunc(endPeriodValue)) {
            return NumberValueObject.create(0);
        }

        startPeriodValue = Math.ceil(startPeriodValue);

        const payment = calculatePMT(rateValue, nperValue, pvValue, 0, typeValue);

        let result = 0;

        if (startPeriodValue === 1) {
            if (typeValue === 0) {
                result = -pvValue;
            }

            startPeriodValue++;
        }

        for (let i = startPeriodValue; i <= endPeriodValue; i++) {
            result += typeValue === 1
                ? calculateFV(rateValue, i - 2, payment, pvValue, 1) - payment
                : calculateFV(rateValue, i - 1, payment, pvValue, 0);
        }

        result *= rateValue;

        return NumberValueObject.create(result);
    }
}
