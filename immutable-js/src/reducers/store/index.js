import { fromJS } from 'immutable';

// representation of all data that the app is going to use
export const stateModel = {
    value: 0
}


export const INITIAL_STATE = fromJS(stateModel)