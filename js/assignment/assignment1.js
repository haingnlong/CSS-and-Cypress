const resultList = ["nth-child(3n)", "nth-of-type(3n)"];

let ma1Correct = document.getElementById("ma1__correct");
let ma1Wrong = document.getElementById("ma1__wrong");
const ma1Result = document.getElementById("ma1__answer");

ma1Result.addEventListener("input", (event) => {
    ma1Correct.style.display = "none";
    ma1Wrong.style.display = "none";
});

ma1Result.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("submit__button1").click();
    }
});

function ma1Submit() {
    if (resultList.includes(ma1Result.value)) {
        ma1Correct.style.display = "block";
        ma1Wrong.style.display = "none";
    } else {
        ma1Correct.style.display = "none";
        ma1Wrong.style.display = "block";
    }
}