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

router.post(`/334/terms-of-use-branch`, function (req, res) {
    const termsOfUse = req.session.data['terms-of-use'];

    if (termsOfUse === 'read-now'
       ) {
        res.redirect(`/334/updated-terms-and-conditions`);
    }
   else res.redirect(`/334/select-account-with-banner`);
});

//END TERMS OF USE

module.exports = router

