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

const assignHouse = (house) => {
    if  (house === 'Gryffindor') {
        return "https://i.pinimg.com/originals/a1/bf/0a/a1bf0a96a8d25df94e22a1219582f7f7.jpg";
    } else if (house === 'HufflePuff') {
        return "https://i.pinimg.com/originals/14/49/2a/14492ad1ab4718672aa32926d3abef52.jpg";
    } else if (house === 'Ravenclaw') {
        return "https://i.pinimg.com/originals/d9/7e/c1/d97ec181eb6a1503be859ca3743e2e1b.jpg";
    } else {
        return "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88362/91127/Harry-Potter-Slytherin-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__31920.1507640618.jpg?c=2";
    }
}

// Handles what happens when I click the Sort! button. Pushes the form value and a random house to a card.
const handleFormSubmit = (event) => {
    event.preventDefault();

const houseImg = assignHouse();

    const newStudent = {
        name: document.querySelector("#nameInput").value,
        house: randomHouse(),
        image: houseImg,
      };
    students.push(newStudent);  
    studentBuilder(students);
    document.querySelector("form").reset();
  };

// Creates a card in the students array
const studentBuilder = (studentArray) => {  
    let domString = "";
    studentArray.forEach((student, i) => {
      domString += `
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${student.image}" alt="${student.house}">
              <div class="card-body">
                  <h5 class="card-title">${student.name}</h5>
                  <p class="card-text">${student.house}</p>
                  <button type="button" id="${i}" class="btn btn-primary">Expel</button>
              </div>
          </div>
        `;
    });
    renderToDom("#student-container", domString);
  };
  
// Creates a card in the voldArmy array
const voldArmyBuilder = (voldArray) => {  
    let domString = "";
    voldArray.forEach((deathEater) => {
      domString += `
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://images.shoutwiki.com/lego/thumb/8/8c/Deatheater.jpeg/250px-Deatheater.jpeg" alt="lego death eater">
              <div class="card-body">
                  <h5 class="card-title">Oh no! ${deathEater.name} has been recruited into Voldemort's Army!</h5>
              </div>
          </div>
        `;
        renderToDom("#voldArmy-container", domString);
    });
  };

const getDrafted = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
      
      if (targetType === "button") {
        voldArmy.push(students.splice(targetId, 1)[0]);      
        voldArmyBuilder(voldArmy);
        studentBuilder(students); 
    }
  };

// Will handle the click events that occur on the page
const pageEvents = () => {
    document.querySelector("#startBtn").addEventListener("click", launchForm);
    document.querySelector('#student-container').addEventListener('click', getDrafted);
}

// Launches the page
const init = () => {
    startButton();
    pageEvents();
    studentBuilder(students);
    voldArmyBuilder(voldArmy);
}

init()