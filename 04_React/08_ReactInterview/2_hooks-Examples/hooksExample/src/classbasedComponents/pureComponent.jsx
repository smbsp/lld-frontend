// When you run this code and click the "Increment Count" button, you'll notice that ParentComponent re-renders (as it should, 
// since its state is changing), but MyPureComponent does not re-render. 

import React, { Component } from 'react';
import MyPureComponent from './MyPureComponent';

class ParentComponent extends Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log('Rendering ParentComponent');
        return (
            <div>
                <button onClick={this.incrementCount}>Increment Count</button>
                <div>Count: {this.state.count}</div>
                <MyPureComponent myProp="static value" />
            </div>
        );
    }
}

export default ParentComponent;
