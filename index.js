function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction() {
    return function namedFn() {
      console.log("Sakar Masoud");
    };
  }

  function returnsAnAnonymousFunction() {
    return () => console.log("Sakar Masoud");
  }