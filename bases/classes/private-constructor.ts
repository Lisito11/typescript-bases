(() => {

    class Apocalisis {

        static instance: Apocalisis;


        private constructor ( public name: string){

        }

        static callApocalipsis() : Apocalisis {
            if (!Apocalisis.instance) {
                Apocalisis.instance = new Apocalisis('Soy apocalisis... original')
            }

            return Apocalisis.instance;
        }

        changeName (newName: string) : void {
            this.name = newName;
        }


     }

     const apocalisis1 = Apocalisis.callApocalipsis()
 
     console.log(apocalisis1);
     

 
 })()