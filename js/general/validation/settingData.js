/// <summary>
/// mizaguirre: Realiza el selectitem del combo por default
/// </summary>
/// <param name="idElement">Id del control dropdownlist a ser seteado.</param>
/// <param name="value">Valor que se le asigna como default</param>

var DataBind = {};
function setDataSel(idElement, value) {
    DataBind[idElement] = value; //Variable que genera un Objeto Dinamico.
    //#region Combo con Data.
    if ($(idElement + " option").length > 0) { //Confirma si el combo esta definido y tiene data.
        if ($(idElement).find("option[value=" + value + "]").length > 0) { //Confirma si el valor a Setear existe en las opciones del Combo
            $(idElement).val(value); //Setea el Valor
        } else {
            $(idElement)[0].selectedIndex = 0; //Selecciona el Valor por defecto
        }
    }
    //#endregion

    //#region Combo sin Data.
    $(idElement).on('binded', function () {
        if ($("#" + this.id + " option").length > 0) {//Confirma si el combo esta definido y tiene data.
            if ($(this).find("option[value=" + DataBind["#" + this.id] + "]").length > 0) { //Confirma si el valor a Setear existe en las opciones del Combo
                $("#" + this.id).val(DataBind["#" + this.id]); //Setea el Valor
            } else {
                $("#" + this.id)[0].selectedIndex = 0; //Selecciona el Valor por defecto
            }

        } else {
            $(this).attr('disabled', 'disabled');
        }
    });
    //#endregion
}
