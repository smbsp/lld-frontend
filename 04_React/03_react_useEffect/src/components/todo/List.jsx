import React from 'react'

function List(listItemsAndEventProps) {
    const { listItems, handleDeleteListItem } = listItemsAndEventProps;
    
    // onClick={() => handleDeleteListItem(idx)} - A new instance of this arrow function is created in memory when the component renders(due to state changes, prop changes, or other  
    // updates), but it is not executed until the user clicks on the list item.
    return (
        <>
            <div className="list">
                <ul>
                    {
                        listItems.map((listItem, idx) => {
                            return <li key={idx} onClick={() => handleDeleteListItem(idx)}>{listItem}</li>
                        })
                    }
                </ul>


            </div>
        </>
    )
}

export default List
