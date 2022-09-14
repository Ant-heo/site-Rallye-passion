selectedEventDate = document.querySelector(".selectedEventDate");
slider = document.querySelector(".slider");
console.log(selectedEventDate);
dateSelectors = document.querySelectorAll(".dateSelector");

dateSelectors.forEach(dateSelector => dateSelector.onclick = function() {
    console.log(selectedEventDate);
    console.log(dateSelector);
    if (selectedEventDate === dateSelector) {
        return
    }
    selectedEventDate.classList.remove("selectedEventDate");
    dateSelector.classList.add("selectedEventDate");
    selectedEventDate = dateSelector;
    console.log(selectedEventDate);

    slider.classList.toggle("sliderRight")

    
    }
);