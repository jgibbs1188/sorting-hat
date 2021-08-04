const students = [];
const voldArmy = [];

// Will allow functions to print to the DOM
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

// displays the Sort button on the DOM
const startButton = () => {
    const domString = `
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" id="startBtn">Get to Sorting!</button>
    </div>
    `
renderToDom("#start-btn-container", domString);
}

// Contains the form that is launched whtn the "Get to Sorting!" button is clicked
const launchForm = (event) => {
    
    // if (event.target.id === "startBtn") {
    const domString = `
        <form id="name">
            <div class="input-group mb-3">
                <div>
                    <input type="text" id="nameInput" class="form-control" required>
                </div>
                <div>
                    <input type="submit" value="Sort!" class="btn btn-primary" id="nameBtn">
                </div>
            </div>
        </form>
    `
    renderToDom("#form-container", domString);
    document.querySelector("#form-container").addEventListener("submit", handleFormSubmit);
}

// Uses Math.Random/Math.Floor to randomly assign a number to the card in the students array
const randomHouse = () => {
    const houseIndex = Math.floor(Math.random() * 4) + 1;
        if (houseIndex === 1) {
            return 'Gryffindor';
        } else if (houseIndex === 2) {
            return 'HufflePuff';
        } else if (houseIndex === 3) {
            return 'Ravenclaw'; 
        } else {
            return 'Slytherin';
        }
}

// Creates a card that I can push data to... maybe
const studentBuilder = (studentArray) => {  
    let domString = "";
    studentArray.forEach((student, i) => {
      domString += `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${student.name}</h5>
                  <p class="card-text">${student.house}</p>
                  <button type="button" id="${i}" class="btn btn-primary">Expel</button>
              </div>
          </div>
        `;
        renderToDom("#student-container", domString);
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
      const newStudent = {
        name: document.querySelector("#nameInput").value,
        house: randomHouse(),
      };
    students.push(newStudent);  
    studentBuilder(students);
    console.log(students);
  };

// Will handle the click events that occur on the page
const pageEvents = () => {
    document.querySelector("#startBtn").addEventListener("click", launchForm);
}



// Launches the page
const init = () => {
    startButton();
    pageEvents();
    studentBuilder(students);
    // handleFormSubmit();
}

init()