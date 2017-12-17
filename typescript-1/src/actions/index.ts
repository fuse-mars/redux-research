export type Action = {
    type: 'INCREMENT_COUNTER',
    delta: number,
} | {
    type: 'DECREMENT_COUNTER',
    delta: number,
} | {
    type: 'RESET_COUNTER',
}

export const incrementCounter = (delta: number): Action => ({
    delta,
    type: 'INCREMENT_COUNTER',
})
export const decrementCounter = (delta: number): Action => ({
    delta,
    type: 'DECREMENT_COUNTER',
})

export const resetCounter = (): Action => ({
    type: 'RESET_COUNTER',
})
