var number = 100;
let a = 0, b = 1, nextTerm;
for (let i = 1; i <= number; i++) {
    if(a<=30)
    {
    console.log(a);
    }
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}