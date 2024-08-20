let kitchenBtn = document.getElementById('kitchenCs');
let basementBtn = document.getElementById('basementCs');
let bathroomBtn = document.getElementById('bathroomCs');
let roofBtn = document.getElementById('roofCs');
let stairBtn = document.getElementById('stairCs');
let kitchenCarousel = document.getElementById('kitchenCarousel');
let basementCarousel = document.getElementById('basementCarousel');
let bathroomCarousel = document.getElementById('bathroomCarousel');
let roofCarousel = document.getElementById('roofCarousel');
let stairCarousel = document.getElementById('stairCarousel');


function kitchenFilter(){
    kitchenBtn.style.backgroundColor = "#d5af30";
    kitchenBtn.style.borderColor = "transparent";
    kitchenCarousel.style.display = "block";

    bathroomCarousel.style.display = "none";
    bathroomBtn.style.backgroundColor = "white";
    bathroomBtn.style.borderColor = "black";

    basementCarousel.style.display = "none";
    basementBtn.style.backgroundColor = "white";
    basementBtn.style.borderColor = "black";

    roofCarousel.style.display = "none";
    roofBtn.style.backgroundColor = "white";
    roofBtn.style.borderColor = "black";

    stairCarousel.style.display = "none";
    stairBtn.style.backgroundColor = "white";
    stairBtn.style.borderColor = "black";
}

function bathroomFilter(){
    kitchenBtn.style.backgroundColor = "white";
    kitchenBtn.style.borderColor = "black";
    kitchenCarousel.style.display = "none";

    bathroomCarousel.style.display = "block";
    bathroomBtn.style.backgroundColor = "#d5af30";
    bathroomBtn.style.borderColor = "transparent";

    basementCarousel.style.display = "none";
    basementBtn.style.backgroundColor = "white";
    basementBtn.style.borderColor = "black";

    roofCarousel.style.display = "none";
    roofBtn.style.backgroundColor = "white";
    roofBtn.style.borderColor = "black";

    stairCarousel.style.display = "none";
    stairBtn.style.backgroundColor = "white";
    stairBtn.style.borderColor = "black";
}

function basementFilter(){
    kitchenBtn.style.backgroundColor = "white";
    kitchenBtn.style.borderColor = "black";
    kitchenCarousel.style.display = "none";

    bathroomCarousel.style.display = "none";
    bathroomBtn.style.backgroundColor = "white";
    bathroomBtn.style.borderColor = "black";

    basementCarousel.style.display = "block";
    basementBtn.style.backgroundColor = "#d5af30";
    basementBtn.style.borderColor = "transparent";

    roofCarousel.style.display = "none";
    roofBtn.style.backgroundColor = "white";
    roofBtn.style.borderColor = "black";

    stairCarousel.style.display = "none";
    stairBtn.style.backgroundColor = "white";
    stairBtn.style.borderColor = "black";
}

function roofFilter(){
    kitchenBtn.style.backgroundColor = "white";
    kitchenBtn.style.borderColor = "black";
    kitchenCarousel.style.display = "none";

    bathroomCarousel.style.display = "none";
    bathroomBtn.style.backgroundColor = "white";
    bathroomBtn.style.borderColor = "black";

    basementCarousel.style.display = "none";
    basementBtn.style.backgroundColor = "white";
    basementBtn.style.borderColor = "black";

    roofCarousel.style.display = "block";
    roofBtn.style.backgroundColor = "#d5af30";
    roofBtn.style.borderColor = "transparent";

    stairCarousel.style.display = "none";
    stairBtn.style.backgroundColor = "white";
    stairBtn.style.borderColor = "black";
}

function stairFilter(){
    kitchenBtn.style.backgroundColor = "white";
    kitchenBtn.style.borderColor = "black";
    kitchenCarousel.style.display = "none";

    bathroomCarousel.style.display = "none";
    bathroomBtn.style.backgroundColor = "white";
    bathroomBtn.style.borderColor = "black";

    basementCarousel.style.display = "none";
    basementBtn.style.backgroundColor = "white";
    basementBtn.style.borderColor = "black";

    roofCarousel.style.display = "none";
    roofBtn.style.backgroundColor = "white";
    roofBtn.style.borderColor = "black";

    stairCarousel.style.display = "block";
    stairBtn.style.backgroundColor = "#d5af30";
    stairBtn.style.borderColor = "transparent";
}