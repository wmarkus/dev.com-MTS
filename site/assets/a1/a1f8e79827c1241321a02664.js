$(document).ready(function () {
    $(".bio-click").on('click', function () {
        const idHidden = $(this).data('id')
        const hiddenBio = $("#" + idHidden).val()
        const state = $(this).find("span").hasClass("docon-math-plus")
        if (state) {
            $(".span-icon").removeClass().addClass("span-icon docon docon-math-plus has-margin-right-small")

            let bioBtns = $(".bio-click");

            if (bioBtns && bioBtns.length > 0) {
                for (var i = 0; i < bioBtns.length; i++) {
                    if (bioBtns[i]) {
                        if (bioBtns[i].ariaLabel) {
                            bioBtns[i].ariaLabel = bioBtns[i].ariaLabel.replace(' expanded', '');
                            bioBtns[i].ariaLabel = bioBtns[i].ariaLabel.replace(' collapsed', '');
                            bioBtns[i].ariaLabel = bioBtns[i].ariaLabel + ' collapsed';
                        }
                    }
                }
            }

            $(this).find("span").removeClass().addClass("span-icon docon docon-math-minus has-margin-right-small")

            let arialabel = $(this)[0].ariaLabel
            if (arialabel) {
                arialabel = arialabel.replace(' expanded', '');
                arialabel = arialabel.replace(' collapsed', '');

                $(this)[0].ariaLabel = arialabel + " expanded"
            }
            $("#speaker-bio").html(hiddenBio)

            $('.card-footer.speaker-card-footer').removeClass().addClass('card-footer speaker-card-footer')

            $(this).parent().parent().find('.card-footer').removeClass().addClass('card-footer speaker-card-footer current')
        }
        else {
            $(".span-icon").removeClass().addClass("span-icon docon docon-math-plus has-margin-right-small")
            $(this).find("span").removeClass().addClass("span-icon docon docon-math-plus has-margin-right-small")

            let arialabel = $(this)[0].ariaLabel
            if (arialabel) {
                arialabel = arialabel.replace(' expanded', '');
                arialabel =  arialabel.replace(' collapsed', '');

                $(this)[0].ariaLabel = arialabel + " collapsed"
            }
            $("#speaker-bio").html("")

            $(this).parent().parent().find('.card-footer').removeClass().addClass('card-footer speaker-card-footer')
        }
    })
});