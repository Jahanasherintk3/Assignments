var number=153;
var numberofdigit=3;
let sum=0;
// create a temporary variable
let temp=number;
while(temp>0)
{
    let reminder=temp%10;
    sum= sum + reminder ** numberofdigit;
    temp=parseInt(temp/10);

}
console.log(sum);


    if(sum == number)
    {
        console.log("armstrong")
    }
    else
    {
        console.log("not armstrong")
    }
