document.addEventListener("DOMContentLoaded",function()
{
    const button=document.getElementById("calculate");
    button.addEventListener("click",function()
{
    const billAmout=document.getElementById('bill-amount').valueAsNumber;
    const tipPercentage=document.getElementById('percentage').valueAsNumber;
    if(billAmout && tipPercentage)
    {
        const percentageAmount=(billAmout*tipPercentage)/100;
        console.log(percentageAmount);
        const tipAmount=document.getElementById('tip-amount');
        tipAmount.textContent="Tip Amount: Rs."+percentageAmount;
        const totalAmount=document.getElementById('total');
        totalAmount.textContent="Total Amount: Rs."+(billAmout+percentageAmount);
    }
    else
    {
        alert("Please enter bill amount and tip percentage");
    }

})
})