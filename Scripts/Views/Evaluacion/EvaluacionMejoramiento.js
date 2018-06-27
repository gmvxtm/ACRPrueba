$(document).ready(function () {

    //document.getElementById("selectSituacionlaboral").selectedIndex = -1;
    var modelo = $("#hdnModelo").val();

    $('#dtpFecha').datepicker({
        format: "dd/mm/yyyy"
    }).on('change', function () {
        $('.datepicker').hide();
    });

    //$("#btnBuscar").on("click", function () {
    //    //arrayIdTransacciones.length = 0;
    //    $("#idTransaccionesBuscar, #idTransaccionesPag, #idTransaccionesGrupo").val("");
    //    return true;
    //});

    $(document).on("click", ".modal-cancelar", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $("#selectModelo").val(function () {

        var MarcaVehiculo = $('#selectMarcaVehiculo').val();
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
                    $("#selectModelo").select2("val", modelo);
                    $("#selectModelo").select2("readonly", true);
                }
            }
        });
        
    });

    $("#selectMarcaVehiculo").on("change", function () {
        if ($(this).val() !== null) {
            $("#selectModelo").empty();
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
        }
    });

});
