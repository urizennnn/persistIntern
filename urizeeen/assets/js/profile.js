// Function to create an input element with a label and value, and append it to the specified parent element
function createInput(title, value, parentToAppendTo) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input');

    const inputDivLabel = document.createElement('label');
    inputDivLabel.innerHTML = title;

    const inputDivInput = document.createElement('input');
    inputDivInput.setAttribute("value", value);

    inputDiv.appendChild(inputDivInput);

    parentToAppendTo.appendChild(inputDiv);
}

// Function placeholder for creating a select element with options (implementation not shown)

// Get the value of the 'formDetails' cookie
const intrestFormDetails = getCookie('formDetails');



// Check if 'formDetails' cookie exists
if (intrestFormDetails) {


    // Parse the JSON data from the 'formDetails' cookie
    const formDetails = JSON.parse(intrestFormDetails);

    // Get the 'intrestForm' element
    const form = document.getElementById('intrestForm');

    // Extract values from 'formDetails' and assign them to variables
    const userName = formDetails.userName;
    const userEmail = formDetails.userEmail;
    const userPhone = formDetails.userPhone;
    const userLocation = formDetails.userLocation;
    const sharedActivities = formDetails.sharedActivities;
    const animalWalking = formDetails.animalWalking;
    const gardening = formDetails.gardening;
    const swimming = formDetails.swimming;
    const art = formDetails.art;
    const eats = formDetails.eats;
    const blockParties = formDetails.blockParties;
    const dinnerParties = formDetails.dinnerParties;
    const games = formDetails.games;
    const sports = formDetails.sports;
    const shopping = formDetails.shopping;
    const movies = formDetails.movies;
    const resturants = formDetails.resturants;
    const happyHour = formDetails.happyHour;
    const errands = formDetails.errands;
    const rides = formDetails.rides;
    const childcare = formDetails.childcare;
    const eldercare = formDetails.eldercare;
    const petcare = formDetails.petcare;
    const tutoring = formDetails.tutoring;
    const repairAdvice = formDetails.repairAdvice;
    const otherAdvice = formDetails.otherAdvice;

    // Set form input values with the extracted data
    form.querySelector('.personalInfo').querySelectorAll('input')[0].value = userName;
    form.querySelector('.personalInfo').querySelectorAll('input')[1].value = userEmail;
    form.querySelector('.personalInfo').querySelectorAll('input')[2].value = userPhone;
    form.querySelector('.personalInfo').querySelectorAll('input')[3].value = userLocation;

    // Create input elements for each shared activity and append them to the form
    sharedActivities.forEach((sharedActivity) => {
        createInput('', sharedActivity, form.querySelector('.sharedActivities').querySelector('.body'));
    });

    // Set form input values with the extracted data for other activities
    form.querySelector('.animalWalking').querySelectorAll('input')[0].value = animalWalking;
    form.querySelector('.gardening').querySelectorAll('input')[0].value = gardening;
    form.querySelector('.swimming').querySelectorAll('input')[0].value = swimming;
    form.querySelector('.art').querySelectorAll('input')[0].value = art;

    form.querySelector('.eats').querySelectorAll('input')[0].value = eats;

    (blockParties) ? form.querySelector('.eats').querySelectorAll('input')[0].checked = true : '';
    (dinnerParties) ? form.querySelector('.eats').querySelectorAll('input')[1].checked = true : '';

    form.querySelector('.games').querySelectorAll('input')[0].value = games;

    (sports) ? form.querySelector('.games').querySelectorAll('input')[1].checked = true : '';
    (shopping) ? form.querySelector('.games').querySelectorAll('input')[2].checked = true : '';
    (movies) ? form.querySelector('.games').querySelectorAll('input')[3].checked = true : '';
    (resturants) ? form.querySelector('.games').querySelectorAll('input')[3].checked = true : '';

    form.querySelector('.happyHour').querySelectorAll('input')[0].value = happyHour;

    form.querySelector('.favours').querySelectorAll('input')[0].value = errands;
    form.querySelector('.favours').querySelectorAll('input')[1].value = rides;
    form.querySelector('.favours').querySelectorAll('input')[2].value = childcare;
    form.querySelector('.favours').querySelectorAll('input')[3].value = eldercare;
    form.querySelector('.favours').querySelectorAll('input')[4].value = petcare;
    form.querySelector('.favours').querySelectorAll('input')[5].value = tutoring;
    form.querySelector('.favours').querySelectorAll('input')[6].value = repairAdvice;
    form.querySelector('.favours').querySelectorAll('input')[7].value = otherAdvice;
} else {

    // Get the 'intrestForm' element
    const form = document.getElementById('intrestForm');

    form.querySelector(".headbody").innerHTML = "<center><h1>No Information was Found</h1></h1>";

}

// Get the value of 'userDataJson' (implementation not shown)

// Check if 'userDataJson' exists
if (userDataJson) {
    // Parse the JSON data from 'userDataJson'
    const userDetails = JSON.parse(userDataJson);

    // Extract values from 'userDetails'
    const userName = userDetails.name;
    const userUsername = userDetails.username;

    // Set the extracted values to the respective elements on the page
    document.getElementById("loggedInUserName").innerHTML = userName;
    document.getElementById("loggedInUserUsername").innerHTML = userUsername;
}
