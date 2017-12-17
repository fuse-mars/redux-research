
export enum TypeKeys {
    INCREMENT_COUNTER = 'INC',
    DECREMENT_COUNTER = 'DEC',
    OTHER_ACTION = '__any_other_action_type__',
}

// START Actions

export interface IIncrementAction {
    type: TypeKeys.INCREMENT_COUNTER
    by: number
}

export interface IDecrementAction {
    type: TypeKeys.DECREMENT_COUNTER
    by: number
}

export interface IOtherAction {
    type: TypeKeys.OTHER_ACTION
}
export type ActionTypes =
    | IIncrementAction
    | IDecrementAction
    | IOtherAction
// END Actions

// START Action Creators

export const incrementCounter = (by: number): IIncrementAction => ({
    by,
    type: TypeKeys.INCREMENT_COUNTER,
})
export const decrementCounter = (by: number): IDecrementAction => ({
    by,
    type: TypeKeys.DECREMENT_COUNTER,
})

// END Action Creators
