const firstYears = [];
const voldArmy = [];

// Will allow functions to print to the DOM
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

// Will handle the click events that occur on the page
const pageEvents = () => {
    document.querySelector("#start-btn-container").addEventListener("click", launchForm);
    document.querySelector("#firstYear-container").addEventListener("click", createStudent);
}

// displays the Sort button on the DOM
const startButton = () => {
    const domString = `
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">Get to Sorting!</button>
  </div>
    `
renderToDom("#start-btn-container", domString);
}

// Contains the form that is launched whtn the "Get Started!" button is clicked
const launchForm = () => {
    const theForm = `
        <div class="input-group mb-3">
        <button class="btn btn-primary" id="sortButton">Sort!</button>
        <input type="text" class="form-control" id="sortButton" placeholder="Student Name" required>
    </div>
    `
renderToDom("#form-container", theForm);
}

// Will populate a student into the firstYears array
const createStudent = (event) => {
    const newStudent = document.querySelector("#sort-button");

    if (event.target.id === "#sort-button") {

    if (newStudent.value) {
        firstYears.push({
            name: newStudent.value,
            house: "test"
        });
        newStudent.value = "";
    }
}
}

// Launches the page
const init = () => {
    startButton();
    pageEvents();
    createStudent();
}

init()

// You need to put a card in the first year container and push values to that card... dingus.