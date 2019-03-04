import {combineReducers} from 'redux'

import {result, error} from './resultData'

const RootReducer = combineReducers({
    result,
    error
})

export default RootReducer
