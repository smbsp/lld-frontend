// A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. It is a function that takes a component and returns a new component.
// They can be used with both class-based components and functional components.

import React from 'react';

// This is a Higher-Order Component.
const withBackgroundColor = (WrappedComponent, color) => {
    // It returns a new component.
    return function WithBackgroundColor(props) {
        return (
            <div style={{ backgroundColor: color }}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

// Usage with a functional component
const MyFunctionalComponent = () => {
    return <div>Hello, World!</div>;
};

const MyFunctionalComponentWithBackground = withBackgroundColor(MyFunctionalComponent, 'lightgreen');

// Now MyFunctionalComponentWithBackground has a lightgreen background.

