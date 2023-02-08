### Apdex

This is assignment from NewRelic.
Clone the repo, `npm install` and `npm run start`, then see the result at your `localhost:3000`.
For quick result, you can see at the [Browser Support](#browser-support)

* [Stack](#stack)
* [Structure and decision](#structure-and-decisions)
* [Big O](#big-o)
* [Lighthouse Performance](#lighthouse-performance)
* [Browser Support](#browser-support)

### Stack

This project is built with Create React App, Javascript and Sass.
### Structure and decisions

For the main view, I have it as HomePage and inside the page, we have components. Noted that I use mainly composition approach for reusing the components. Such approach can benefit us the flexibility when reusing the code. We can also build a easier scalability with this use, Let's say, we are required to add one some layers between components as features, thanks to composition, we have less consideration and construction in state lifting.

For data modeling, I use Hash Map data structure [Map Collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). In the collection, we have key value pair: the key is hostname and the value is arrays of application objects. Indeed, there are many ways of modeling such data, however Map gives me more intuitive here due to we only wants unique key and also for scaling, if at certain points, we decide to use numbers instead of string to represent hostname or any similar scenarios, Map collection offers us the benefit of storing not only string as the key.

The file structure, I group files according to the types. In the components, I have many JSX and SCSS file around, it might be bit messy as feature grows and components added. If this project is serious, I will split all of the scss files into components of theme library and we can just reuse it from that.
### Big O

The time and space complexity for the data modeling solution is O(n).
### Lighthouse Performance

<img width="550" alt="image" src="https://user-images.githubusercontent.com/42298152/217593986-1007cd7e-e5e8-4928-a3ac-894a47b050d0.png">

### Browser Support 

|  Browser |  List  | Grid  | 
|---|---|---|
| Chrome  | <img width="300" alt="image" src="https://user-images.githubusercontent.com/42298152/217545129-e7d1d0d6-39c1-4c06-9488-203e9446489c.png">  | <img width="300" alt="image" src="https://user-images.githubusercontent.com/42298152/217545171-131cc690-9a30-4148-a074-f73d3993ae35.png">  | 
| FireFox  | <img width="300" alt="image" src="https://user-images.githubusercontent.com/42298152/217545467-b02765ea-648a-4513-b347-5a5ab4e739f7.png">  | <img width="300" alt="image" src="https://user-images.githubusercontent.com/42298152/217545426-723ceea9-e1d2-414c-bf3a-9d5ef805aa44.png">  | 
| Edge  | <img width="300" alt="image" src="https://user-images.githubusercontent.com/42298152/217545722-74f955ed-17a7-4ef2-b664-bd56147a6346.png">  | <img width="300" alt="image" src="https://user-images.githubusercontent.com/42298152/217545686-2ed1ac29-f8a8-4449-b5ea-e2cf6b7bc066.png"> | 
|Safari  |   | <img width="300" alt="image" src="https://user-images.githubusercontent.com/42298152/217544431-84aebe7b-0d2a-42e7-8c52-5503f4394e27.png">  |




