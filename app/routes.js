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

    if (correctPAssword === 'read-now'
       ) {
        res.redirect(`/334/optional/updated-terms-and-conditions`);
    }
   else res.redirect(`/334/optional/select-account-with-banner`);
});

//END password reset code

module.exports = router

