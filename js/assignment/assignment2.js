
const ma2ResultList = ["li~li", "li+li"];
const ma2WrongList = [".item", "ul>li", "ulli"];

const ma2Result = document.getElementById("ma2__answer");
var isTrue = false;
var ma2ListItem = document.getElementsByClassName("item");
var arrMa2ListItemHTML = [].slice.call(ma2ListItem);

function ma2Submit() {
    if (ma2ResultList.includes(ma2Result.value.replace(/\s/g, ""))) {
        isTrue = true;
        arrMa2ListItemHTML.forEach((t) => {
            t.classList.add("correct-answer");
            t.classList.remove("input-item");
        });
    } else {
        isTrue = false;
        arrMa2ListItemHTML.forEach((t) => {
            t.classList.remove("correct-answer");
        });
        if (ma2WrongList.includes(ma2Result.value.replace(/\s/g, ""))) {
            arrMa2ListItemHTML.forEach((t) => {
                t.className = `item input-item`;
            });
        } else {
            arrMa2ListItemHTML.forEach((t) => {
                t.classList.remove("input-item");
            });
        }
    }

    if (isTrue && ma2Result.value.replace(/\s/g, "") == "li+li") {
        ma2Result.value = "li + li";
    }

    if (isTrue && ma2Result.value.replace(/\s/g, "") == "li~li") {
        ma2Result.value = "li ~ li";
    }

    if (!isTrue && ma2Result.value.replace(/\s/g, "") == "lili") {
        ma2Result.value = "li li";
    }

    if (!isTrue && ma2Result.value.replace(/\s/g, "") == "li>li") {
        ma2Result.value = "li > li";
    }

    if (!isTrue && ma2Result.value.replace(/\s/g, "") == "ulli") {
        ma2Result.value = "ul li";
    }

    if (!isTrue && ma2Result.value.replace(/\s/g, "") == "ul>li") {
        ma2Result.value = "ul > li";
    }

    if (!isTrue && ma2Result.value.replace(/\s/g, "") == "ul+li") {
        ma2Result.value = "ul + li";
    }

    if (!isTrue && ma2Result.value.replace(/\s/g, "") == "ul~li") {
        ma2Result.value = "ul ~ li";
    }
}

ma2Result.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("submit__button2").click();
    }
});

