# >>==>> DAY - 7.

# forEach Loop in Arrays.

- arr.forEach( callBackFunction ).
- CallbackFunction : Here, it is a function to execute for each element in the array.
- \*A callback is a function passed as an argument to another function.

# Some More Array Methods.

# Map.

- Creates a new array with the results of some operation. The value its callback returns are used to form new array
- arr.map( callbackFnx( value, index, array ) );

e.g.

<pre>
    let newArr = arr.map( ( val ) => {
        return val * 2;
    });
</pre>

# Filter.

- Creates a new array of elements that give true for a condition/filter.
- Eg: all even elements

<pre>
    let newArr = arr.filter( ( val ) => {
        return val % 2 === 0;
    });
</pre>

# Reduce.

- Performs some operations & reduces the array to a single value. It returns that single value.
