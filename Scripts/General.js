$(document).ready(function () {


    $("a.dropdown-toggle.liSubMenu").on("click", function (e) {
        var alsm = $(this);
        if ($(window).width() >= 751) {
            alsm.css("background-color", "inherit");
            e.stopPropagation();
            return false;
        }
        return true;
    });

    if ($(window).width() > 750) {
        $(".navbar-default .dropdown").on("mouseover", function () {
            $(".dropdown-toggle", this).next(".dropdown-menu").show();
        }).on("mouseout", function () {
            $(".dropdown-toggle", this).next(".dropdown-menu").hide();
        });
    } else {
        $(".navbar-default .dropdown").off("mouseover").off("mouseout");
    }

    $(".menu-nivel-2 .dropdown-toggle").on("click", function (e) {
        if ($(window).width() < 751) {
            if ($(this).parent().hasClass("open")) {
                $(this).parent().removeClass("open");
            } else {
                $(".menu-nivel-2 .dropdown-toggle").parent().removeClass("open");
                $(this).parent().addClass("open");
            }
            e.stopPropagation();
            return false;
        }
        return true;
    });


    $(".inputSoloLetras").on("keypress", function (event) {
        var expresion = /[a-zA-ZñÑ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    $(".inputSoloLetrasYSubGuion").on("keypress", function (event) {
        var expresion = /^[a-zA-Z_]*$/g;
        //var expresion = /[a-zA-ZñÑ_]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    //$(".inputSoloLetrasElementoXML").on("keypress", function (event) {
    //    var expresion = /^[a-zA-Z0-9_.-]*$/g;
    //    //var expresion = /[a-zA-ZñÑ_]/g;
    //    var key = String.fromCharCode(event.which);
    //    if (event.keyCode === 8 || expresion.test(key)) {
    //        return true;
    //    }
    //    return false;
    //});
    //

    $(".inputLetrasConEspacio").on("keypress", function (event) {
        var expresion = /[a-zA-ZñÑ ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    // Como telefono, ruc, dni
    $(".inputSoloNumeros").on("keypress", function (event) {
        var expresion = /[0-9]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    // Como Nombres o descripción
    $(".inputSoloLetrasConCaracterEsp").on("keypress", function (event) {
        var expresion = /[-a-zA-ZñÑ.,_()&"'+\\ ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    // Para inputs como descripción o nombres por ejemplo
    $(".inputLetrasYNumerosConCaracterEsp").on("keypress", function (event) {
        var expresion = /[-a-zA-ZñÑ0-9-.,_()&"'+\\ ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    // Como Nombres o descripción
    $(".inputEmailAlfaNumerico").on("keypress", function (event) {
        var expresion = /[-a-zA-Z0-9._@]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    // Como Nombres o descripción
    $(".inputAlfaNumerico").on("keypress", function (event) {
        var expresion = /[-a-zA-Z0-9]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });
    // Como Nombres o descripción
    $(".inputAlfaNumericoConEspacio").on("keypress", function (event) {
        var expresion = /[-a-zA-Z0-9 ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    // Para inputs como descripción o nombres por ejemplo
    $(".inputLetrasYNumerosConCaracterEspPaste").on("keypress", function (event) {
        var expresion = /[-a-zA-ZñÑ0-9-.,_()&"'+\\ ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    // Como telefono, ruc, dni
    $(".inputSoloNumerosPaste").on("keypress", function (event) {
        var expresion = /[0-9]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });
    // Para valores decimales solo numeros decimales con punto como separador de decimales.
    $(".inputSoloNumerosDecimales").on("keypress", function (event) {
        var expresion = /^[-+]?[\d.]+$/g;
        //var expresion = /^d*(.d{1})?d{0,1}$/g;

        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });


    // Como Nombres o descripción
    $(".inputEmailAlfaNumericoPaste").on("keypress", function (event) {
        var expresion = /[-a-zA-Z0-9._@]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    $(".inputSoloLetrasPaste").on("keypress", function (event) {
        var expresion = /[a-zA-ZñÑ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    $(".inputLetrasConEspacioPaste").on("keypress", function (event) {
        var expresion = /[a-zA-ZñÑ ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode === 8 || expresion.test(key)) {
            return true;
        }
        return false;
    });

    $(".inputSoloNumerosPaste").on("blur", function () {
        if (isNaN($(".inputSoloNumerosPaste").val()) === true) {
            $(".inputSoloNumerosPaste").val("");
        }
    });

    $(".inputSoloLetras, .inputLetrasConEspacio, .inputSoloNumeros, .inputSoloLetrasConCaracterEsp, .inputLetrasYNumerosConCaracterEsp, .inputEmailAlfaNumerico").on("paste", function (e) {
        e.preventDefault();
    });

    if ($("#alertNotif").attr("notif-mostrar") === "true") {
        var notifTitulo = $("#alertNotif").attr("notif-titulo");
        var notifResultado = $("#alertNotif").attr("notif-resultado");
        var notifTipo = $("#alertNotif").attr("notif-tipo");

        new PNotify({
            title: notifTitulo,
            text: notifResultado,
            type: notifTipo
        });
    }

    $("#btnConfirmarRegistro").on("click", function () {
        $.magnificPopup.open({
            items: {
                src: "#confirmarRegistro"
            },
            type: "inline",
            preloader: false,
            modal: true
        });
    });

    $(document).on("click", "#btnConfirmSI", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $(".form-confirmar").submit();
    });

    $(document).on("click", ".modal-cancelar, .modal-ok", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });




    $("#formPaginacion #pagPrev, #formPaginacion #pagNext, #btnBuscar, #formPaginacion #pagPrimera, #formPaginacion #pagUltima").on("click", function () {
        var pagina = $(this).attr("data-pagina");
        $("#pagina").val(pagina);
        $("#formPaginacion").submit();
    });

    $(".adminTablas tbody tr").click(function () {
        var mismoTr = false;
        if ($(this).hasClass("trClickeado")) {
            mismoTr = true;
            $(this).removeClass("trClickeado");
        }
        $(".adminTablas tbody tr").removeClass("trClickeado");
        if (!mismoTr) {
            $(this).addClass("trClickeado");
        }
    });

});

function ValidarSelectValue(select, value) {
    var result = false;
    var obj = document.getElementById(select);
    for (var i = 0; i < obj.options.length; i++) {
        if (obj.options[i].value === value) {
            result = true;
            break;
        }
    }
    return result;
}

function ValidarSelectText(select, text) {
    var result = false;
    var obj = document.getElementById(select);
    for (var i = 0; i < obj.options.length; i++) {
        if (obj.options[i].text === text) {
            result = true;
            break;
        }
    }
    return result;
}

function mostrarNotify(notifTitulo, notifContenido, notifTipo) {
    new PNotify({
        title: notifTitulo,
        text: notifContenido,
        type: notifTipo
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[-a-zA-Z]{2,}))$/;
    return re.test(email);
}

function limpiarColorErrorPorElemento(element) {
    $(element).closest(".form-group").removeClass("has-error");
}

function limpiarColorErrorPorTag(tag) {
    $(tag).closest(".form-group").removeClass("has-error");
}

function validarCampo(element, tipo, camposVacios) {
    switch (tipo) {
        case "input":
            if (!$.trim($(element).val())) {
                $(element).closest(".form-group").addClass("has-error");
                camposVacios++;
            } else {
                $(element).closest(".form-group").removeClass("has-error");
            }
            break;
        case "select":
            if ($(element).val() === null) {
                $(element).closest(".form-group").addClass("has-error");
                camposVacios++;
            }
            break;
    }
    return camposVacios;
}

function InicializadorFechas(fechaInicio, fechaFin) {
    $(fechaInicio).datepicker({
        format: "dd-mm-yyyy",
        orientation: "right up"
    }).on("changeDate", function (selected) {
        var startDate = new Date(selected.date.valueOf());
        $(fechaFin).datepicker("setStartDate", startDate);
        $(this).datepicker("hide");
    }).on("clearDate", function () {
        $(fechaFin).datepicker("setStartDate", new Date());
    });

    $(fechaFin).datepicker({
        format: "dd-mm-yyyy",
        orientation: "right up"
    }).on("changeDate", function (selected) {
        if (typeof selected.date !== "undefined") {
            var endDate = new Date(selected.date.valueOf());
            $(fechaInicio).datepicker("setEndDate", endDate);
            if ($(fechaInicio).val() === null || $(fechaInicio).val() === "") {
                $(fechaFin).datepicker("setStartDate", new Date());
            } else {
                $(fechaFin).datepicker("setStartDate", $(fechaInicio).val());
            }
        }
        $(this).datepicker("hide");
    }).on("clearDate", function () {
        $(fechaInicio).datepicker("setEndDate", null);
    });

    $(fechaInicio).datepicker("setDate", new Date());
    $(fechaInicio).datepicker("setStartDate", new Date());

    $(fechaInicio).keypress(function (e) {
        e.preventDefault();
        return false;
    });

    $(fechaFin).keypress(function (e) {
        e.preventDefault();
        return false;
    });

    $(fechaInicio).on("change", function () {
        if ($.trim($(this).val())) {
            limpiarColorErrorPorElemento($(this));
        }
    });

    $(fechaFin).on("change", function () {
        if ($.trim($(this).val())) {
            limpiarColorErrorPorElemento($(this));
        }
    });
}

function InicializadorFechasConsulta(fechaInicio, fechaFin) {
    $(fechaInicio).datepicker({
        format: "dd-mm-yyyy",
        orientation: "right up"
    }).on("changeDate", function (selected) {
        var startDate = new Date(selected.date.valueOf());
        $(fechaFin).datepicker("setStartDate", startDate);
        $(this).datepicker("hide");
    }).on("clearDate", function () {
        $(fechaFin).datepicker("setStartDate", '2012-01-01');
    });
    $(fechaFin).datepicker({
        format: "dd-mm-yyyy",
        orientation: "right up"
    }).on("changeDate", function (selected) {
        if (typeof selected.date !== "undefined") {
            var endDate = new Date(selected.date.valueOf());
            $(fechaInicio).datepicker("setEndDate", endDate);
            if ($(fechaInicio).val() === null || $(fechaInicio).val() === "") {
                $(fechaFin).datepicker("setStartDate", new Date());
            } else {
                $(fechaFin).datepicker("setStartDate", $(fechaInicio).val());
            }
        }
        $(this).datepicker("hide");
    }).on("clearDate", function () {
        $(fechaInicio).datepicker("setEndDate", null);
    });

    //$(fechaInicio).datepicker("setDate", new Date());
    //$(fechaInicio).datepicker("setStartDate", new Date());

    $(fechaInicio).keypress(function (e) {
        e.preventDefault();
        return false;
    });

    $(fechaFin).keypress(function (e) {
        e.preventDefault();
        return false;
    });

    $(fechaInicio).on("change", function () {
        if ($.trim($(this).val())) {
            limpiarColorErrorPorElemento($(this));
        }
    });

    $(fechaFin).on("change", function () {
        if ($.trim($(this).val())) {
            limpiarColorErrorPorElemento($(this));
        }
    });
}

function CambiarTabRequerimientos() {
    $("#tabRegistroSolicitud").parent().removeClass("active");
    $("#tabRegistroSolicitud").attr("aria-expanded", "false");
    $("#formRegistro").removeClass("active");
    $("#tabRegistroRequerimientos").parent().addClass("active");
    $("#tabRegistroRequerimientos").attr("aria-expanded", "true");
    $("#formListaReq").addClass("active");
}

function CambiarTabRegistro() {
    $("#tabRegistroRequerimientos").parent().removeClass("active");
    $("#tabRegistroRequerimientos").attr("aria-expanded", "false");
    $("#formListaReq").removeClass("active");
    $("#tabRegistroSolicitud").parent().addClass("active");
    $("#tabRegistroSolicitud").attr("aria-expanded", "true");
    $("#formRegistro").addClass("active");
}

function CambiarTabDetalleRequerimiento() {
    $("#tabDatosUsuario").parent().removeClass("active");
    $("#tabDatosUsuario").attr("aria-expanded", "false");
    //$("#formRegistro").removeClass("active");
    $("#tabDatosRequerimiento").parent().addClass("active");
    $("#tabDatosRequerimiento").attr("aria-expanded", "true");
    //$("#formListaReq").addClass("active");
}

function mostrarDatosPersonalesUsuarioInterno(vinculacionId) {
    switch (vinculacionId) {
        case $("#vinculacionCAP").val():
        case $("#vinculacionNCAP").val():
        case $("#vinculacionPRA").val():
            $("#divNombres").removeClass("hide");
            $("#divApePaterno").removeClass("hide");
            $("#divApeMaterno").removeClass("hide");
            $("#divDNI").removeClass("hide");
            $("#divEmail").removeClass("hide");
            break;
        case $("#vinculacionPNAT").val():
        case $("#vinculacionSNP").val():
            $("#divNombres").removeClass("hide");
            $("#divApePaterno").removeClass("hide");
            $("#divApeMaterno").removeClass("hide");
            $("#divDNI").removeClass("hide");
            $("#divEmail").removeClass("hide");
            break;
        case $("#vinculacionGEN").val():
            $("#divNombres").addClass("hide");
            $("#divApePaterno").addClass("hide");
            $("#divApeMaterno").addClass("hide");
            $("#divDNI").addClass("hide");
            $("#divEmail").addClass("hide");
            break;
    }
}

function ValidarDatosRepetidosSolicitudUsuarioExterno(ruc, razonSocial) {
    return $("#RUC").val() === ruc || $("#RazonSocial").val() === razonSocial;
}

function ExisteUsuarioExterno(url, ruc) {
    var existe = false;
    $.ajax({
        url: url,
        data: "ruc=" + ruc,
        dataType: "json",
        type: "post",
        async: false,
        success: function (data) {
            if (data != null) {
                if (data.existe) {
                    existe = true;
                    mostrarNotify("Usuario Externo", "Ya existe un usuario externo con ese RUC.", "error");
                }
            }
        }
    });
    return existe;
}

function ExisteUsuarioExternoCuenta(url, cuenta) {
    var existe = false;
    $.ajax({
        url: url,
        data: "cuenta=" + cuenta,
        dataType: "json",
        type: "post",
        async: false,
        success: function (data) {
            if (data != null) {
                if (data.existe) {
                    existe = true;
                    mostrarNotify("Usuario Externo", "Ya existe un usuario externo con esa Cuenta.", "error");
                }
            }
        }
    });
    return existe;
}

function ExisteUsuarioInternoPorCuenta(url, cuenta) {
    var existe = false;
    $.ajax({
        url: url,
        data: "cuenta=" + cuenta,
        dataType: "json",
        type: "post",
        async: false,
        success: function (data) {
            if (data != null) {
                if (data.existe) {
                    existe = true;
                    mostrarNotify("Usuario Externo", "Ya existe un usuario con esa Cuenta.", "error");
                }
            }
        }
    });
    return existe;
}

function MostrarCargando() {
    $.magnificPopup.open({
        items: {
            src: "#modalCargando"
        },
        type: "inline",
        modal: true
    });

}

