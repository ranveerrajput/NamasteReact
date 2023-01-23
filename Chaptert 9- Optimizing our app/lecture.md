- In this lecture we will be creating our own hooks.
- when why and how should builf my own hook?
- why even should we build hooks?
- modularity , readebility,
- there should be a place where we can keep our utility functions so in industry we make utils folder where a code which can be use in multiple folder is stored.

- modularity means we have broken down code in miningful pieces.

---

- whenever you are creating a hook create it as a new file. Always create a hook with `use` name in front of it.
- generally we use name export for helper function.
- that does Sr developer do to do it more better : whenevee u add event listener you need to clean the cache

- it is alwasys a good practice to clean eventlistner when you go to other component.

- we do that on unmount .

- large scale application cannot br build by only one bundler

- so we should dbe doing chunking
- chunking, code spliting, dynamic bundling, lazy loading, on demand loading are the same thing.

- bundling is a good but we have to do a logical bundling

- wherever you have import there you have to lazy load
- lazy come from react library as a named import
- const Instamart = lazy(()=>import("./components/Instamart));

- when u are loading u r compnent in demand react try to suspend it

- upon on demand loading upon render react will suspend the loading because the code is not there

- to overcome this we use `Suspense`
- fallback

- Homework : create your own hooks
  -never ever dynamically load you component inside another conponent
