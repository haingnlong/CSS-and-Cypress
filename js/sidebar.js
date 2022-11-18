const allSidebarItem = [
    "css-selector",
    "css-combinator",
    "css-assignment",
];

function showList(buttonId) {
    let listId = `${buttonId}-list`;
    let listStyle = document.getElementById(listId);

    let arrowId = `${buttonId}-arrow`;
    let arrowStyle = document.getElementById(arrowId);

    if (listStyle.style.display == "block") {
        listStyle.style.display = "none";
        arrowStyle.classList.remove("arrow__rotate__180");
        arrowStyle.classList.add("arrow__rotate__0");
    } else {
        listStyle.style.display = "block";
        arrowStyle.classList.remove("arrow__rotate__0");
        arrowStyle.classList.add("arrow__rotate__180");
    }

    allSidebarItem.forEach((l) => {
        if (`${l}-list` != listId) {
            document.getElementById(`${l}-list`).style.display = "none"
            document.getElementById(`${l}-arrow`).classList.remove("arrow__rotate__180");
            document.getElementById(`${l}-arrow`).classList.add("arrow__rotate__0");
        }
    })
}

//delete result
var liButtonList = [].slice.call(document.getElementById("sidebar").getElementsByTagName("li"));

liButtonList.forEach((li) => {
    li.addEventListener("click", (event) => {
        ma1Result.value = "";
        ma1Correct.style.display = "none";
        ma1Wrong.style.display = "none";

        ma2Result.value = "";
        arrMa2ListItemHTML.forEach((t) => {
            t.classList.remove("correct-answer");
            t.classList.remove("input-item");
        });

        for (let i = 0; checkboxes.getElementsByTagName("input")[i]; i++) {
            if (checkboxes.getElementsByTagName("input")[i].checked) {
                checkboxes.getElementsByTagName("input")[i].checked = false;
                ma3Correct.style.display = "none";
                ma3Wrong.style.display = "none";
            }
        }
    })
})