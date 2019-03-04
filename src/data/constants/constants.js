import config from '../../config/config'

const routePrefix = config.baseUrl

export const GET_CAR_INFO_ROUTE = routePrefix + '/car-info'

export const GET_CAR_INFO_SUCCESS = 'GET_CAR_INFO_SUCCESS'
export const ERROR_CAR_INFO_SUCCESS = 'ERROR_CAR_INFO_SUCCESS'
export const CLEAR_REDUCER_SUCCESS = 'CLEAR_REDUCER_SUCCESS' 