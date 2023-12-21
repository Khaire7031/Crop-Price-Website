var currentDateElement = document.getElementById('currentDate');

function updateDate() {
    // Create a new Date object
    var currentDate = new Date();

    // Format the date (you can customize the format as needed)
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Set the formatted date to the span element
    currentDateElement.textContent = formattedDate;
}

// Update the date initially
updateDate();

// Update the date every 1 second (adjust the interval as needed)
setInterval(updateDate, 1000);










// count