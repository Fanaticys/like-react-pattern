import React from 'react';

class Receiver extends React.Component {
    constructor(props){
        super(props);

        console.log('Reciever', props);
    }

    render(){
        return (
            <div>Receiver</div>
        )
    }
} 

export default Receiver;