/**
 * Retrieves the value of a cookie by its name.
 *
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string|undefined} The value of the cookie if found, or undefined if the cookie does not exist.
 */
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) return parts.pop().split(';').shift();
}

/**
* Deletes all cookies on the current domain and redirects to the login page.
* 
* @returns {void}
*/
function deleteAllCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  window.location.href = "index.html"; // Redirect to the login page after deleting cookies
}
document.addEventListener('DOMContentLoaded', async function () {
  const locationInput = document.querySelector('.location');

  if (!locationInput) {
    console.error("Location input element not found.");
    return;
  }

  async function getLocationInfo() {
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Call the function to get location information
        await displayLocationInfo(latitude, longitude);
      } catch (error) {
        console.error("Error getting position:", error);
        alert("Could not get position");
      }
    } else {
      alert("Geolocation is not supported in this browser.");
    }
  }

  async function displayLocationInfo(latitude, longitude) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Access the location information from the 'data' object
      const location = data.display_name;

      // Set the value of the location input
      locationInput.value = location;

      console.log("Location:", location);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

  await getLocationInfo();
});
