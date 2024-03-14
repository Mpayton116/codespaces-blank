let Q1 = document.querySelector(".Q1");
let Q2 = document.querySelector(".Q2");
let input1 = document.querySelector(".Shower");
let input2 = document.querySelector(".Season");
let atomicWing = document.querySelector(".atomicWing");
let hickorySmokedBBQ = document.querySelector(".hickorySmokedBBQ");
let hotHoneyRub = document.querySelector(".hotHoneyRub");
let garlicParmesan = document.querySelector(".garlicParmesan");
let button = document.querySelector("button");
let h1 = document.querySelector("h1");
button.addEventListener("click", function (){
    console.log("button check");
        let answer1 = input1.value;
    console.log(answer1);
    let answer2 = input2.value;
    console.log(answer2);


if (answer1 === "Hot" && answer2 === "Summer") {
    console.log("Atomic Wing");
    atomicWing.innerHTML = " YOU ARE AN ATOMIC WING!!! WOW YOU MUST LIKE IT HOT"
    Q1.style.display = "none";
    Q2.style.display = "none";
    input1.style.display = "none";
    input2.style.display = "none";
    button.style.display = "none";
    h1.style.display = "none";

}

if (answer1 === "Cold" && answer2 === "Winter") { 
    console.log("Garlic Parmesan");
    garlicParmesan.innerHTML = "YOU ARE AN GARLIC PARMESAN WING!!! You must not like all the spice huh?"



}
if(answer1 === "Hot" && answer2 === "Winter") {
    console.log ("Hot Honey Rub");
    hotHoneyRub.innerHTML = " YOU ARE AN HOT HONEY RUB WING!!! You like it moderately spicy, Respect."
}

if(answer1 === "Cold" && answer2 === "Summer") {
    console.log ("Hickory Smoked QQB ");
    hotHoneyRub.innerHTML = " YOU ARE AN SMOKED BBQ WING!!! You love having a cool experience with a tasty treat."
}




});

