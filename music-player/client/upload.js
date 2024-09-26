document.getElementById("uploadForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const statusDiv = document.getElementById("uploadStatus");
    const submitButton = document.getElementById("submitButton"); // Ensure this ID matches your button

    // Log FormData entries
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    try {
        submitButton.disabled = true; // Disable the button
        statusDiv.textContent = "Uploading...";
        statusDiv.style.color = "blue";

        const response = await fetch("http://localhost:3005/api/songs", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            statusDiv.textContent = `Successfully uploaded: ${result.data.title} by ${result.data.artist}`;
            statusDiv.style.color = "green";
        } else {
            statusDiv.textContent = `Error: ${result.errors ? result.errors.map(e => e.msg).join(", ") : result.message}`;
            statusDiv.style.color = "red";
        }
    } catch (error) {
        statusDiv.textContent = `Network Error: ${error.message}`;
        statusDiv.style.color = "red";
    } finally {
        submitButton.disabled = false; // Re-enable the button
    }
});
