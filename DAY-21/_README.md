# >>==>> DAY - 21.

# Promises

- Promise is for “eventual” completion of task. It is an object in JS.
- It is a solution to callback hell.

- let promise = new Promise( (resolve, reject) => { .... } )

  - Function with 2 handlers.

- \*resolve & reject are callbacks provided by JS

- A JavaScript Promise object can be:

  - Pending : the result is undefined
  - Resolved : the result is a value (fulfilled)
  - Rejected : the result is an error object
  - resolve( result )
  - reject( error )

- \*Promise has state (pending, fulfilled) & some result (result for resolve & error for reject).

# Promises

- .then( ) & .catch( ),
- promise.then( ( res ) => { .... } ).
- promise.catch( ( err ) ) => { .... } ).
