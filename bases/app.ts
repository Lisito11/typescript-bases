(() => {


    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const exist: boolean = false;
  
    // Tuples
    const pairHeroes: [string, string] = [batman,superman];
    const villains: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arrays
    const allies: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enums
     enum Power{
        acuaman = 0,
        batman = 1,
        flash = 5,
        superman = 100
     }

    const powerFlash: Power = Power.flash;
    const powerSuperman: Power = Power.superman;
    const powerBatman: Power = Power.batman;
    const powerAcuaman: Power = Power.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal() : string {
      return 'activada';
    }
  
    function pedir_ayuda() : void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any ='100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  

})()

