var db = new PouchDB('my_database');
var userCountNumber = 0

db.get('userCount1').then(function(doc) {
  const usersCount = Number(doc.users) + 1
  userCountNumber = usersCount;

  db.put({
    _id: 'userCount1',
    users: usersCount.toString(),
    _rev: doc._rev,
  });
});

window.addEventListener('keydown', function(e) {
  if (e.key === 'm') {
    alert(userCountNumber);
  }
}, false)
