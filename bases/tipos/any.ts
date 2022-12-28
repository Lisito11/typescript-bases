(()=>{


   let avenger:any = 123;
   let exists;
   let power;

   avenger = 'Dr Strange';
   console.log((avenger as string).charAt(0));
   
   avenger = 1.673552;
   console.log(<number>avenger.toFixed());

   console.log(exists);
   console.log(power);
   

})()