(function ($) {
    if ($.validator && $.validator.unobtrusive) {
        $.validator.unobtrusive.adapters.addBool("checkboxrequired", "required");
    }
}(jQuery));

document.addEventListener("DOMContentLoaded", function () {
    if ($.validator && $.validator.unobtrusive) {
        $.validator.unobtrusive.adapters.addBool("checkboxrequired", "required");
        const fullForm = $("#registrationForm").removeData("validator").removeData("unobtrusiveValidation");
        $.validator.unobtrusive.parse(fullForm);
    }
});
