
$(document).ready(function () {

    //document.getElementById("selectMarcaVehiculo").selectedIndex = 0;

    $(document).on("click", ".modal-cancelar", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $("#selectMarcaVehiculo").on("change", function () {
        if ($(this).val() !== null) {
            $("#selectModelo").empty();
            $("#selectModelo").append($("<option></option>").attr("value", "").text("Seleccione"));
            var MarcaVehiculo = $(this).find(':selected').val();
            $.ajax(
            {
                url: $("#UrlListarModeloJSON").val(),
                data: "MarcaVehiculo=" + MarcaVehiculo,
                dataType: "json",
                type: "post",
                success: function (resultado) {                    
                    if (resultado != null) {
                        
                        $.each(resultado, function (index, val) {                           
                            $("#selectModelo")
                                .append($("<option></option>")
                                    .attr("value", val.Text)
                                    .text(val.Text));
                        });
                    }
                }
            });
        } else {
            $("#selectModelo").empty();
            $("#selectModelo").append($("<option></option>").attr("value", "").text("Seleccione"));
            ("#selectModelo").se
        }
    });

    $("#btnBuscar").click(function (e) {
        var animateIn = $("#animate_in").val();
        var animateOut = $("#animate_out").val();

        if (!new RegExp("^[a-zA-Z0-9](\.?[a-zA-Z0-9_-]){0,}@[a-zA-Z0-9-]+\.([a-zA-Z]{1,6}\.)?[a-zA-Z]{2,6}$").test($("[name=CorreoElectronico]").val())) {
            new PNotify({
                title: 'Error',
                text: 'Debe ingresarse un mail válido',
                animate: {
                    animate: true,
                    in_class: animateIn,
                    out_class: animateOut
                }
            });
            e.preventDefault();
            return;
        }
        if ($("[name=NumeroCelular]").val().length !== 9) {
            new PNotify({
                title: 'Error',
                text: 'Debe ingresarse un celular váido',
                animate: {
                    animate: true,
                    in_class: animateIn,
                    out_class: animateOut
                }
            });
            e.preventDefault();
            return;
        }
    });
});
