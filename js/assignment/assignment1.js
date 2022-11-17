const ma1ResultList = ["nth-child(3n)", "nth-of-type(3n)"];

var ma1Correct = document.getElementById("ma1__correct");
var ma1Wrong = document.getElementById("ma1__wrong");
const ma1Result = document.getElementById("ma1__answer");

ma1Result.addEventListener("input", (event) => {
    ma1Correct.style.display = "none";
    ma1Wrong.style.display = "none";
});

ma1Result.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("submit__button").click();
    }
});

function ma1Submit() {
    if (ma1ResultList.includes(ma1Result.value)) {
        ma1Correct.style.display = "block";
        ma1Wrong.style.display = "none";
    } else {
        ma1Correct.style.display = "none";
        ma1Wrong.style.display = "block";
    }
}