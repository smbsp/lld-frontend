import React from 'react';

class CounterClass extends React.Component {
    render() {
        // Destructure the props inside the render method
        const { handleIncrement, handleDecrement, count } = this.props;

        return (
            <div className='container'>
                {/* Use the props functions for onClick handlers */}
                <button onClick={handleDecrement}>Decrement</button>
                {/* Use the count prop to display the count */}
                <p>{count}</p>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default CounterClass;

// import React from 'react';

// class CounterClass extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     handleIncrement = () => {
//         // Fix: Use this.state.count to access the current count
//         this.setState({ count: this.state.count + 1 });
//     }

//     handleDecrement = () => {
//         // Fix: Use this.state.count to access the current count
//         this.setState({ count: this.state.count - 1 });
//     }

//     render() {
//         return (
//             <div className='container'>
//                 {/* Fix: Add text to buttons and use this.state.count to display the count */}
//                 <button onClick={this.handleDecrement}>Decrement</button>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.handleIncrement}>Increment</button>
//             </div>
//         );
//     }
// }

// export default CounterClass;