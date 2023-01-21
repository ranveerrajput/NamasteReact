- create npx create app and see what happen insisde that.

- browserlist : whatever we write inside that it meams it will difinitely work on whatever we have written but it may work on may not for the other browser for some feature.

- polyfil : A code which is replacement for the new code.and this is given to the browser to understand this.
- what convert new code to older code -> babel
- we don not write polyfil babel to it automatically
- babel is a node package it is also a JS code.
- tree shaking-> parcel do tree shaking(It removes unwanted code)(unwanted code means unsued library function n all)
- for large scaling app we use webpack.
- npx create app uses webpack.

- we generally create a script for `npx parcel index.html`
    - we have to configure this inside package.json
    - "start" : "parcel index.html"
    - so now we can use `npm run start` for `npx parcel index.html`.
    - `npx` is equal to `npm run`.
    - we can also define for the production build.
    - "build" : "parcel build index.html"
    - we can right `npm run` as npm also it works fine so npm run start can be written as npm start this is on and the same thing

- babel-plugin-transform-remove-console this plugin removes the console log .
- parcel does not do itself by itself
- while installing decide whether we have to install it as a dev dependancy or what

- command : npm install babel-plugin-transform-remove-console --save-dev

- we have to give the key to the child element wjnever we have multiple child.
- If react dont have the key it has to do lot of work for rendering the thing. Keys are unique.
- render -> updating something on DOM

- How does createElement work:
    - React.creatElement gives us object and this object converted into html and puts it on the DOM
- at the end ofthe day createELement is the object

- ## JSX
- JSX (JavaScript XML) but there is no official name for this.
- to make createElement easy we use JSX

- const heading = <h1 id="title" key="h2">Nameste React</h1>

- if we have multiple line then we have to use ()

- const heading = (
    <h1 id="title" key="h2">
    Nameste React
    </h1>
)

- JSX is HTML like syntax but not HTML inside JSX.

- React.createElemt => Object =>HTML(DOM)

- facebook developer build the JSX

- Homework : Diff between html and JSX.

- How does JSX executes:
    -   Browser does not understand the JSX
    - Babel understands the JSX.(It uses Abstract Syntacx Tree (AST))
    - JSK => React.createElement => Object=>HTML (DOM)
    - Babel converts JSX to createElement code

- HW : how to create image tag and other tags
- HW : Read Babel Documentation

- babel come by default when we install parcel as a dependancy.

---
## Component

-  There are 2 types
    - Functional Component -> new way
    - Class Based Component -> Old way

- functional componrnt is nothing but a function that return react element

- functional component or any component name starts with `Capital letter` is is a goog practice.

- functional component is a normal function

- if we use more than one line then wrap the JSX inside ()

- const abc= () =>{return ()}
- const abc = () => () 

- the above two are same 
- when we have to render the create element we write 

const heading = React.createElement("h1",{},"heading");

root.render(heading); // we write like this

for components to render we use
const HeaderComponent = () =>{
    return (
        <h1> Nameste React</h1>
    )
}
- root.render(<HeaderComponent/>)

- to use component we use <name/>
- to use react element we use {name}

- we can write any piece of JS code inside {}
- read : Sanitization JSX

- Component Composition : using component inside another component.






