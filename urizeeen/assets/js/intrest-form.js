// Get the form element with the ID 'intrestForm'
const form = document.getElementById('intrestForm');

// Get the submit button element within the form
const submitButton = form.querySelector('button');

// Function to get the selected shared activities from the form
function getSharedActivities() {
    // Get the div containing shared activities select element
    let sharedActivitiesDiv = form.querySelector('.sharedActivities');
    // Get the select element for shared activities
    let sharedActivitiesSelect = sharedActivitiesDiv.querySelector('select');
    // Initialize an array to store selected shared activities
    let sharedActivities = [];

    // Loop through all options in the select element
    for (const option of sharedActivitiesSelect.options) {
        // Check if the option is selected
        if (option.selected) {
            // Add the selected option value to the sharedActivities array
            sharedActivities.push(option.value);
        }
    }

    // Return the array of selected shared activities
    return sharedActivities;
}

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {
    // Get values from various input elements in the form
    const userName = form.querySelector('.personalInfo').querySelectorAll('input')[0].value;
    const userEmail = form.querySelector('.personalInfo').querySelectorAll('input')[1].value;
    const userPhone = form.querySelector('.personalInfo').querySelectorAll('input')[2].value;
    const userLocation = form.querySelector('.personalInfo').querySelectorAll('input')[3].value;

    // Get the selected shared activities using the getSharedActivities function
    const sharedActivities = getSharedActivities();

    // Get values from select elements and checkboxes for different activities
    const animalWalking = form.querySelector('.animalWalking').querySelectorAll('select')[0].value;
    const gardening = form.querySelector('.gardening').querySelectorAll('select')[0].value;
    const swimming = form.querySelector('.swimming').querySelectorAll('select')[0].value;
    const art = form.querySelector('.art').querySelectorAll('select')[0].value;

    const eats = form.querySelector('.eats').querySelectorAll('select')[0].value;
    const blockParties = (form.querySelector('.eats').querySelectorAll('input')[0].checked) ? true : false;
    const dinnerParties = (form.querySelector('.eats').querySelectorAll('input')[1].checked) ? true : false;

    const games = form.querySelector('.games').querySelectorAll('select')[0].value;
    const sports = (form.querySelector('.games').querySelectorAll('input')[0].checked) ? true : false;
    const shopping = (form.querySelector('.games').querySelectorAll('input')[1].checked) ? true : false;
    const movies = (form.querySelector('.games').querySelectorAll('input')[2].checked) ? true : false;
    const resturants = (form.querySelector('.games').querySelectorAll('input')[3].checked) ? true : false;

    const happyHour = form.querySelector('.happyHour').querySelectorAll('select')[0].value;

    const errands = form.querySelector('.favours').querySelectorAll('select')[0].value;
    const rides = form.querySelector('.favours').querySelectorAll('select')[1].value;
    const childcare = form.querySelector('.favours').querySelectorAll('select')[2].value;
    const eldercare = form.querySelector('.favours').querySelectorAll('select')[3].value;
    const petcare = form.querySelector('.favours').querySelectorAll('select')[4].value;
    const tutoring = form.querySelector('.favours').querySelectorAll('select')[5].value;
    const repairAdvice = form.querySelector('.favours').querySelectorAll('select')[6].value;
    const otherAdvice = form.querySelector('.favours').querySelectorAll('select')[7].value;

    // Create an object containing all the form details
    const formDetails = {
        userName: userName,
        userEmail: userEmail,
        userPhone: userPhone,
        userLocation: userLocation,
        sharedActivities: sharedActivities,
        animalWalking: animalWalking,
        gardening: gardening,
        swimming: swimming,
        art: art,
        eats: eats,
        blockParties: blockParties,
        dinnerParties: dinnerParties,
        games: games,
        sports: sports,
        shopping: shopping,
        movies: movies,
        resturants: resturants,
        happyHour: happyHour,
        errands: errands,
        rides: rides,
        childcare: childcare,
        eldercare: eldercare,
        petcare: petcare,
        tutoring: tutoring,
        repairAdvice: repairAdvice,
        otherAdvice: otherAdvice,
    };

    // Convert the formDetails object to JSON string
    const formDetailsJson = JSON.stringify(formDetails);

    // Set a cookie with the formDetails JSON and expiration date
    document.cookie = `formDetails=${formDetailsJson}; expires=Thu, 31 Dec 2023 23:59:59 UTC; path=/`;

    // Redirect to the 'profile.html' page after submitting the form
    window.location.href = 'profile.html';
});
