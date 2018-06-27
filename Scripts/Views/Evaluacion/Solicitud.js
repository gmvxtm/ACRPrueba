var arrayIdText = new Array();

$(document).ready(function () {

    $("#Precio").keyup(function (e) {
        operacion();
    });

    $("#Inicial").keyup(function (e) {
        operacion();
    });

    //$(".txtOfertaComercial").on("blur", function() {
    //    var valor = $(this).val();
    //    var id = $(this)[0].id;

    //    arrayIdText.push({
    //        IdOfertaDetalle: id,
    //        OfertaComercial: valor
    //    });

    //});

    $(".txtOfertaComercial").blur(function () {
        var valor = $(this).val();
        var id = $(this)[0].id;

        for (i = 0; i < arrayIdText.length; i++) {
            if (id === arrayIdText[i].IdOfertaDetalle) {
                arrayIdText.splice(i, 1);
                break;
            }
        }

        arrayIdText.push({
            IdOfertaDetalle: id,
            OfertaComercial: valor
        });

        //var s = JSON.parse(arrayIdText);
        var myJsonString = JSON.stringify(arrayIdText);
        $("#hdnOfertaDetalle").val(myJsonString);
    });

    function operacion() {
        var precioVehiculo, montoInicial, montoPrestamo;
        precioVehiculo = $("#Precio").val();
        montoInicial = $("#Inicial").val();

        montoPrestamo = parseFloat(precioVehiculo) - parseFloat(montoInicial);

        if (parseFloat(montoInicial) > parseFloat(precioVehiculo)) {
            montoPrestamo = 0;
        }
        if (isNaN(montoPrestamo)) { montoPrestamo = 0; }
        $("#Prestamo").val(montoPrestamo);
    }

    $("#btnConfirmarRegistroX").click(function (e) {
        var animateIn = $("#animate_in").val();
        var animateOut = $("#animate_out").val();
        if ($("[name=IdOfertaDetalle]:checked").length === 0) {

            new PNotify({
                title: 'Error',
                text: 'No se ha seleccionado una oferta',
                animate: {
                    animate: true,
                    in_class: animateIn,
                    out_class: animateOut
                }
            });
            e.preventDefault();
            return;
        }

        if (
            $("#Prestamo").val().trim() !== "" &&
            (parseInt($("#Prestamo").val()) > parseInt($("[name=IdOfertaDetalle]:checked").parent().parent().find("td:first").find("input[type=text]").val()))
        ) {
            new PNotify({
                title: 'Error',
                text: 'No se puede elegir un monto inferior al Monto del Préstamo',
                animate: {
                    animate: true,
                    in_class: animateIn,
                    out_class: animateOut
                }
            });
            e.preventDefault();
            return;
        }
        if ((($("#Precio").val() === "" && $("#Inicial").val() !== "")) || ($("#Precio").val() !== "" && $("#Inicial").val() === "")) {
            new PNotify({
                title: 'Error',
                text: 'Los campos Valor del Vehiculo y Monto Inicial deben contener valores',
                animate: {
                    animate: true,
                    in_class: animateIn,
                    out_class: animateOut
                }
            });
            e.preventDefault();
            return;
        }



        $.magnificPopup.open({
            items: {
                src: "#confirmarRegistro"
            },
            type: "inline",
            preloader: false,
            modal: true
        });
    });
    //permite que diminuya hasta un punto mas del valor inferior y no mas de su valor original


    $(".sinSeguro").find("[name=OfertaComercial]").change(function () {
        var valorInferior = parseInt($($(".sinSeguro").find("[name=hdnOfertaComercial]")[$(".sinSeguro").find("[name=OfertaComercial]").index(this)]).val());
        var valorReal = parseInt($(this).parent().find("[name=hdnOfertaComercial]").val());
        if (valorReal < parseInt($(this).val())) {
            $(this).val(valorReal);
        }
        if (valorInferior >= parseInt($(this).val())) {
            $(this).val(valorInferior + 1);
        }
    });
    $(".conSeguro").find("[name=OfertaComercial]").change(function () {
        var valorInferior = parseInt($($(".conSeguro").find("[name=hdnOfertaComercial]")[$(".conSeguro").find("[name=OfertaComercial]").index(this)]).val());
        var valorReal = parseInt($(this).parent().find("[name=hdnOfertaComercial]").val());
        if (valorReal < parseInt($(this).val())) {
            $(this).val(valorReal);
        }
        if (valorInferior >= parseInt($(this).val())) {
            $(this).val(valorInferior + 1);
        }
    });

});
