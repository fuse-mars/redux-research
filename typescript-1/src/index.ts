import { createStore, Store as ReduxStore } from 'redux'
import { reducers, Store } from './reducers'

import { incrementCounter, decrementCounter } from './actions'

const store: ReduxStore<Store.All> = createStore(reducers)

store.subscribe(() => {
    console.log('[STATE UPDATE]', store.getState())
})

store.dispatch(incrementCounter(1)) // { counter: { value: 1 } }
store.dispatch(incrementCounter(1)) // { counter: { value: 2 } }
store.dispatch(incrementCounter(1)) // { counter: { value: 3 } }
store.dispatch(decrementCounter(1)) // { counter: { value: 2 } }
