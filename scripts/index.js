

window.onload = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
    // Prevent the form from submitting and refreshing the page
        event.preventDefault();
        confirmSubmit(form);
    });
};

async function confirmSubmit(form) { 
    var date;
    var title;
    var content;

    //hide submit
    document.getElementById('submit').style.visibility = 'hidden';

    //create confirm button
    let confirmButton = document.createElement('button');
    confirmButton.setAttribute("id", "confirm-submit");
    confirmButton.innerHTML = "Confirm Submit?";    
    document.querySelector('#confirm-submit-container').appendChild(confirmButton);

    //TODO: CREATE CANCEL BUTTON

    //wait for submit to be clicked and assign values
    await confirmSubmitClicked(); 
    confirmButton.remove();
    date = document.getElementById('post-date').value;
    title = document.getElementById('post-title').value;
    content = document.getElementById('post-content').value;
    form.reset();
    console.log(date);

    //show submit
    document.getElementById('submit').style.visibility = 'visible';
}

function confirmSubmitClicked() {
    return new Promise(resolve => {
      // Get a reference to the button element
      const button = document.getElementById('confirm-submit');

      // Add an event listener to the button that resolves the Promise when clicked
      button.addEventListener('click', () => {
        resolve();
      });
    });
  }

    