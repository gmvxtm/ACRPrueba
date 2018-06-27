
$(document).ready(function () {
    $(".btnDeshabilitarTasa").on("click", function () {
        var id = $(this).attr("data-id");
        $.magnificPopup.open({
            items: {
                src: "#confirmDeshabilitarTasa-" + id
            },
            type: "inline",
            preloader: false,
            modal: true
        });
    });

    $(document).on("click", ".modal-cancelar", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    if($("#mensaje").val()!=='')
    {
        $("#Alerta").modal('show')
    }
});


