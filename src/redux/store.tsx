import React from 'react'
import {createStore} from 'redux'
import rootReducer from './reducers/authReducer'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

function DataProvider({children}:any) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider