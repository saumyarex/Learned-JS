let a = 10;

(function one() {
    let b = 20;
    console.log(a, b);
})();


(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
console.log(firstVariable);