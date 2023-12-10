import type { IExecutionOptions, IMutation, IUnitRange, Nullable } from '@univerjs/core';
import { CommandType } from '@univerjs/core';

import type {
    IDirtyUnitFeatureMap,
    IDirtyUnitSheetNameMap,
    IRuntimeOtherUnitDataType,
    IRuntimeUnitDataType,
} from '../../basics/common';
import type { FormulaExecutedStateType, IExecutionInProgressParams } from '../../services/runtime.service';

export interface ISetFormulaCalculationStartMutation {
    dirtyRanges: IUnitRange[];
    dirtyNameMap: IDirtyUnitSheetNameMap;
    dirtyUnitFeatureMap: IDirtyUnitFeatureMap;
    options: Nullable<IExecutionOptions>;
    forceCalculation?: boolean;
}
/**
 * TODO: @DR-Univer
 * Trigger the calculation of the formula and stop the formula
 */
export const SetFormulaCalculationStartMutation: IMutation<ISetFormulaCalculationStartMutation> = {
    id: 'formula.mutation.set-formula-calculation-start',
    type: CommandType.MUTATION,
    handler: () => true,
};

export interface ISetFormulaCalculationStopMutation {}

export const SetFormulaCalculationStopMutation: IMutation<ISetFormulaCalculationStopMutation> = {
    id: 'formula.mutation.set-formula-calculation-stop',
    type: CommandType.MUTATION,
    handler: () => true,
};

export interface ISetFormulaCalculationNotificationMutation {
    functionsExecutedState?: FormulaExecutedStateType;
    stageInfo?: IExecutionInProgressParams;
}

export const SetFormulaCalculationNotificationMutation: IMutation<ISetFormulaCalculationNotificationMutation> = {
    id: 'formula.mutation.set-formula-calculation-notification',
    type: CommandType.MUTATION,
    handler: () => true,
};

export interface ISetFormulaCalculationResultMutation {
    unitData: IRuntimeUnitDataType;
    unitOtherData: IRuntimeOtherUnitDataType;
}

export const SetFormulaCalculationResultMutation: IMutation<ISetFormulaCalculationResultMutation> = {
    id: 'formula.mutation.set-formula-calculation-result',
    type: CommandType.MUTATION,
    handler: () => true,
};
