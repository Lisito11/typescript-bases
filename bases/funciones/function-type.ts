(()=>{


    const addNumber = (a: number, b: number): number => a+b;
    const greet = (name:string) => `Hello ${name}`;
    const saveTheWorld = () => 'The world is save';

    let myFunction : Function;

    //* myFunction = 10;
    //* console.log(myFunction);

    myFunction = addNumber;
    console.log(myFunction(1,2));

    myFunction = greet;
    console.log(myFunction("Lisanny"));
    
    myFunction = saveTheWorld;
    console.log(myFunction());
    

})()