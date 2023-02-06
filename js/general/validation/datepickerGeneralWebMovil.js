function formatearFecha(fecha) {
            var fechaGt = /^\d{2}\/\d{2}\/\d{4}$/g;
            var fechaIso = /^\d{4}-\d{2}-\d{2}$/g;

            if (fechaGt.test(fecha)) {
                return fecha.split("/").reverse().join("-");
            } else if (fechaIso.test(fecha)) {
                return fecha.split("-").reverse().join("/");
            } else {
                return fecha;
            }
        }

        $(function () {                                       // <== Doc Ready
            // Esto elimina la clase placeholder cuando se recarga la página y el campo tiene un valor
            if ($("#date").val() != "") {
                $("#date").removeClass('placeholderclass');
            }
        
            $("#date").change(function () {                  // When the email is changed
                $('#txtFechaInicial').val(formatearFecha(this.value));                  // copy it over to the mail
            });

            $("#txtFechaFinalMovil").change(function () {
                $('#txtFechaFinal').val(formatearFecha(this.value));
            });

            $("#txtFechaInicial").change(function () {                  // When the email is changed
                $('#date').val(formatearFecha(this.value));                  // copy it over to the mail

                if (this.value != "") $('#date').removeClass('placeholderclass');
                else $('#date').addClass('placeholderclass');
            });

            $("#txtFechaFinal").change(function () {
                $('#txtFechaFinalMovil').val(formatearFecha(this.value));

                if (this.value != "") $('#txtFechaFinalMovil').removeClass('placeholderclass');
                else $('#txtFechaFinalMovil').addClass('placeholderclass');
            });
        });