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
function getInnerTextUsingById (idNames){
  const text = document.getElementById(idNames).innerText;
  const textNumber = parseFloat(text);
  return textNumber;
}
// get input value common function end here  

// button navigation section start here 
function showDelete(whenClick){
  donationSections.classList.add('hidden');
  historySections.classList.add('hidden')
  document.getElementById(whenClick).classList.remove('hidden');
}

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
});

// donation section Two worked start here 
document.getElementById('btn-donation-Two').addEventListener('click', function(){
  const getValue = getInputValueUsingId('inputDonationTwo');
  const donationBalance = getInnerTextUsingById('donationBalanceTwo');
  const currentAccountBalance = getInnerTextUsingById('accountBalance');
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
});
