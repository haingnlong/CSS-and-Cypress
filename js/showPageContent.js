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
    "ma3"
];

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