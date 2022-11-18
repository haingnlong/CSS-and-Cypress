const ma3CorrectAnswer = "3,5"
var ma3Correct = document.getElementById("ma3__correct");
var ma3Wrong = document.getElementById("ma3__wrong");
var checkboxes = document.getElementById("checkboxesGroup");


function ma3Submit() {
    let checkedList = [];
    let checkList = checkboxes.getElementsByTagName("input");
    for (let i = 0; checkList[i]; i++) {
        if (checkList[i].checked) {
            checkedList.push(checkList[i].value);
        }
    }

    if ((checkedList.toString() == ma3CorrectAnswer)) {
        ma3Correct.style.display = "block";
        ma3Wrong.style.display = "none";
    } else {
        ma3Correct.style.display = "none";
        ma3Wrong.style.display = "block";
    }
}

checkboxes.addEventListener("change", (event) => {
    ma3Correct.style.display = "none";
    ma3Wrong.style.display = "none";
})