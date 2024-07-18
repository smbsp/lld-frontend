import { useState, useCallback } from "react";
import ListItems from "./ListItems";
import CounterClass from "./CounterClass";

const UseCallbackConcept = () => {
    // State for the list of items
    const [items, setItems] = useState([
        { id: '1', name: 'item 1' },
        { id: '2', name: 'item 2' },
        { id: '3', name: 'item 3' },
    ]);

    // State for the count
    const [count, setCount] = useState(0);

    // Function to delete an item from the list based on its ID
    const deletingItem = (itemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }

    // useCallback hook to memoize the handleDelete function
    const handleDelete = useCallback((itemId) => {
        deletingItem(itemId);
    }, [items]);

    // Functions for incrementing and decrementing the count
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const handleDecrement = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    // Render the component
    return (
        <>
            <h2>Your list items</h2>
            {/* Pass the count state as a prop to the CounterClass component */}
            <CounterClass 
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}  
                count={count}
            />
            <ListItems items={items} handleDelete={handleDelete} />
        </>
    );
}

export default UseCallbackConcept;
