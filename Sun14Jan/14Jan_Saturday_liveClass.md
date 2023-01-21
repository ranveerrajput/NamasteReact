- Config driven UI
- A configuration is a JS object or a JSOn data
- any Config power the UI

- Hook -> Its a normal JS function
    - To create local variables in the application
    - we use a local state to handle data on the UI

- Read React Fiber
- What is Virtual DOm -> this is a representtion of DOM.At the end it is a JS object. WHenever there is a state change it quickly calculate the diff between object.

- why react is fast ? -> It is because of its fast DOM manipulation.Fast manipulation is because of diff  alogorithm ( react fiber)

- react directly not able to synce / track the variables on UI
- react only track the varaible which are its state vaiable
- we use usestate to track the varaibles it is a hook

- Microservices ->when we have a big allpication in past years.
- Monolith : All things are at one place . UI SMS servcie , notification service so for any change we have to deploy whole project.

- SO now world is moving towards Microservices

- UI project
- Logs
- backend
- notification
- logs

- this is called separation of concern

- same domianin name but different port


---

- How do we make api call in JS
- fetch it is pre build it is a browser api. we can call this function and give it api then it fetches the api 

- React gives amazing functionality as a hook useEffect

- render and after api call and update

- 2 ways to call qpi

- 1 
1 Load -=> api => render page
2 loads => render => api=> updat UI 

to do this react gives us useEffect hook

- 2 time when render
- state change and prop change


- when we have a call back with empty dependancy aray in useEffect it will render once after render

- read about optional chaining

- read about Shimmer Ui (amazing stuff)

---

- conditional rendering
- shimmer uo or API UI

- Read : JS Expression and statement

- over {} Js excepts expressions not statement

- read about y do we done data.json after api call