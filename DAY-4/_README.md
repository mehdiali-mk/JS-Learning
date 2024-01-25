# >>==>> DAY - 4

# Loops in JS.

- Loops are used to execute a piece of code again & again.

# for Loop.

<pre> 
    for (let i = 1; i <= 5; i++)
    {
        console.log("Mehdiali Kadiwala");
    }
</pre>

# Infinite Loop : A Loop that never ends

# while Loop

<pre>
    while (condition)
    {
        // do some work
    }

    let i = 1;
    while (i <= 100)
    {
        console.log("i = ", i);
        i++
    }
</pre>

# do-while Loop.

<pre>
    do {
        // do some work
    } while (condition);
</pre>

# for-of Loop.

<pre>
    for (let val of strVar)
    {
        //do some work
    }
</pre>

# for-in Loop.

<pre>
    for (let key in objVar)
    {
        //do some work
    }
</pre>

# Strings in JS.

- String is a sequence of characters used to represent text.

- Create String.

  - let str = "Mehdiali Kadiwala";

- String Length.

  - str.length;

- String Indices.
  - str[0], str[1], str[2];

# Template Literals in JS.

- A way to have embedded expressions in strings.

  - `this is a template literal`

- String Interpolation.

- To create strings by doing substitution of placeholders.
  - `string text ${expression} string text`.

# String Methods in JS.

- These are built-in functions to manipulate a string

- str.toUpperCase( ).
- str.toLowerCase( ).
- str.trim( ) // removes whitespace.
- str.slice(start, end?) // returns part of string.
- str1.concat( str2 ) // joins str2 with str1.
- str.replace( searchVal, newVal ).
- str.charAt( idx ).
