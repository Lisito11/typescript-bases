"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const exist = false;
    const pairHeroes = [batman, superman];
    const villains = ['Lex Lutor', 5, true];
    const allies = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Power;
    (function (Power) {
        Power[Power["acuaman"] = 0] = "acuaman";
        Power[Power["batman"] = 1] = "batman";
        Power[Power["flash"] = 5] = "flash";
        Power[Power["superman"] = 100] = "superman";
    })(Power || (Power = {}));
    const powerFlash = Power.flash;
    const powerSuperman = Power.superman;
    const powerBatman = Power.batman;
    const powerAcuaman = Power.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map