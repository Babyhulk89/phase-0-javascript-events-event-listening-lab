function addingEventListener() {
}
// Get the button element by its ID
const input = document.getElementById('button');

// Define a callback function to be executed when the button is clicked
function handleClick() {
  alert('I was clicked!');
}

// Add the event listener to the button element
input.addEventListener('click', handleClick);
function addingEventListener() {
    // Get the button element by its ID
    const input = document.getElementById('button');
  
    // Define a callback function to be executed when the button is clicked
    function handleClick() {
      alert('I was clicked!');
    }
  
    // Add the event listener to the button element
    input.addEventListener('click', handleClick);
  }
  
  // Call the outer function to execute the event listener
  addingEventListener();
  