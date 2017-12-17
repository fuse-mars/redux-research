import { createStore, Store as ReduxStore } from 'redux'
import { IState, reducers } from './reducers'

import { decrementCounter, incrementCounter } from './actions'

const store: ReduxStore<IState> = createStore(reducers)

store.subscribe(() => {
    console.log('[STATE UPDATE]', store.getState())
})

store.dispatch(incrementCounter(1)) // { counter: { value: 1 } }
store.dispatch(incrementCounter(1)) // { counter: { value: 2 } }
store.dispatch(incrementCounter(1)) // { counter: { value: 3 } }
store.dispatch(decrementCounter(1)) // { counter: { value: 2 } }
