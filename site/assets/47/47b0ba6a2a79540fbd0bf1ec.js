const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('#modalmenu');
let firstFocusableElement;
let lastFocusableElement;

if (modal) {
    firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    lastFocusableElement = focusableContent[focusableContent.length - 1]
}
document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab';
    if (!isTabPressed) {
        return;
    }
    if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            const expandedValue = document.getElementById("profilebutton").getAttribute("aria-expanded");
            if (expandedValue == "true") {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        }
    } else {
        if (lastFocusableElement && document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
        }
    }
});
if (firstFocusableElement) {
    firstFocusableElement.focus();
}
