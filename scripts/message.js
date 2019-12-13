function displayMessage(message, label = 'alert-info') {
    const main = document.querySelector('main');



    main.innerHTML =` <p class = "alert ${label} text-center">  ${message}  </p>`;
}

function displayErrorMessage(errorMessage){
    displayMessage(errorMessage,'alert-danger');
}