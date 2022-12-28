(()=>{


    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Lisanny';
    console.log(typeof myCustomVariable);
    
    myCustomVariable = 20
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 30,
        powers:["Fly"]
    }
    console.log(typeof myCustomVariable);
})()