const tabsHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var tabsHTMLList = document.getElementsByClassName("tabs__html");
var arrTabsHTML = [].slice.call(tabsHTMLList);
arrTabsHTML.forEach((t) => {
    t.innerHTML = tabsHTML;
});