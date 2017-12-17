import { combineReducers } from 'redux'
import { ActionTypeKeys } from '../actions'
import { INITIAL_STATE } from './store'

/**
 * 
 * @param { value: number } state 
 * @param { by: number } action 
 */
function counterReducer(state = INITIAL_STATE, action) {
    let { operation, location, updateFunction, value } = action
    if (operation) {
        return state[operation](location, updateFunction || fromJS(value))
    }
    return state
}

export const reducers = combineReducers({
    counterReducer,
})

export default reducers
