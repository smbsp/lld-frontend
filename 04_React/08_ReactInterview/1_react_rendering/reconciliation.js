/* 
<div class="container">
    <h1>this is</h1>  
    <p class="paragraph">I am 
       <button>1 clicks</button>
       from
    </p>
</div> 
*/

const htmlString = `
<div class="container">
    <h1>Count Down Timer</h1>
    <div class="timer__label">
        <h2 class="timer__label--hrs">Hours</h2>
        <h2 class="timer__label--sec">Second</h2>
        <div class="timer_inputs">
            <input type="number" maxlength="2" oninput="this.value=this.value.slice(0, this.maxLength)" id="sec">
        </div>
        <div class="container__btns">
            <button class="btn start" id="start">Start</button>
        </div>
    </div>
</div>
`;

// Uses - 1. HTML to Virtual DOM Representation
// Function to convert an HTML element to a virtual DOM object representation
function htmlToObject(element) {
    // Create an object with 'type' set to the element's tag name (in lowercase)
    // and an empty 'props' object to hold attributes and children
    const obj = {
        type: element.tagName.toLowerCase(),
        props: {}
    };

    // Iterate over the element's attributes and add them to the 'props' object
    Array.from(element.attributes).forEach(attr => {
        obj.props[attr.name] = attr.value;
    });

    // Get all child nodes of the element
    const children = Array.from(element.childNodes);

    // If there are any children, process them
    if (children.length) {
        // Map each child node to its corresponding virtual DOM representation
        obj.props.children = children.map(child => {
            // If the child is a text node (nodeType === 3), return its trimmed text content
            // Otherwise, recursively call htmlToObject to convert the child element to an object
            return child.nodeType === 3 ? child.textContent.trim() : htmlToObject(child);
        })
            // Filter out any empty text nodes (which result in empty strings)
            .filter(child => child);
    }

    // Return the virtual DOM object
    return obj;
}

// Create a new DOMParser instance
const parser = new DOMParser();
// Parse the HTML string into a document
const doc = parser.parseFromString(htmlString, 'text/html');
// Convert the first child of the body (the root element of the HTML string) to a virtual DOM object
const obj = htmlToObject(doc.body.firstChild);
// Log the resulting virtual DOM object
console.log(obj);

// Output: This is Virtual DOM
// const obj = {
//     type: 'div',
//     props: {
//         class: 'container',
//         children: [
//             {
//                 type: 'h1',
//                 props: {
//                     children: 'Count Down Timer'
//                 }
//             },
//             {
//                 type: 'div',
//                 props: {
//                     class: 'timer__label',
//                     children: [
//                         {
//                             type: 'h2',
//                             props: {
//                                 class: 'timer__label--hrs',
//                                 children: 'Hours'
//                             }
//                         },
//                         {
//                             type: 'h2',
//                             props: {
//                                 class: 'timer__label--sec',
//                                 children: 'Second'
//                             }
//                         },
//                         {
//                             type: 'div',
//                             props: {
//                                 class: 'timer_inputs',
//                                 children: [
//                                     {
//                                         type: 'input',
//                                         props: {
//                                             type: 'number',
//                                             maxlength: '2',
//                                             oninput: 'this.value=this.value.slice(0, this.maxLength)',
//                                             id: 'sec'
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             type: 'div',
//                             props: {
//                                 class: 'container__btns',
//                                 children: [
//                                     {
//                                         type: 'button',
//                                         props: {
//                                             class: 'btn start',
//                                             id: 'start',
//                                             children: 'Start'
//                                         }
//                                     }
//                                 ]
//                             }
//                         }
//                     ]
//                 }
//             }
//         ]
//     }
// };

// The object obj represents a simplified version of a virtual DOM (VDOM) node structure commonly used in frontend libraries 
// like React. It describes a tree structure of elements to be rendered, where each node specifies the type of element 
// (e.g., 'div', 'h1', 'p'), its properties (e.g., class, children), and any child elements.

// This object does not directly represent a transpilation process, but it is related to how modern frontend frameworks 
// like React work. In React, components are often written in JSX, which is a syntax extension for JavaScript that looks similar 
// to HTML. During the build process, JSX is transpiled into JavaScript code that creates objects similar to obj, which represent 
// the virtual DOM. React then uses these objects to efficiently update the actual DOM in the browser.

/**
 * 1. type: 
 *        -> string: html element: documnet.createElement
 *        -> function: custom component: call that function and if we have props then pass that also 
 * 
 * 2. props:
 *        -> object
 *        -> values -> string: normal attributes ex: class, id -> setAttribute
 *        -> children: 
 *                  -> Arrays - iterates through the children and recursively calls
 *                  -> can have values as string
 *                  -> can have values as function: custom element
 *                  -> can have object: normal element. 
 * 
 */

// Takes an object representing a virtual DOM node and creates the corresponding actual DOM elements
// Function to convert a virtual DOM object to an actual DOM element
function render(obj) {
    // Validate the input object
    if (!obj || typeof obj !== 'object' || !obj.type) {
        throw new Error('Invalid object for rendering');
    }

    let element; // Variable to hold the created DOM element

    // Create the DOM element based on the type of the object
    if (typeof obj.type === 'string') {
        // If the type is a string, create a corresponding HTML element
        element = document.createElement(obj.type);
    } else if (typeof obj.type === 'function') {
        // If the type is a function (custom component), call the function to get the resulting object
        const props = obj.props || {}; // Default to an empty object if props are undefined
        const elementObj = obj.type(props); // Get the object returned by the custom component function
        return render(elementObj); // Recursively render the result of the function
    } else {
        // If the type is neither a string nor a function, throw an error
        throw new Error('Invalid type for rendering');
    }

    // Set attributes and handle children
    const props = obj.props || {}; // Default to an empty object if props are undefined
    for (let prop in props) {
        if (prop === 'children') {
            // Handle children separately
            const children = props[prop]; // Get the children from the props
            if (Array.isArray(children)) {
                // If children is an array, iterate over each child and render it
                children.forEach((child) => {
                    if (typeof child === 'string') {
                        // If the child is a string, create a text node and append it to the element
                        const textNode = document.createTextNode(child);
                        element.appendChild(textNode);
                    } else {
                        // If the child is an object, recursively render it and append the result to the element
                        const childElem = render(child);
                        element.appendChild(childElem);
                    }
                });
            } else if (typeof children === 'string') {
                // If children is a single string, create a text node and append it to the element
                const textNode = document.createTextNode(children);
                element.appendChild(textNode);
            } else if (typeof children === 'object') {
                // If children is a single object, recursively render it and append the result to the element
                const childElem = render(children);
                element.appendChild(childElem);
            } else {
                // If children is an invalid type, throw an error
                throw new Error('Invalid children type for rendering');
            }
        } else if (typeof props[prop] === 'string') {
            // If the prop is a string, set it as an attribute on the element
            element.setAttribute(prop, props[prop]);
        }
    }

    // Return the created DOM element
    return element;
}

document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("wholeApp:", wholeApp);
    rootElement.appendChild(wholeApp);
});

// Diffing Algorithm
function diff(oldVNode, newVNode) {
    // If the nodes are identical, there's nothing to do
    if (oldVNode === newVNode) {
        return;
    }

    // If the old node is not present, create a new node
    if (!oldVNode) {
        return { type: 'CREATE', newNode: newVNode };
    }

    // If the new node is not present, remove the old node
    if (!newVNode) {
        return { type: 'REMOVE', oldNode: oldVNode };
    }

    // If the nodes have different types, replace the old node with the new node
    if (oldVNode.type !== newVNode.type) {
        return { type: 'REPLACE', oldNode: oldVNode, newNode: newVNode };
    }

    // If the nodes are the same type but have different text content, update the text
    if (newVNode.type === 'TEXT' && oldVNode.text !== newVNode.text) {
        return { type: 'UPDATE_TEXT', oldNode: oldVNode, newText: newVNode.text };
    }

    // If the nodes are the same type and have children, diff the children recursively
    if (newVNode.children) {
        const childPatches = [];
        for (let i = 0; i < newVNode.children.length; i++) {
            const oldChild = oldVNode.children[i];
            const newChild = newVNode.children[i];
            const patch = diff(oldChild, newChild);
            if (patch) {
                childPatches.push({ ...patch, index: i });
            }
        }
        return { type: 'UPDATE_CHILDREN', oldNode: oldVNode, patches: childPatches };
    }
}

// Example usage
const oldVNode = {
    type: 'div',
    children: [
        { type: 'TEXT', text: 'Hello' }
    ]
};

const newVNode = {
    type: 'div',
    children: [
        { type: 'TEXT', text: 'Goodbye' }
    ]
};

const patch = diff(oldVNode, newVNode);
console.log("patch", patch);

// Apply patch to DOM - sample code
function applyPatch(domNode, patch, index = 0) {
    if (!domNode) {
        throw new Error('DOM node is undefined');
    }

    console.log('Applying patch:', patch.type, 'to node:', domNode, 'at index:', index);

    switch (patch.type) {
        case 'CREATE':
            const newNode = render(patch.newNode);
            domNode.appendChild(newNode);
            break;
        case 'REMOVE':
            domNode.removeChild(domNode.childNodes[index]);
            break;
        case 'REPLACE':
            const replacedNode = render(patch.newNode);
            domNode.replaceChild(replacedNode, domNode.childNodes[index]);
            break;
        case 'UPDATE_TEXT':
            domNode.childNodes[index].textContent = patch.newText;
            break;
        case 'UPDATE_CHILDREN':
            patch.patches.forEach((childPatch) => {
                applyPatch(domNode.childNodes[childPatch.index], childPatch, childPatch.index);
            });
            break;
        default:
            throw new Error('Unknown patch type: ' + patch.type);
    }
}




