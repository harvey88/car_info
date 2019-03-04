import React from 'react'
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader/root'
import App from './src/components/App.jsx'
import {Provider} from 'react-redux'
import Store from './src/data/Store'

import { setConfig } from 'react-hot-loader'

setConfig({
    ignoreSFC: true, // RHL will be __completely__ disabled for SFC
    pureRender: true, // RHL will not change render method
})

const Main = (
        <Provider store={Store}>
            <App/>
        </Provider>
    )

ReactDOM.render(
    Main,
    document.getElementById('mount')
);

if (module.hot) {
    // console.log('Testff')
    module.hot.accept()
}

// module.hot.accept();