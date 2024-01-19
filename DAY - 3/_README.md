# >>==>> DAY - 3

# Logical Operators.

- Logical AND (&&).
- Logical OR (||).
- Logical NOT (!).

# Conditional Statements.

- To implement some condition in the code

- if Statement.
    <pre>
        let mode = "dark";
        let color;
        if (mode === "dark") {
            color = "black";
        }
    </pre>

- if-else Statement
    <pre>
        let mode = "dark";
        let color;
        if (mode === "dark") {
            color = "black";
        }
        else
        {
            color = "white";
        }
    </pre>

- else-if Statement.
    <pre>
        let age = 18;
        if (age < 18) {
            console.log("Junior");
        } else if (age > 60) {
        	console.log("Senior");
        }
        else {
          console.log("middle");
        }
    </pre>

# Ternary Operators.

- Syntax: condition ? true output : false output

  - e.g. age > 18 ? "adult" : "not adult";
