function openTab() {
  processTabContent();
  processTabBar();
  processCourusel();
}

function processTabContent() {
  const currentTab = document.querySelector('.tab-content:not([style*="display: none"])');
  if (currentTab) {
    scrollPositions[currentTab.id] = {
      top: window.scrollY,
      left: window.scrollX,
    };
  }

  let tabs = document.getElementsByClassName("tab-content");
  for (let tab of tabs) {
    tab.style.display = "none";
  }
  let openedTab = document.getElementById(tabName);
  openedTab.style.display = "block";

  // Восстанавливаем позицию прокрутки для новой вкладки
  const savedPosition = scrollPositions[openedTab.id] || { top: 0, left: 0 };
  window.scrollTo({
    top: savedPosition.top,
    left: savedPosition.left,
    behavior: "instant", // Плавность отключена, можно поставить 'smooth'
  });
}

function processTabBar() {
  let tName = 'tab-' + tabName;
  let tabBars = document.getElementById('tab-bar').children;
  for (let tabBar of tabBars) {
    tabBar.classList.remove("w3-white");
  }
  document.getElementById(tName).classList.add("w3-white");
}

// Устанавливаем начальную вкладку
openTab("home");

function processCourusel() {
  clearTimeout(timeoutId);
  var allImages = document.getElementsByClassName("mySlides");
  if (imageIndex !== -1) allImages[imageIndex].style.display = "none";  
  imageIndex++;
  if (imageIndex === allImages.length) {imageIndex = 0}    
  allImages[imageIndex].style.display = "block";  

  timeoutId = setTimeout(processCourusel, 4000);    
}
