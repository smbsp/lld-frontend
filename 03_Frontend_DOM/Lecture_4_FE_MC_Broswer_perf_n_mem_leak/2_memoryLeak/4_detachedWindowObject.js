// Detached Window Object - A window object that has been detached from its parent window and operates independently.

function createAndCloseWindow() {
    // Create a new window
    const newWindow = window.open('', 'NewWindow', 'width=300,height=200');

    // Do something with the new window
    newWindow.document.write('<p>This is a new window!</p>');

    // Properly close and dereference the window
    newWindow.close();
    detachedWindow = null; // Remove the reference to allow garbage collection
}

createAndDetachWindow();
