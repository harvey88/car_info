import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import RootReducer from './reducers/RootReducer'

const loggerMiddleware = createLogger()

function configureStore() {
    return createStore(
        RootReducer,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

let Store = configureStore();


export default Store;