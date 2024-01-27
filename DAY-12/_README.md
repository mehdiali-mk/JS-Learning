# >>==>> DAY - 12.

# Events in JS.

- The change in the state of an object is known as an Event
- Events are fired to notify code of "interesting changes" that may affect code execution.

- Mouse events (click, double click etc.)
- Keyboard events (keypress, keyup, keydown)
- Form events (submit etc.)
- Print event & many more

# Event Handling in JS.

node.event = ( ) => {
//handle here
}

example.

btn.onclick = ( ) => {
console.log(“btn was clicked”);
}

# Event Object.

- It is a special object that has details about the event.
- All event handlers have access to the Event Object's properties and methods.

node.event = (e) => {
//handle here
}

- e.target, e.type, e.clientX, e.clientY

# Event Listeners

- node.addEventListener( event, callback ).
- node.removeEventListener( event, callback ).
- \*Note : the callback reference should be same to remove.
