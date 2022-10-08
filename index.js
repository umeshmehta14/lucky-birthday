const Dob = document.querySelector("#DOB");
const Ln = document.querySelector("#LN");
const btn = document.querySelector("#btn");
const OB = document.querySelector("#OB");

function cmpvalue(sum , luckyNumber)
{
    if(sum%luckyNumber === 0)
    {
        OB.innerText = "Your Birthday Is Lucky😊"
    }
    else
    {
        OB.innerText = "Your Birthday Is Not Lucky🙂"
    }
}

function checklucky(){
    const date1 = Dob.value;
    const sum = calsum(date1);

    if(sum === 0 || Number(Ln.value) === 0){
        OB.innerText = "please enter both the fields🥸";
    }
    else{
        if(Number(Ln.value) < 0){
            OB.innerText = "Lucky number should be positive";
        }
        else{
            cmpvalue(sum,Ln.value);
        }
    }
}

function calsum(date2)
{
    date2 = date2.replaceAll("-","");
    let sum = 0;

    for (let i = 0; i < date2.length; i++) {
        sum = sum + Number(date2.charAt(i));
        
    }
    return sum;
}
btn.addEventListener("click", checklucky)