(()=>{


    const fullName = (firstName: string, ...restArgs: string[]) : string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Tony', 'Juan', 'Pedro');
    
    console.log({superman});
    

})()