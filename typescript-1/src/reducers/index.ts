import { combineReducers } from 'redux'
import { Action } from '../actions'
import { INITIAL_STATE, Store } from './store'

function counter(state: Store.Counter = INITIAL_STATE, action: Action): Store.Counter {
    const { value } = state
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { value: value + action.delta }
        case 'DECREMENT_COUNTER':
            return { value: value - action.delta }
        case 'RESET_COUNTER':
            return { value: 0 }
    }
    return state
}

export const reducers = combineReducers<Store.All>({
    counter,
})

export { Store } from './store'
export default reducers
