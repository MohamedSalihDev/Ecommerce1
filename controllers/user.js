const user = require('../models/user')

exports.signup = (req, res) => {
    console.log('req.body', req.body)
    const user = new user(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            user
        });


    });
};


