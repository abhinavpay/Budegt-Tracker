let balance = 0;

let budget =0;

let expTitle= '';

let expAmount = 0;

let totalExpense = 0;

let temp ='';

let table = '';

counter=0;



//adding budget 

function budgetAdd(){

    budget = budget_text.value;
    budget = parseFloat(budget).toFixed(2);
    balance=budget

    if(budget <= 0 ){
            alert("value cannot be empty or negative")
    }
    else{
        document.getElementById("budget_amount").innerHTML=`${budget}`;
        document.getElementById("balance_amount").innerHTML=`${budget}`
    }

}



//reset button

function reset(){

    window.location="index.html"
}


// adding expense 


function addExpense(){

    expTitle = expense_title.value;
    expAmount = expense_amount.value;

        if(budget < 0){
            alert("add the budget amount");
        }

        else{

            if(expAmount <= 0){
                alert("Vlaue cannot be empty or negative");

            }
            else{
                expAmount = parseFloat(expAmount);
                balance -= expAmount;
                balance = parseFloat(balance).toFixed(2)
                totalExpense += expAmount;



                temp = table

                table =`<tr>
                <td style="font-size: 25px;border: 2px solid black;">${expTitle}</td>
                <td style="font-size: 25px; border: 2px solid black;">${expAmount}</td>
                <td name=${expAmount} onclick="del(this)" style="font-size: 25px; border: 2px solid black;" >&#10060</td>

                
                
                 </tr>`;


               

            table += temp
            console.log(temp);

                
             document.getElementById('table_exp').innerHTML = table;
             



                // let p = document.createElement("p")
                // let output = document.getElementById('expense_list');
                // p.appendChild(document.createTextNode(`${expTitle} : ${expAmount}`))
                // output.appendChild(p)



              document.getElementById("expense_amount_1").innerHTML = `${totalExpense}`;
              document.getElementById("balance_amount").innerHTML = `${balance}`  
            }
        }



}

function del(r){

    
   
   

     
    var i = r.parentNode.parentNode.rowIndex;
    
    document.getElementById("table_exp").deleteRow(i);
    

    let delData = r.getAttribute("name");
    totalExpense -= delData;
    balance = budget;
    balance -= totalExpense;
    document.getElementById("balance_amount").innerHTML = `${balance}`;
    document.getElementById("expense_amount_1").innerHTML = `${totalExpense}`;

    


}