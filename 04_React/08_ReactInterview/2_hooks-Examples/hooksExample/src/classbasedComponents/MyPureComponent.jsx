// A Pure Component is a specific type of React component that optimizes rendering performance. It extends React.PureComponent 
// instead of React.Component. The primary difference between them is that a Pure Component implements the shouldComponentUpdate 
// lifecycle method with a shallow comparison of props and state.

import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
    render() {
        console.log('Rendering MyPureComponent');
        return <div>My Prop: {this.props.myProp}</div>;
    }
}

export default MyPureComponent;