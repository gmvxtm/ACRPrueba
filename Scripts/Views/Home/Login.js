$(document).ready(function () {

    $("#CaptchaInputText").addClass("form-control").attr("style", "text-transform: uppercase;").attr("required", "").attr("aria-required", "true").removeAttr("required");
    $('a[href="#CaptchaImage"]').html("<i class='fa fa-refresh'></i>").css("text-align", "right");

    SetearValidacionForm($("#formLogin"));

});

function SetearValidacionForm(form) {
    form.validate({
        highlight: function (label) {
            $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (label) {
            $(label).closest('.form-group').removeClass('has-error');
            label.remove();
        },
        errorPlacement: function (error, element) {
            var placement = element.closest('.input-group');
            if (!placement.get(0)) {
                placement = element;
            }
            if (error.text() !== '') {
                placement.after(error);
            }
        }
    });
}