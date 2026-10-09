function showMenu() {
    if (document.getElementById('modalmenu').classList.contains("is-hidden")) {
        document.getElementById('modalmenu').classList = "is-docked-right is-flex is-flex-column";

        document.body.classList = "overflow-hidden-fixed"
    }
    else {
        document.getElementById('modalmenu').classList = "is-docked-right is-flex is-flex-column is-hidden";
        document.body.classList = "display-flex-column"
    }
}