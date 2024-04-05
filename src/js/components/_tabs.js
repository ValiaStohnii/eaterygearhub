document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function() {
      openTab(event, this.dataset.tab);
    });
  }
});
  
function openTab(evt, tabName) {
  let i = 0;

  const tabcontent = document.getElementsByClassName("tab-content");
  const tablinks = document.querySelectorAll('.tab-link');

  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].classList.contains('active')) {
      tabcontent[i].classList.remove('active');
    }
  }

  for (i = 0; i < tablinks.length; i++) {
    if (tablinks[i].classList.contains('active')) {
      tablinks[i].classList.remove('active');
    }
  }

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}