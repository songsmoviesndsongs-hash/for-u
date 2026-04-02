let noClickCount = 0;

function moveYesBtn() {
    const yesBtn = document.getElementById("yesBtn");

    // Move the "Yes" button first
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    yesBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Disable the "Yes" button after it moves
    yesBtn.disabled = true;
    yesBtn.style.cursor = 'not-allowed';  // Change cursor to indicate that it's disabled
}

function moveNoBtn() {
    const noBtn = document.getElementById("noBtn");

    // Get the window width and height
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the button width and height
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Calculate the boundaries
    const maxX = windowWidth - buttonWidth - 20;  // 20px margin from edge
    const maxY = windowHeight - buttonHeight - 20;  // 20px margin from edge

    // Randomly move the "No" button within the screen bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position to the "No" button
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function clickedNo() {
    noClickCount++; // Increment the counter each time "No" is clicked

    if (noClickCount === 1) {
        // On the first click, just move the "No" button
        moveNoBtn();
    } else if (noClickCount === 2) {
        // On the second click, show the thank you message
        const thankYouMessage = document.getElementById("thankYouMessage");
        const name = document.getElementById("namePlaceholder").innerText;

        // Change the name in the thank you message
        document.getElementById("nameThankYou").innerText = name;

        // Display the thank you message
        thankYouMessage.style.display = "block";

        // Hide the buttons after the second "No" click
        document.querySelector(".buttons").style.display = "none";
    }
}

// Optional: If you want to replace the placeholder dynamically with her name
function setName(name) {
    document.getElementById("namePlaceholder").innerText = name;
}