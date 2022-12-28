(()=>{


    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatiSignal = () => {
        return 'BatiSignal activate';
    }

    console.log(typeof activateBatiSignal);
    
    const heroName = returnName();



})()