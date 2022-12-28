function printToConsole(constructor: Function){
    console.log(constructor);   
}

const printToConsoleConditional = (print: boolean = false) : Function => {
    if (print) {
      return printToConsole;   
    }

    return () => {};    
}

// Factory decorator is a function that return other function
function CheckValidPokemonId (): Function {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
         console.log({target, propertyKey, descriptor});

        // descriptor.value = () => console.log('Hola mundo');

        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id > 1 || id < 800) {
                return console.error("Pokemon id must be 1 between 800")
            } else {
                return originalMethod(id);
            }
        }
        

    }
}


function readOnly(isWritable: boolean = true): Function{
    return function(target: any, propertyKey: string){

        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this, 'getter');
                return 'Lisanny'
            },
            set(this, value) {
                console.log(this, value, 'setter');
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isWritable,
                    enumerable: false
                    
                })
            },
        }


    }
}




const blockPrototype = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype)
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
    
    @readOnly()
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}


    @CheckValidPokemonId()
    savePokemonToDB(id: number){
        console.log(`Pokemon save in db ${id}`);
       
    }
}