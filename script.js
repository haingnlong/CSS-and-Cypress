const listSidebar = [
    "cvi",
    "fc",
    "lc",
    "nc",
    "nlc",
    "not",
    "nlot",
    "ds",
    "cs",
    "ass",
    "gss",
    "ma1",
    "ma2",
];
const ma1ResultList = ["nth-child(3n)", "nth-of-type(3n)"];
const ma2ResultList = ["li~li", "li+li"];
const ma2WrongList = [".item", "ul>li", "ulli"];

function showPage(id) {
    listSidebar.forEach((e) => {
        if (id == e) {
            document.getElementsByClassName(e)[0].style.display = "block";
            document.getElementsByClassName(
                "page__background"
            )[0].style.display = "none";
        } else {
            document.getElementsByClassName(e)[0].style.display = "none";
        }
    });
}

// var string = "";
// var classDrink = "";
// var htmlColClassDrink = document.getElementsByClassName("drink");
// var arrClassDrink = [].slice.call(htmlColClassDrink);
// arrClassDrink.forEach((c) => {
//     string += c.innerText + ", ";
//     classDrink = string.substring(0, string.length - 2);
// });
// document.getElementById("class__drink").innerHTML = classDrink;

// var idDrink = document.getElementById("drink").innerText;
// document.getElementById("id__drink").innerHTML = idDrink;

const tabsHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var tabsHTMLList = document.getElementsByClassName("tabs__html");
var arrTabsHTML = [].slice.call(tabsHTMLList);
arrTabsHTML.forEach((t) => {
    t.innerHTML = tabsHTML;
});

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
    console.log("ma1Result", ma1Result);
    if (ma1ResultList.includes(ma1Result.value)) {
        ma1Correct.style.display = "block";
        ma1Wrong.style.display = "none";
    } else {
        ma1Correct.style.display = "none";
        ma1Wrong.style.display = "block";
    }
}

const ma2Result = document.getElementById("ma2__answer");
var isTrue = false;
var ma2ListItem = document.getElementsByClassName("item");
var arrMa2ListItemHTML = [].slice.call(ma2ListItem);

function ma2Submit() {
    console.log("input", ma2Result.value.replace(/\s/g, ""));
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
