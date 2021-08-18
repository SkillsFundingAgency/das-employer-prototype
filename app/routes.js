const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


//SAVED STANDARDS

router.post('/saved-standards/choose-provider', (req, res, next) => {
	if(req.session.data['foundProvider'] == 'true'){
		res.redirect('/saved-standards/choose-provider')
	} else {
		res.redirect('/saved-standards/advertise/selected-no')
	}
})


//START TERMS OF USE

router.post(`/334/optional/terms-of-use-branch`, function (req, res) {
    const termsOfUse = req.session.data['terms-of-use'];

    if (termsOfUse === 'read-now'
       ) {
        res.redirect(`/334/optional/updated-terms-and-conditions`);
    }
   else res.redirect(`/334/optional/select-account-with-banner`);
});

//END TERMS OF USE



//START password reset code

router.post(`/355/v1/reset-code`, function (req, res) {
    const correctPAssword = req.session.data['reset-code'];

    if (correctPAssword === 'abc123'
       ) {
        res.redirect(`/355/v1/new-password`);
    }
   else res.redirect(`/355/v1/invalid-code`);
});

//END password reset code

//START password reset code

router.post(`/355/v1/invalid-code`, function (req, res) {
    const correctPAssword = req.session.data['invalid-code'];

    if (correctPAssword === 'abc123'
       ) {
        res.redirect(`/355/v1/new-password`);
    }
   else res.redirect(`/355/v1/third-invalid-code`);
});

//END password reset code



//START change password

router.post(`/355/v1/change-password`, function (req, res) {
    const correctPAssword = req.session.data['change-password'];

    if (correctPAssword === 'abc123'
       ) {
        res.redirect(`/355/v1/sign-in`);
    }
   else res.redirect(`/355/v1/password-error-screen`);
});

//END change password


//START password reset code

router.post(`/355/v2/reset-code`, function (req, res) {
    const correctPAssword = req.session.data['reset-code'];

    if (correctPAssword === 'abc123'
       ) {
        res.redirect(`/355/v2/new-password`);
    }
   else res.redirect(`/355/v2/invalid-code`);
});

//END password reset code

//START password reset code

router.post(`/355/v2/invalid-code`, function (req, res) {
    const correctPAssword = req.session.data['invalid-code'];

    if (correctPAssword === 'abc123'
       ) {
        res.redirect(`/355/v2/new-password`);
    }
   else res.redirect(`/355/v2/third-invalid-code`);
});

//END password reset code



//START change password

router.post(`/355/v2/change-password`, function (req, res) {
    const correctPAssword = req.session.data['change-password'];

    if (correctPAssword === 'abc123'
       ) {
        res.redirect(`/355/v2/sign-in`);
    }
   else res.redirect(`/355/v2/password-error-screen`);
});

//END change password


module.exports = router

