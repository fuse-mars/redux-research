
export const ActionTypeKeys = {
    INCREMENT_COUNTER: 'INCREMENT_COUNTER',
    DECREMENT_COUNTER: 'DECREMENT_COUNTER',
    OTHER_ACTION: '__any_other_action_type__',
}

// START Action Creators

export const incrementCounter = (by) => ({
    by,
    type: ActionTypeKeys.INCREMENT_COUNTER,
})
export const decrementCounter = (by) => ({
    by,
    type: ActionTypeKeys.DECREMENT_COUNTER,
})

// END Action Creators
