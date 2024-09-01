function saveValue() {
    // Collect values from the input fields
    const currentLocation = document.getElementById('currentLocation').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const travelDate = document.getElementById('travelDate').value.trim();
    let passengerCount = document.getElementById('passengerCount').value.trim();
    const ticketType = document.getElementById('ticketType').value.trim();


    // Check if all inputs are filled
    if (!currentLocation || !destination || !travelDate || !passengerCount || !ticketType) {
        alert("Please fill in all fields before proceeding.");
        return; // Stop the function from proceeding
    }

    // Save values to local storage
    localStorage.setItem('currentLocation', currentLocation);
    localStorage.setItem('destination', destination);
    localStorage.setItem('travelDate', travelDate);
    localStorage.setItem('passengerCount', passengerCount);
    localStorage.setItem('ticketType', ticketType);

    // Redirect to booking.html
    window.location.href = "./booking.html";
}

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve stored values from local storage
    const currentLocation = localStorage.getItem('currentLocation');
    const destination = localStorage.getItem('destination');
    const travelDate = localStorage.getItem('travelDate');
    const passengerCount = localStorage.getItem('passengerCount');
    const ticketType = localStorage.getItem('ticketType');

    // Use the retrieved values to update the page
   

    document.getElementById('currentLocation').textContent = localStorage.getItem('currentLocation');
    document.getElementById('destination').textContent = localStorage.getItem('destination');
    document.getElementById('travelDate').textContent = localStorage.getItem('travelDate');
    document.getElementById('passengerCount').textContent = localStorage.getItem('passengerCount');
    document.getElementById('ticketType').textContent = localStorage.getItem('ticketType');
});

