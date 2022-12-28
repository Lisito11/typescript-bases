// import {Hero} from "./classes/Hero";
// import {Hero as SuperHero} from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
// import powers from "./data/powers";
// import { genericFunction, printObject } from './generics/generics';
// import { genericFunctionArrow } from './generics/generics';

import { genericFunctionArrow } from "../generics/generics";
import { Villain } from "../interfaces";


// const Hero = 123;
// const hero = new HeroClasses.Hero("Lisanny", 1, 21);
// const hero = new Hero("Lisanny", 1, 21);

// console.log(hero.power);

// console.log(powers);



// printObject('hola')
// printObject(123)
// printObject(new Date())
// printObject(true)
// printObject({a:1, b:2, c:3})

// console.log(genericFunction<Number>(3.141618).toFixed(2));

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

genericFunctionArrow<Villain>(deadpool).dangerLevel;







