//getting all the value



// add event listener for calculate button
const calculateButton = document.getElementById ("calculate");
calculateButton.addEventListener ("click", function () {

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    // console.log({income , software, courses,internet});
    // console.table({income , software, courses,internet});
    if( income <= 0 || isNaN(income)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }

    if( software <= 0 || isNaN(software)){
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }

    if( courses <= 0 || isNaN(courses)){
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }

    if( internet <= 0 || isNaN(internet)){
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if( totalExpenses > income){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }
    // console.table({ balance, totalExpenses})

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    const balanceElement = document.getElementById('balance');
    balanceElement.innerHTML = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');

    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML= `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income :$${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses :$${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance :$${balance.toFixed(2)}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// add event listener for saving button
const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click', function () {
    // console.log("test");
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const savingPercentace = parseFloat(document.getElementById('savings').value);
    

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = ( savingPercentace * balance) /100;
    
    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingBalance = balance - savingAmount

    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance.toFixed(2);


})


// History Tab Functionality
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){

    historyTab.classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    historyTab.classList.remove("text-gray-600");

    assistantTab.classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    assistantTab.classList.add("text-gray-600");

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

assistantTab.addEventListener('click',function(){

    historyTab.classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    historyTab.classList.add("text-gray-600");

    assistantTab.classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    assistantTab.classList.remove("text-gray-600");

    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})

// Live Validation for input

document.getElementById('income').addEventListener("input",function(){
    const inputValue = parseFloat(document.getElementById('income').value);

    if(isNaN(inputValue) || inputValue <= 0){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
})

document.getElementById('software').addEventListener("input",function(){
const inputSoftware = parseFloat(document.getElementById('software').value);

if(isNaN(inputSoftware) || inputSoftware <= 0){
    document.getElementById('software-error').classList.remove('hidden');
    return;
}
})

document.getElementById('courses').addEventListener("input",function(){
const inputCourses = parseFloat(document.getElementById('courses').value);

if(isNaN(inputCourses) || inputCourses <= 0){
    document.getElementById('courses-error').classList.remove('hidden');
    return;
}
})

document.getElementById('internet').addEventListener("input",function(){
const inputInternet = parseFloat(document.getElementById('internet').value);

if(isNaN(inputInternet) || inputInternet <= 0){
    document.getElementById('internet-error').classList.remove('hidden');
    return;
}
})