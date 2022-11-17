const nthChildStyleList = ["style-1", "style-2", "style-3"];


document.getElementById("style-1").classList.add("active-style");

function ncButtonStyle(id) {
    nthChildStyleList.forEach((s) => {
        if (s == id) {
            document.getElementById(s).classList.add("active-style")
            document.getElementById(`${s}-result`).style.display = "block";
        } else {
            document.getElementById(s).classList.remove("active-style")
            document.getElementById(`${s}-result`).style.display = "none";
        }
    })
}