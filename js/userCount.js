var db = new PouchDB('my_database');
const docName = "userCount2"
var userCountNumber = 0

db.put({
  _id: docName,
  users: '0'
})

db.get(docName).then(function(doc) {
  const usersCount = Number(doc.users) + 1
  userCountNumber = usersCount;

  db.put({
    _id: docName,
    users: usersCount.toString(),
    _rev: doc._rev,
  });
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 77) {
    alert(userCountNumber);
  }
}, false);
