(() => {

   abstract class Mutante {
        constructor (
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante {
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }

    const wolwerine = new Xmen('Wolerine', 'Logan');
    const magneto = new Xmen('Magneto', 'Magnus');

    console.log(wolwerine);
    console.log(magneto);

    const printName = (character: Mutante) => {
        console.log(character.realName);
        
    }

    printName(wolwerine);
    



})()