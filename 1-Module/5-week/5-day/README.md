# IIFEs - Immediately Invoked Function Expression

## Anonymous function expression syntax recall

```
    const helloWorld = function() {
        console.log('hello world')
    }

    helloWorld()
```

The above code assigns an anonymous function to a variable for the function to be used later.

## Immediately Invoked Function Expression

Like the name says, an IIFE is an anonymous function that is immediately invoked

```
    (function() {
        console.log('invoked from an IIFE')
    })()
```

To create an IIFE
 1. wrap the anonymous function in the grouping operator
 2. invoke the function!


```
    const res = (function() {
        return 'Value from IIFE'
    })()

    console.log(res)
```

Attempting to assign an IIFE to a variable will give the variable the value returned from the function
