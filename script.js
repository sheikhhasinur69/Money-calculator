


const calculateButton = document.getElementById('calculate-button').addEventListener('click', function(){
    let foodInput = document.getElementById('food-input');
    foodInput.value;
    let rentInput = document.getElementById('rent-input');
    let clothesInput = document.getElementById('clothes-input');
    let totalExpenses = document.getElementById('total-expenses');

    totalExpenses.innerText = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothesInput.value);
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
    

   const incomeInput = document.getElementById('income-input');

   const balance = document.getElementById('balance');
   balance.innerText = Number(incomeInput.value)-Number (totalExpenses.innerText) ;
//    
})

// save button function

document.getElementById('save-button').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input');
    const saveInput = document.getElementById('save-input');
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (incomeInput.value * saveInput.value) / 100;
    incomeInput.value = '';
    saveInput.value = '';
    
    const remainingAmount = document.getElementById('remaining-amount');
    remainingAmount.innerText = Number(balance.innerText) - Number(savingAmount.innerText);
    
    
})