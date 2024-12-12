const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');
const donationSections = document.getElementById('donationSection');
const historySections = document.getElementById('history-section');


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