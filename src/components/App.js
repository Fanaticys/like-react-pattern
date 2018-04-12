import React from 'react';
import { Provider } from 'react-redux';

import DataLoader from './DataLoader';
import Receiver from './Receiver';
import store from '../store';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Provider store={store}>
                <DataLoader baseURL="//localhost:7000">
                    {(props) => {
                        console.log("Data loader children:props", props);
                        return (<Receiver {...props} /> );
                    }}
                </DataLoader>
            </Provider>
        )
    }
}

export default App;