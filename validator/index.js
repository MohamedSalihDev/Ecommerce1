exports.userSigupValidator = (req, res) => {
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'email must be between 3 to  characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLenth({
            min: 4,
            max: 32
        })
    req.check('password', 'Password is required').notEmpty(
        req.check('password')
            .isLength({ min: 6 })
            .withMessage('Password must contain at least 6 characters')
            .matches(/\d/)
            .withMessage('Password must contain a number');
    const errors = req.validationErrors()
    if (errors) {
        const firstError = errors.map(errors => error.message)[0]
        return res.status(400).json({ error: firstError })

    }
    next();
}