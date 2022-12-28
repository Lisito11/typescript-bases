(()=>{


    class Avenger{
        constructor(
            public name:string,
            public realName:string
        ){
            console.log('Constructor called!');
            
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ){
            super(name, realName);
            console.log('Xmen called');
            
        }


        get fullName(): string {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error("El nombre debe de ser mayor de 3 letras");
            }
            this.name = name;
        }

        getFullNameFromXmen(){
            console.log(super.getFullName());
            
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logam', true);  
    console.log(wolverine.fullName);
    
    wolverine.getFullNameFromXmen();


})()