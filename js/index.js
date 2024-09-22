//getting all the value

const income = parseFloat(document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById('internet').value);

// add event listener for calculate button
const calculateButton = document.getElementById ("calculate");
calculateButton.addEventListener ("click", function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    // console.log({income , software, courses,internet});
    // console.table({income , software, courses,internet});

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    // console.table({ balance, totalExpenses})

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    const balanceElement = document.getElementById('balance');
    balanceElement.innerHTML = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');
});


// add event listener for saving button
const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click', function () {
    // console.log("test");
    const savingPercentace = parseFloat(document.getElementById('savings').value);
    console.log(savingPercentace);

})