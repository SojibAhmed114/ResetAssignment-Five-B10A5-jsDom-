const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');
const donationSections = document.getElementById('donationSection');
const historySections = document.getElementById('history-section');

// get input value and text innerText common function start here  
function getInputValueUsingId(idName){
  const inputValues = document.getElementById(idName).value;
  const inputValueNumber = parseFloat(inputValues)
  return inputValueNumber;
}
function getInnerTextUsingById(idNames){
  const text = document.getElementById(idNames).innerText;
  const textNumber = parseFloat(text);
  return textNumber;
}
// get input value common function end here  

// nav button navigation start here 
document.getElementById('btn-navigation').addEventListener('click', function(){
  window.location.href = '../anotherPage/otherPage.html';
});
function btnNavigationHome (){
  window.location.replace('../index.html');
}
// button navigation section start here 
function showDelete(whenClick){
  donationSections.classList.add('hidden');
  historySections.classList.add('hidden')
  document.getElementById(whenClick).classList.remove('hidden');
};

donationBtn.addEventListener('click', function(){
  donationBtn.classList.add('bg-green-500');
  donationBtn.classList.remove('bg-gray-200');
  historyBtn.classList.add('bg-gray-200');
  historyBtn.classList.remove('bg-green-500');
  showDelete('donationSection');
});

historyBtn.addEventListener('click', function(){
  historyBtn.classList.add('bg-green-500');
  historyBtn.classList.remove('bg-gray-200')
  donationBtn.classList.add('bg-gray-200');
  donationBtn.classList.remove('bg-green-500');
  showDelete('history-section');
});
// button navigation section end here 

// donation section One worked start here 
document.getElementById('btn-donation-One').addEventListener('click', function(){
  const getValue = getInputValueUsingId('inputDonationOne');
  const donationBalance = getInnerTextUsingById('donationBalanceONe');
  const currentAccountBalance = getInnerTextUsingById('accountBalance');
  const getHeading = document.getElementById('first-heading').innerText;
  if (isNaN(getValue) || getValue < 0) {
    alert('invalid donation amount');
    return;
  }
  else if (currentAccountBalance < getValue) {
    alert('you have no insufficient balance');
    return;
  }
  const decreaseAccountBalance = currentAccountBalance - getValue;
  document.getElementById('accountBalance').innerText = decreaseAccountBalance;
  const balance = donationBalance + getValue;
  document.getElementById('donationBalanceONe').innerText = balance;

   //history section update 
  const date = new Date();
  const createSection = document.createElement('div');
  createSection.classList.add('px-5', 'border-2', 'rounded-xl', 'space-y-3', 'p-5', 'mx-5', 'my-8');
  createSection.innerHTML = `
  <h2 class="text-xl font-bold"> ${getValue} Taka is ${getHeading}</h2>
  <p class="text-gray-600">Date : ${date} </p>
  `
  document.getElementById('history-section').appendChild(createSection);
});

// donation section Two worked start here 
document.getElementById('btn-donation-Two').addEventListener('click', function(){
  const getValue = getInputValueUsingId('inputDonationTwo');
  const donationBalance = getInnerTextUsingById('donationBalanceTwo');
  const currentAccountBalance = getInnerTextUsingById('accountBalance');
  const getHeading = document.getElementById('second-heading').innerText;
  if (isNaN(getValue) || getValue < 0) {
    alert('invalid donation amount');
    return;
  }
  else if (currentAccountBalance < getValue) {
    alert('you have no insufficient balance');
    return;
  }
  const decreaseAccountBalance = currentAccountBalance - getValue;
  document.getElementById('accountBalance').innerText = decreaseAccountBalance;

  const balance = donationBalance + getValue;
  document.getElementById('donationBalanceTwo').innerText = balance;

   //history section update 
  const date = new Date();
  const createSection = document.createElement('div');
  createSection.classList.add('px-5', 'border-2', 'rounded-xl', 'space-y-3', 'p-5', 'mx-5', 'my-8');
  createSection.innerHTML = `
  <h2 class="text-xl font-bold"> ${getValue} Taka is ${getHeading}</h2>
  <p class="text-gray-600">Date : ${date} </p>
  `
  document.getElementById('history-section').appendChild(createSection);
});

// donation section Three worked start here 
document.getElementById('btn-donation-Three').addEventListener('click', function(){
  const getValue = getInputValueUsingId('inputDonationThree');
  const donationBalance = getInnerTextUsingById('donationBalanceThree');
  const currentAccountBalance = getInnerTextUsingById('accountBalance');
  const getHeading = document.getElementById('third-heading').innerText;
  if (isNaN(getValue) || getValue < 0) {
    alert('invalid donation amount');
    return;
  }
  else if (currentAccountBalance < getValue) {
    alert('you have no insufficient balance');
    return;
  }
  const decreaseAccountBalance = currentAccountBalance - getValue;
  document.getElementById('accountBalance').innerText = decreaseAccountBalance;

  const balance = donationBalance + getValue;
  document.getElementById('donationBalanceThree').innerText = balance;

  //history section update 
  const date = new Date();
  const createSection = document.createElement('div');
  createSection.classList.add('px-5', 'border-2', 'rounded-xl', 'space-y-3', 'p-5', 'mx-5', 'my-8');
  createSection.innerHTML = `
  <h2 class="text-xl font-bold"> ${getValue} Taka is ${getHeading}</h2>
  <p class="text-gray-600">Date : ${date} </p>
  `
  document.getElementById('history-section').appendChild(createSection);
});
