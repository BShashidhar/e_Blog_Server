var Users = require("../daos/userdao");

exports.createUser = function (req, res, next) {
  var user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    usertype: req.body.usertype,
    follow: req.body.follow,
    profilePicture: req.body.profilePicture,
  };

  Users.create(user, function (err, user) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "User created successfully",
    });
  });
};

exports.getUsers = function (req, res, next) {
  Users.get({}, function (err, users) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      users: users,
    });
  });
};

exports.getUser = function (req, res, next) {
  Users.get({ username: req.params.username }, function (err, users) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      users: users,
    });
  });
};

exports.updateUser = function (req, res, next) {
  var user = {
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    follow: req.body.follow,
    profilePicture: req.body.profilePicture,
  };
  Users.update({ _id: req.params.id }, user, function (err, user) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "User updated successfully",
    });
  });
};

exports.removeUser = function (req, res, next) {
  Users.delete({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "User deleted successfully",
    });
  });
};
