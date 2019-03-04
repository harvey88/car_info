import {
    GET_CAR_INFO_SUCCESS,
    ERROR_CAR_INFO_SUCCESS,
    CLEAR_REDUCER_SUCCESS,
    GET_CAR_INFO_ROUTE
} from '../constants/constants'

import http from '../../utils/httpService'

const getCarInfoSuccess = result => ({
    type: GET_CAR_INFO_SUCCESS,
    result
})

const errorCarInfo = error => ({
    type: ERROR_CAR_INFO_SUCCESS,
    error
})

const getCarInfo = (value) => dispatch => {
    const route = `${GET_CAR_INFO_ROUTE}/${value}`
    http.request(route, 'GET')
            .then(data =>  {
                if(data.code === 200 ) {
                    dispatch(getCarInfoSuccess(data.body)) 
                } else if (data.code === 400) {
                    dispatch(errorCarInfo(data.body))
                }})
}

const clearReducerSuccess = () => ({ type: CLEAR_REDUCER_SUCCESS })

const clearReducer = () => dispatch => {
    dispatch(clearReducerSuccess())
}

export {
    getCarInfo,
    clearReducer
}