const itemName = "userCount"
var visitCount = localStorage.getItem(itemName);

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem(itemName, visitCount);
} else {
  visitCount = 1;
  localStorage.setItem(itemName, 1);
}

window.addEventListener('keydown', function(e) {
  if (e.key === '~') {
    alert(visitCount);
  }
}, false)
