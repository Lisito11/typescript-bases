(() => {

    // type Hero = {
    //     name: string;
    //     age?: number;
    //     powers: number[];
    //     getName?: () => string;
    // }

    interface Xmen  {
        name: string;
        realName: string;
        mutantPower(id: number) : string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number;
        public realName: string;
        public name: string;

        mutantPower(id: number){
            return `${this.name} ${this.realName}`;
        }
    }

   
 

})()
