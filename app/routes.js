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


module.exports = router

