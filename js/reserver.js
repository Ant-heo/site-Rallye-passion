events = document.querySelectorAll(".event");
let selectedEvent = null;
objectsSelector = document.querySelector("#objectSelector");
amount = document.querySelector("#amount");

events.forEach(event => event.onclick = function() {

        if (selectedEvent === event) {
            selectedEvent.classList.remove("selectedEvent");
            selectedEvent = null;
            objectsSelector.style.display = "none";
            return
        }

        if (selectedEvent != null) {
          selectedEvent.classList.remove("selectedEvent");

        }

        event.classList.add("selectedEvent");
        selectedEvent = event;
        console.log(selectedEvent);
        objectsSelector.style.display = "flex";
    }

);

objects = document.querySelectorAll(".object");
let selectedObject = null;

objects.forEach(object => object.onclick = function() {
        if (selectedObject === object) {
            selectedObject.classList.remove("selectedObject");
            selectedObject = null;
            amount.style.display = "none";
            return
        }
        if (selectedObject != null) {
            selectedObject.classList.remove("selectedObject");

        }
        

        object.classList.add("selectedObject");
        selectedObject = object
        amount.style.display = "block";
        console.log(selectedObject)
    }

);


const range = document.querySelector("#amountSelector");
const label = document.querySelector(".amountLabel");
let max = range.max;
let min = range.min;
let unit = "part(s)"
console.log(max)
console.log(min)


let value = 2;
range.value = value;

function updateRange() {
  let percentage = (100 * value) / max;
  range.style.background = ` linear-gradient(90deg, rgba(117, 20, 241, 1) 0%, rgb(20, 243, 255) ${percentage}%, #333 ${percentage}%)`;
  label.innerText = `${value} ${unit}`;
  console.log(percentage)

  range.addEventListener("input", (e) => {
    value = +e.target.value;
    percentage = (100 * value) / max;
    range.style.background = ` linear-gradient(90deg, rgba(117, 20, 241, 1) 0%, rgb(20, 243, 255) ${percentage}%, #333 ${percentage}%)`;
    label.innerText = `${value} ${unit}`;

    // boxPrices.forEach((boxClass) => {
    //   boxClass.classList.remove("active");
    // });
  });
}


updateRange();
