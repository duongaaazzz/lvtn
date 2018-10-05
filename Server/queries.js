var promise = require('bluebird');
var options = {
    promiseLib: promise
}
var pgp = require('pg-promise')(options)
var connectString = 'postgres://postgres:1212@localhost:5432/yoloDatabase';
var db = pgp(connectString);

function getList(req, res, next) {
    db.any("select * from users")
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved list'
                });
        })
        .catch(function (err) {
            return next(err);
        })
}

function getOne(req, res, next) {
    db.any("select * from users where user_id ='"+req.params.id+"'")
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved list'
                });
        })
        .catch(function (err) {
            return next(err);
        })
}
function createUser(req, res, next) {
    db.none("INSERT INTO users(username, password, email, phone) VALUES (${username}, ${password}, ${email}, ${phone})", req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'successfuly created user'
                });
        })
        .catch(function (err) {
            return next(err);
        })
}
function editUserInfor(req, res, next) {
    db.none("UPDATE users SET username = ${username}, password = ${password}, email=${email}, phone=${phone}) where id = '"+req.params.id+"'", req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'successfuly update user infor'
                });
        })
        .catch(function (err) {
            return next(err);
        })
 }

function Delete(req, res, next) { }

function getEvents(req, res, next) {
    db.any("select * from events")
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved list'
                });
        })
        .catch(function (err) {
            return next(err);
        })
}

module.exports = {
    getList: getList,
    getOne: getOne,
    editUserInfor: editUserInfor,
    Delete: Delete,
    createUser: createUser,
    getEvents: getEvents,
}

