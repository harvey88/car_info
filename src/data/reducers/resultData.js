import {
    GET_CAR_INFO_SUCCESS,
    ERROR_CAR_INFO_SUCCESS,
    CLEAR_REDUCER_SUCCESS
} from '../constants/constants'


const initialStateData = {}

const resultDataReducer = (state = initialStateData, action) => {
    switch(action.type){
        case GET_CAR_INFO_SUCCESS: {
            return action.result
        }
        case CLEAR_REDUCER_SUCCESS: return {}
        default: return state
    } 
}

const initialStateError = {}

const errorReducer = (state = initialStateError, action) => {
    switch(action.type){
        case ERROR_CAR_INFO_SUCCESS: {
            return action.error
        }
        case CLEAR_REDUCER_SUCCESS: return {}
        default: return state
    } 
}

export { resultDataReducer as result, errorReducer as error }
