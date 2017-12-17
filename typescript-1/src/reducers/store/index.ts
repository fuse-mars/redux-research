export namespace Store {

    export type Counter = { value: number }

    // represents what you see when you call `store.getState()`
    export type All = {
        counter: Counter,
    }
}

export const INITIAL_STATE: Store.Counter = {
    value: 0,
}
