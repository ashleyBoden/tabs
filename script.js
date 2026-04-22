function displayTab(clickedButton) {

    document.querySelectorAll("div[class^='tab-']").forEach((tab) => {
        tab.style.display = "none";
    })

    var currentTab = clickedButton.id;
    var changeTab = document.querySelector("." + currentTab);
    changeTab.style.display = "block";
};