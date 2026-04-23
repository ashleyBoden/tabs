function displayTab(clickedButton) {

    document.querySelectorAll("div[class^='tab-']").forEach((tab) => {
        tab.style.display = "none";
    })

    var currentTab = clickedButton.id;
    var changeTab = document.querySelector("." + currentTab);
    changeTab.style.display = "block";
};

function highlightTab(clickedButton) {
    document.querySelectorAll("button[id^='tab-']").forEach((btn) => {
        btn.style.border = "0";
        btn.style.color = "rgba(128, 128, 128, 0.822)";
    })

    var currentTab = clickedButton.id;
    var selectedTab = document.querySelector("#" + currentTab);
    selectedTab.style.borderBottom = "2px solid blue";
    selectedTab.style.color = "black";
}