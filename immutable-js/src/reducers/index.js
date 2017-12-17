import { combineReducers } from 'redux'
import { ActionTypeKeys } from '../actions'
import { INITIAL_STATE } from './store'

/**
 * 
 * @param { value: number } state 
 * @param { by: number } action 
 */
function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypeKeys.INCREMENT_COUNTER:
            return state.updateIn(['value'], (value) => value + action.by);
        case ActionTypeKeys.DECREMENT_COUNTER:
            return state.updateIn(['value'], (value) => value - action.by);
    }
    return state
}

export const reducers = combineReducers({
    counter,
})

export default reducers
