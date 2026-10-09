document.addEventListener("DOMContentLoaded", () => {
    onChangeCountry($(".countriesList")[0]);
});

const optInUnchecked = "0";
const optInChecked = "1";
const optInNotAvailable = "3";
const optInCanada = "4";
const optInChina = "5";
const optInKorea = "6";
const livestream = "Livestream";
const inPerson = "In person";

const showKorea = shouldShowKorea => {
    if (shouldShowKorea) {
        $("#optInKoreaSection").show();
        $("#optInKoreaCheckbox").show();
        $("#optInKoreaCheckbox")[0].checked = false;
        $("#optInKoreaAgree").show();
        $("#optInKoreaExtra").show();
        return;
    }

    $("#optInKoreaSection").hide();
    $("#optInKoreaCheckbox").hide();
    $("#optInKoreaCheckbox")[0].checked = true;
    $("#optInKoreaAgree").hide();
    $("#optInKoreaExtra").hide();
};

const onChangeCountry = function (country) {
    if (country) {
        const optInBehavior = country.value.split("|")[1];

        if (optInBehavior === optInUnchecked) {
            showKorea(false);

            $("#optInSection").show();

            $("#optInAvailableSection").show();
            $("#optInAvailableCheckbox")[0].checked = false;
            $("#optInAvailableCheckbox").attr("aria-describedby", "optInIWouldLikeToMessage optInReceiveMessage");
            $("#optInIWillMessage").hide();
            $("#optInIWouldLikeToMessage").show();
            $("#optInReceiveMessage").show();
            $("#optInCanadaSection").hide();
            $("#optInChinaSection").hide();
            $("#optInChineseSimplifiedSection").hide();
            return;
        }

        if (optInBehavior === optInChecked) {
            showKorea(false);

            $("#optInSection").show();

            $("#optInAvailableSection").show();
            $("#optInAvailableCheckbox")[0].checked = true;
            $("#optInAvailableCheckbox").attr("aria-describedby", "optInIWouldLikeToMessage optInReceiveMessage");
            $("#optInIWillMessage").hide();
            $("#optInIWouldLikeToMessage").show();
            $("#optInReceiveMessage").show();
            $("#optInCanadaSection").hide();
            $("#optInChineseSimplifiedSection").hide();
            $("#optInChinaSection").hide();
            return;
        }

        if (optInBehavior === optInNotAvailable) {
            showKorea(false);

            $("#optInSection").hide();

            return;
        }

        if (optInBehavior === optInCanada) {
            showKorea(false);

            $("#optInSection").show();

            $("#optInAvailableSection").show();
            $("#optInAvailableCheckbox")[0].checked = false;
            $("#optInAvailableCheckbox").attr("aria-describedby", "optInCanadaSection");
            $("#optInIWillMessage").hide();
            $("#optInIWouldLikeToMessage").show();
            $("#optInIWouldLikeToMessage").hide();
            $("#optInReceiveMessage").hide();
            $("#optInCanadaSection").show();
            $("#optInChinaSection").hide();
            $("#optInChineseSimplifiedSection").hide();
            return;
        }

        if (optInBehavior === optInChina) {
            showKorea(false);

            $("#optInSection").show();

            $("#optInAvailableSection").show();
            $("#optInAvailableCheckbox")[0].checked = false;
            $("#optInIWillMessage").hide();
            $("#optInIWouldLikeToMessage").hide();
            $("#optInReceiveMessage").hide();
            if ($("#cultureValue").val() == "zh-cn") {
                $("#optInChinaSection").hide();
                $("#optInChineseSimplifiedSection").show();
                $("#optInAvailableCheckbox").attr("aria-describedby", "optInChineseSimplifiedSection");
            }
            else {
                $("#optInChinaSection").show();
                $("#optInChineseSimplifiedSection").hide();
                $("#optInAvailableCheckbox").attr("aria-describedby", "optInChinaSection");
            }
            $("#optInCanadaSection").hide();
            return;
        }

        if (optInBehavior === optInKorea) {
            showKorea(true);

            $("#optInSection").show();

            $("#optInAvailableSection").show();
            $("#optInAvailableCheckbox")[0].checked = false;
            $("#optInAvailableCheckbox").attr("aria-describedby", "optInKoreaAgree optInKoreaExtra");
            $("#optInIWillMessage").hide();
            $("#optInIWouldLikeToMessage").hide();

            $("#optInReceiveMessage").hide();
            $("#optInCanadaSection").hide();
            $("#optInChinaSection").hide();
            $("#optInChineseSimplifiedSection").hide();
            return;
        }

        showKorea(false);

        $("#optInSection").show();

        $("#optInAvailableSection").hide();
        $("#optInAvailableCheckbox")[0].checked = true;
        $("#optInIWillMessage").show();
        $("#optInIWouldLikeToMessage").hide();
        $("#optInReceiveMessage").show();
        $("#optInChinaSection").hide();
        $("#optInChineseSimplifiedSection").hide();
        $("#optInCanadaSection").hide();
    }
}

const processFormSubmission = form => {
    const regForm = $("#registrationForm");

    if (regForm.validate().form()) {
        $("#btnSubmit").addClass("is-loading");
        $("#btnSubmit").html("");
        form.submit();
    }
}

const toggleCalendarOptions = function () {
    let button = $("#" + event.srcElement.id);
    const buttonState = button[0].getAttribute("aria-expanded");
    $('button[aria-expanded]').each(function () {
        $("button").attr("aria-expanded", "false");
    });
    if (buttonState === "true") {
        $("button").attr("aria-expanded", "false");
    } else {
        button.attr("aria-expanded", !JSON.parse(button.attr("aria-expanded")));
    }
}

const setFirstReactorEvent = function (value) {
    if (value) {
        document.getElementsByName("Registrant.IsFirstReactorEvent")[0].checked = true;
    }
}

const onCancelRegistration = function (btnCancel) {
    if ($('form').valid()) {
        btnCancel.classList.add('is-loading');
    }
    return true;
}

const onFormatChange = element => {
    handleLanguageAndLocationSections(element.value);

    const isCheckinTime = $('#btnSubmit').attr("data-ischeckintime");

    if (isCheckinTime === "True") {
        return;
    }

    if ($('#waitlist-banner').length) {
        const registerLabel = $('#btnSubmit').attr("data-register-label");
        const waitlistLabel = $('#btnSubmit').attr("data-waitlist-label");
        const hasInPersonWaitlist = $('#hybrid-in-person-waitlist-message').length;
        const hasLivestreamWaitlist = $('#hybrid-livestream-waitlist-message').length;
        const userSelectedLivestream = element.value === livestream;
        const userSelectedInPerson = element.value === inPerson;
        const btnSubmitButton = $('#btnSubmit');

        if ((element.value === "") ||
            (hasInPersonWaitlist && userSelectedLivestream) ||
            (hasLivestreamWaitlist && userSelectedInPerson)) {
            btnSubmitButton.html(registerLabel);
        }
        else if ((hasInPersonWaitlist && userSelectedInPerson) ||
            (hasLivestreamWaitlist && userSelectedLivestream) ||
            ($('#non-hybrid-waitlist-message').length)) {
            btnSubmitButton.html(waitlistLabel);
        }
    }
}

function handleLanguageAndLocationSections(value) {
    if (value == livestream && $("#Language").find("option").length > 1) {
        $("#LocationsSection").addClass("is-hidden");
        $("#LanguagesSection").removeClass("is-hidden");
    } else if (value == inPerson && $("#Location").find("option").length > 1) {
        $("#LocationsSection").removeClass("is-hidden");
        $("#LanguagesSection").addClass("is-hidden");
    } else {
        $("#LocationsSection").addClass("is-hidden");
        $("#LanguagesSection").addClass("is-hidden");
    }
}
