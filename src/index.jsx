import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/change'
import Box from './components/box';

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <div>
            <Box />
        </div>
    </Provider>
);


ReactDOM.render(<App/>, document.getElementById('root'));