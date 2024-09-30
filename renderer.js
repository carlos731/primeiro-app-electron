async function teste() {
    const response = await window.api.ping();

    console.log(response);
}

teste();

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button")
    const text = document.getElementById("text")

    button.addEventListener("click", async () => {
        const username = await window.api.getName("Carlos Henrique");
        console.log(username);
        text.textContent = username;
    });
});