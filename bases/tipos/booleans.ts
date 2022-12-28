(() => {
    
    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    console.log({isBatman}); // isBatman: false

    // isSuperman = true && true;

    isSuperman = (isBatman) ? true: false;
    
    console.log({isSuperman});

})();