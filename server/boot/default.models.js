module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  User.create([
    {name: "Rafael Barzotto", username: 'rafael', email: 'rafabarzotto@hotmail.com', password: 'qwe123', routes: ['/preco', '/teste', '/dash', '/naosei']},
    {name: "Leonardo dos Santos", username: 'leo', email: 'leodoima@hotmail.com', password: 'qwe123', routes: ['/users', '/teste', '/dash']},
    {name: "Marcelo Camillo", username: 'marcelo', email: 'marcelo@hotmail.com', password: 'qwe123', routes: ['/users', '/teste', '/dash']}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });
  });
};
