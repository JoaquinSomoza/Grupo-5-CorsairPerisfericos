const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function guestOnlyMid(req, res, next) {
    const user = users.find(user => user.email === req.session.user);
    if (user == undefined) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = guestOnlyMid;

