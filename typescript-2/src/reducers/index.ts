import { combineReducers } from 'redux'
import { ActionTypes, TypeKeys } from '../actions'
import { IState } from './store'

const INITIAL_STATE: IState = {
    value: 0,
}

function counter(state: IState = INITIAL_STATE, action: ActionTypes): IState {
    switch (action.type) {
        case TypeKeys.INCREMENT_COUNTER:
            return { value: state.value + action.by }
        case TypeKeys.DECREMENT_COUNTER:
            return { value: state.value - action.by }
    }

    return state
}

export const reducers = combineReducers<IState>({
    counter,
})

export { IState } from './store'
export default reducers
