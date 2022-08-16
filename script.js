const tabsBtn  = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
   item.addEventListener('click', function() {
      let cuurentBtn = item;
      let tabId = cuurentBtn.getAttribute('data-tab');
      let cuurentTab = document.querySelector(tabId);

      if( ! cuurentBtn.classList.contains('active') ) {
         tabsBtn.forEach(function(item) {
            item.classList.remove('active');
         });
   
         tabsItems.forEach(function(item) {
            item.classList.remove('active');
         });
   
         cuurentBtn.classList.add('active');
         cuurentTab.classList.add('active');
      };

   });
};

document.querySelector('.tabs__nav-btn').click();