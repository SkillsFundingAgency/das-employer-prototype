//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

require('./routes/training-provider/v2.js');

//SAVED STANDARDS

router.post('/saved-standards/choose-provider', (req, res, next) => {
  if (req.session.data['foundProvider'] == 'true') {
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

//V1 ends


//V2 starts

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

//V2 ends

//V3 starts

//START password reset code

router.post(`/355/v3/reset-code`, function (req, res) {
  const correctPAssword = req.session.data['reset-code'];

  if (correctPAssword === 'abc123'
  ) {
    res.redirect(`/355/v3/new-password`);
  }
  else res.redirect(`/355/v3/invalid-code`);
});

//END password reset code

//START password reset code

router.post(`/355/v3/invalid-code`, function (req, res) {
  const correctPAssword = req.session.data['invalid-code'];

  if (correctPAssword === 'abc123'
  ) {
    res.redirect(`/355/v3/new-password`);
  }
  else res.redirect(`/355/v3/third-invalid-code`);
});

//END password reset code



//START change password

router.post(`/355/v3/change-password`, function (req, res) {
  const correctPAssword = req.session.data['change-password'];

  if (correctPAssword === 'abc123'
  ) {
    res.redirect(`/355/v3/sign-in`);
  }
  else res.redirect(`/355/v3/password-error-screen`);
});

//END change password


//START 411 - employer add PAYE scheme

router.post('/account-registration/411/add-paye', (req, res) => {
  if (req.session.data['add-paye'] == 'government-gateway') {
    res.redirect('government-gateway')
  } else if (req.session.data['add-paye'] == 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
})

//END 411 - employer add PAYE scheme


/* 416 starts */

router.post('/416/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list')
  }
});


router.post('/416/v2/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('agreement-accepted-no-task-list')
  } else if (editChoice === 'no') {
    res.redirect('task-list')
  }
});


router.post('/416/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});


router.post('/416/v2/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});


router.post('/416/confirm-permissions', function (req, res) {
  const editChoice = req.session.data['confirm-permissions-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions-granted')
  } else if (editChoice === 'no') {
    res.redirect('select-permissions')
  }
});

router.post('/416/v2/confirm-permissions', function (req, res) {
  const editChoice = req.session.data['confirm-permissions-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions-granted')
  } else if (editChoice === 'no') {
    res.redirect('select-permissions')
  }
});

/* 416 ends */



/* 436 starts */

router.post('/436/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/confirm-permissions', function (req, res) {
  const editChoice = req.session.data['confirm-permissions-check']

  if (editChoice === 'yes') {
    res.redirect('account-setup-complete')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-3')
  }
});


router.post('/436/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name')
  } else if (editChoice === 'no') {
    res.redirect('task-list-3')
  }
});


/* 436 ends */



/* 436 v2 starts */

router.post('/436/v2/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v2/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

/* router.post('/436/v2/confirm-permissions', function (req, res) {
  const editChoice = req.session.data['confirm-permissions-check']

  if (editChoice === 'yes') {
    res.redirect('account-setup-complete')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
}); */

router.post('/436/v2/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
})

router.post('/436/v2/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-5')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});


router.post('/436/v2/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-confirm')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});

router.post('/436/v2/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});


router.post('/436/v2/training-provider-choice', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('enter-ukprn')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


/* 436 v2 ends */


/* 436 v3 starts */

router.post('/436/v3/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v3/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

/* router.post('/436/v2/confirm-permissions', function (req, res) {
  const editChoice = req.session.data['confirm-permissions-check']

  if (editChoice === 'yes') {
    res.redirect('account-setup-complete')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
}); */

router.post('/436/v3/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v3/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v3/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});

router.post('/436/v3/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});


router.post('/436/v3/training-provider-choice', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v3/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v3/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v3/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v3/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v3/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('search-for-org')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v3/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v3 ends */




/* 436 v4 starts */

router.post('/436/v4/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v4/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

/* router.post('/436/v2/confirm-permissions', function (req, res) {
  const editChoice = req.session.data['confirm-permissions-check']

  if (editChoice === 'yes') {
    res.redirect('account-setup-complete')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
}); */

router.post('/436/v4/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v4/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v4/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-change-confirm')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});

router.post('/436/v4/account-name-change-confirm', function (req, res) {
  const editChoice = req.session.data['change-account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('change-account-name')
  }
});

router.post('/436/v4/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});





router.post('/436/v4/training-provider-invited-choice-check', (req, res) => {
  if (req.session.data['training-provider-invited-choice-check'] == 'yes') {
    res.redirect('select-permissions')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'different') {
    res.redirect('enter-ukprn')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});




router.post('/436/v4/training-provider-choice-check', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v4/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v4/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v4/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'address') {
    res.redirect('address-wrong')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v4/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v4/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('search-for-org')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v4/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v4 ends */




/* 436 v5 starts */

router.post('/436/v5/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v5/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});



router.post('/436/v5/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v5/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v5/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-change-confirm')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});

router.post('/436/v5/account-name-change-confirm', function (req, res) {
  const editChoice = req.session.data['change-account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('change-account-name')
  }
});

router.post('/436/v5/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});





router.post('/436/v5/training-provider-invited-choice-check', (req, res) => {
  if (req.session.data['training-provider-invited-choice-check'] == 'yes') {
    res.redirect('select-permissions')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'different') {
    res.redirect('enter-ukprn')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});




router.post('/436/v5/training-provider-choice-check', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v5/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v5/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v5/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'address') {
    res.redirect('address-wrong')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v5/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v5/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('search-for-org')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v5/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v5 ends */


/* 436 v5b starts */

router.post('/436/v5b/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v5b/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});



router.post('/436/v5b/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v5b/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v5b/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-change-confirm')
  } else if (editChoice === 'no') {
    res.redirect('change-confirm')
  }
});

router.post('/436/v5b/account-name-change-confirm', function (req, res) {
  const editChoice = req.session.data['change-account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('change-account-name')
  }
});

router.post('/436/v5b/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('change-confirm')
  } else if (editChoice === 'no') {
    res.redirect('change-confirm')
  }
});





router.post('/436/v5b/training-provider-invited-choice-check', (req, res) => {
  if (req.session.data['training-provider-invited-choice-check'] == 'yes') {
    res.redirect('select-permissions')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'different') {
    res.redirect('enter-ukprn')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});




router.post('/436/v5b/training-provider-choice-check', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v5b/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v5b/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v5b/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'address') {
    res.redirect('address-wrong')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v5b/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v5b/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('search-for-org')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v5b/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v5b ends */



/* 436 v6 starts */

router.post('/436/v6/select-security-code', (req, res, next) => {
  if (req.session.data['security-code'] == 'app') {
    res.redirect('/436/v6/1e-app')
  } else {
    res.redirect('/436/v6/1e-enter-number')
  }
})

router.post('/436/v6/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v6/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});



router.post('/436/v6/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v6/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v6/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-change-confirm')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});

router.post('/436/v6/account-name-change-confirm', function (req, res) {
  const editChoice = req.session.data['change-account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('change-account-name')
  }
});

router.post('/436/v6/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});





router.post('/436/v6/training-provider-invited-choice-check', (req, res) => {
  if (req.session.data['training-provider-invited-choice-check'] == 'yes') {
    res.redirect('select-permissions')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'different') {
    res.redirect('enter-ukprn')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});




router.post('/436/v6/training-provider-choice-check', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v6/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v6/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v6/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'address') {
    res.redirect('address-wrong')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v6/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v6/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('search-for-org')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v6/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v6 ends */


/* 436 v7 starts */

router.post('/436/v7/select-security-code', (req, res, next) => {
  if (req.session.data['security-code'] == 'app') {
    res.redirect('/436/v7/1e-app')
  } else {
    res.redirect('/436/v7/1e-enter-number')
  }
})

router.post('/436/v7/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v7/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});



router.post('/436/v7/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v7/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v7/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-change-confirm')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v7/account-name-change-confirm', function (req, res) {
  const editChoice = req.session.data['change-account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('change-account-name')
  }
});

router.post('/436/v7/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});





router.post('/436/v7/training-provider-invited-choice-check', (req, res) => {
  if (req.session.data['training-provider-invited-choice-check'] == 'yes') {
    res.redirect('select-permissions')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'different') {
    res.redirect('enter-ukprn')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});




router.post('/436/v7/training-provider-choice-check', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v7/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v7/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v7/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'address') {
    res.redirect('address-wrong')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v7/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v7/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('search-for-org')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v7/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v7 ends */

/* 436 v8 starts */

router.post('/436/v8/select-security-code', (req, res, next) => {
  if (req.session.data['security-code'] == 'app') {
    res.redirect('/436/v8/1e-app')
  } else {
    res.redirect('/436/v8/1e-enter-number')
  }
})

router.post('/436/v8/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v8/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});



router.post('/436/v8/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});

router.post('/436/v8/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v8/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-change-confirm')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});

router.post('/436/v8/account-name-change-confirm', function (req, res) {
  const editChoice = req.session.data['change-account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('change-account-name')
  }
});

router.post('/436/v8/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});





router.post('/436/v8/training-provider-invited-choice-check', (req, res) => {
  if (req.session.data['training-provider-invited-choice-check'] == 'yes') {
    res.redirect('select-permissions')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'different') {
    res.redirect('enter-ukprn')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});




router.post('/436/v8/training-provider-choice-check', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v8/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v8/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v8/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'address') {
    res.redirect('address-wrong')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v8/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v8/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('check-details')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v8/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v8 ends */

/* 436 v9 starts */

router.post('/436/v9/select-security-code', (req, res, next) => {
  if (req.session.data['security-code'] == 'app') {
    res.redirect('/436/v9/1e-app')
  } else {
    res.redirect('/436/v9/1e-enter-number')
  }
})

router.post('/436/v9/add-paye-scheme', function (req, res) {
  const editChoice = req.session.data['add-paye-scheme-check']

  if (editChoice === 'government-gateway') {
    res.redirect('government-gateway-sign-in')
  } else if (editChoice === 'aorn') {
    res.redirect('enter-your-PAYE-scheme-details')
  }
});

router.post('/436/v9/confirm-training-provider', function (req, res) {
  const editChoice = req.session.data['confirm-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-success')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});



router.post('/436/v9/confirm-permissions-check', (req, res) => {
  if (req.session.data['confirm-permissions-check'] == 'yes') {
    res.redirect('account-setup-complete')
  } else if (req.session.data['confirm-permissions-check'] == 'no') {
    res.redirect('account-setup-complete')
  }
});

router.post('/436/v9/employer-agreement', function (req, res) {
  const editChoice = req.session.data['employer-agreement-check']

  if (editChoice === 'yes') {
    res.redirect('employer-agreement-accepted')
  } else if (editChoice === 'no') {
    res.redirect('task-list-5-in-progress-step-4')
  }
});


router.post('/436/v9/change-account-name', function (req, res) {
  const editChoice = req.session.data['change-account-name-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-org')
  } else if (editChoice === 'no') {
    res.redirect('account-name-change-confirm')
  }
});

router.post('/436/v9/account-name-change-confirm', function (req, res) {
  const editChoice = req.session.data['change-account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('account-name-changed')
  } else if (editChoice === 'no') {
    res.redirect('change-account-name')
  }
});

router.post('/436/v9/account-name-confirm', function (req, res) {
  const editChoice = req.session.data['account-name-confirm-check']

  if (editChoice === 'yes') {
    res.redirect('task-list-4')
  } else if (editChoice === 'no') {
    res.redirect('task-list-4')
  }
});





router.post('/436/v9/training-provider-invited-choice-check', (req, res) => {
  if (req.session.data['training-provider-invited-choice-check'] == 'yes') {
    res.redirect('training-provider-success')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'different') {
    res.redirect('training-provider-info')
  } else if (req.session.data['training-provider-invited-choice-check'] == 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});




router.post('/436/v9/training-provider-choice-check', function (req, res) {
  const editChoice = req.session.data['training-provider-choice-check']

  if (editChoice === 'yes') {
    res.redirect('confirm-training-provider-invited')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete-no-tp')
  }
});


router.post('/436/v9/confirm-training-provider-invited', function (req, res) {
  const editChoice = req.session.data['confirm-invited-training-provider-check']

  if (editChoice === 'yes') {
    res.redirect('training-provider-permissions')
  } else if (editChoice === 'no') {
    res.redirect('enter-ukprn')
  }
});

router.post('/436/v9/add-paye-knockout', function (req, res) {
  const editChoice = req.session.data['pay-bill-check']

  if (editChoice === 'yes') {
    res.redirect('government-gateway')
  } else if (editChoice === 'not-yet') {
    res.redirect('government-gateway')
  } else if (editChoice === 'no') {
    res.redirect('add-paye-scheme-aorn')
  }
});





router.post('/436/v9/details-correct', (req, res) => {
  if (req.session.data['details-correct'] == 'yes') {
    res.redirect('paye-scheme-added')
  } else if (req.session.data['details-correct'] == 'address') {
    res.redirect('address-wrong')
  } else if (req.session.data['details-correct'] == 'no') {
    res.redirect('search-for-org')
  }
});




router.post('/436/v9/training-provider-permissions', function (req, res) {
  const editChoice = req.session.data['training-provider-access']

  if (editChoice === 'yes') {
    res.redirect('select-permissions')
  } else if (editChoice === 'no') {
    res.redirect('account-setup-complete')
  }
});


router.post('/436/v9/paye-uhp', function (req, res) {
  const editChoice = req.session.data['paye-uhp-what-next']

  if (editChoice === 'paye') {
    res.redirect('enter-your-PAYE-scheme-details')
  } else if (editChoice === 'search') {
    res.redirect('search-for-org')
  } else if (editChoice === 'helpdesk') {
    res.redirect('paye-uhp-help-desk')
  }
});


router.post('/436/v9/select-your-org-radios', function (req, res) {
  const editChoice = req.session.data['choose-org']

  if (editChoice === 'biscuit') {
    res.redirect('check-details-from-search')
  } else if (editChoice === 'not-listed') {
    res.redirect('paye-uhp')
  }
});

/* 436 v9 ends */



// Added additional routes to manage the training provider folder
router.post('/training-provider/v1/approvals/add/action/entry-method', function (req, res) {
  var addApprenticeDetails = req.session.data['add-apprentice-details']

  if (addApprenticeDetails == "csv-file") {
    res.redirect('/training-provider/v1/approvals/add/file-upload')
  }
  else if (addApprenticeDetails == "manually") {
    res.redirect('/training-provider/v1/approvals/add/select-journey')
  }
})

router.post('/training-provider/v1/approvals/add/action/select-journey', function (req, res) {
  var addApprenticeDetails2 = req.session.data['add-apprentice-details-2']

  if (addApprenticeDetails2 == "existing-cohort") {
    res.redirect('/training-provider/v1/approvals/choose-cohort')
  }
  else if (addApprenticeDetails2 == "new-cohort") {
    res.redirect('/training-provider/v1/approvals/add/select-employer')
  }
})

router.post('/training-provider/v1/approvals/add/action/confirm-employer', function (req, res) {
  var confirmEmployer = req.session.data['confirm-employer']

  if (confirmEmployer == "yes") {
    res.redirect('/training-provider/v1/approvals/add/select-course')
  }
  else {
    res.redirect('/training-provider/v1/approvals/add/select-employer')
  }
})

router.post('/training-provider/v1/approvals/action/recognise-prior-learning', function (req, res) {
  var priorLearning = req.session.data['prior-learning']
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (priorLearning == "yes") {
    res.redirect('/training-provider/v1/approvals/recognise-prior-learning-details')
  }
  else if (priorLearning == "no") {
    if (pilotProgram == "No") {
      res.redirect('/training-provider/v1/approvals/approve-details-non-pilot')
    }
    else {
      if (deliveryMethod == "portable-flexi-job") {
        res.redirect('/training-provider/v1/approvals/approve-details-pilot-pjf')
      }
      else {
        res.redirect('/training-provider/v1/approvals/approve-details-pilot-non-pjf')
      }
    }
  }
})
router.post('/training-provider/v1/approvals/action/recognise-prior-learning-details', function (req, res) {
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (pilotProgram == "No") {
    res.redirect('/training-provider/v1/approvals/approve-details-non-pilot')
  }
  else {
    if (deliveryMethod == "portable-flexi-job") {
      res.redirect('/training-provider/v1/approvals/approve-details-pilot-pjf')
    }
    else {
      res.redirect('/training-provider/v1/approvals/approve-details-pilot-non-pjf')
    }
  }
})

router.post('/training-provider/v1/approvals/add/action/personal-details', function (req, res) {
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (pilotProgram == "No") {
    res.redirect('/training-provider/v1/approvals/add/training-details-non-pilot')
  }
  else {
    if (deliveryMethod == "portable-flexi-job") {
      res.redirect('/training-provider/v1/approvals/add/training-details-pilot-pfj')
    }
    else {
      res.redirect('/training-provider/v1/approvals/add/training-details-pilot-non-pfj')
    }
  }
})


router.post('/training-provider/v1/change-employer/action/overlapping-training', function (req, res) {
  var stopDateAction = req.session.data['stop-date-action']

  if (stopDateAction == "stop-request") {
    res.redirect('/training-provider/v1/change-employer/stop-date-email')
  }
  else if (stopDateAction == "contact-prev-employer") {
    res.redirect('/training-provider/v1/change-employer/contact-employer')
  }
  else if (stopDateAction == "change-later") {
    res.redirect('/training-provider/v1/change-employer/manage-apprentices')
  }
})

router.post('/employer/v1/live/action/has-apprenticeship-stopped', function (req, res) {
  var stopAction = req.session.data['stop-action']

  if (stopAction == "yes-apprenticeship-stopped") {
    res.redirect('/employer/v1/live/date-apprenticeship-stopped')
  }
  else if (stopAction == "no-apprenticeship-not-stopped") {
    res.redirect('/employer/v1/live/confirm-apprenticeship-ongoing')
  }
})

router.post('/training-provider/v1/change-employer/action/overlapping-training-stopped', function (req, res) {
  var stopDateAction = req.session.data['stop-date-action-stopped']

  if (stopDateAction == "stop-request") {
    res.redirect('/training-provider/v1/change-employer/stop-date-email-stopped')
  }
  else if (stopDateAction == "change-later") {
    res.redirect('/training-provider/v1/change-employer/manage-apprentices')
  }
})

router.post('/employer/v1/live/action/made-redundant', function (req, res) {
  var stopAction = req.session.data['redundant']

  if (stopAction == "yes-redundant") {
    res.redirect('/employer/v1/live/confirm-stop-date-redundant')
  }
  else if (stopAction == "no-redundant") {
    res.redirect('/employer/v1/live/confirm-stop-date')
  }
})

router.post('/employer/v1/live/action/confirm-stop-date', function (req, res) {
  var stopAction = req.session.data['stop-apprentice-action']

  if (stopAction == "yes-apprentice-stopped") {
    res.redirect('/employer/v1/live/new-stop-date-confirmed')
  }
  else if (stopAction == "no-apprentice-not-stopped") {
    res.redirect('/employer/v1/live/apprentice-page')
  }
})

router.post('/employer/v1/stopped/action/confirm-apprentice-stop-date', function (req, res) {
  var stopAction = req.session.data['stop-date-action']

  if (stopAction == "yes-stop-date-correct") {
    res.redirect('/employer/v1/stopped/stop-date-confirmed')
  }
  else if (stopAction == "no-stop-date-incorrect") {
    res.redirect('/employer/v1/stopped/date-apprenticeship-stopped')
  }
})

router.post('/employer/v1/live/action/confirm-stop-date-redundant', function (req, res) {
  var stopAction = req.session.data['stop-apprentice-2-action']

  if (stopAction == "yes-apprentice-stopped") {
    res.redirect('/employer/v1/live/new-stop-date-confirmed-redundant')
  }
  else if (stopAction == "no-apprentice-not-stopped") {
    res.redirect('/employer/v1/live/apprentice-page')
  }
})


// Employer V1 Add Routes

router.post('/employer/v1/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider']

  if (useProvider == "No") {
    res.redirect('/employer/v1/add/provider-details')
  }
  else {
    res.redirect('/employer/v1/add/start-adding-apprentices')
  }
})

router.post('/employer/v1/add/action/start-adding-apprentices', function (req, res) {
  var whoIsAddingApprentices = req.session.data['WhoIsAddingApprentices']

  if (whoIsAddingApprentices == "Provider") {
    res.redirect('/employer/v1/add/message-for-training-provider')
  }
  else {
    res.redirect('/employer/v1/add/apprenticeship-training')
  }
})

router.post('/employer/v1/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v1/add/notify-training-provider')
  }
  else {
    res.redirect('/employer/v1/add/approved')
  }
})

router.post('/employer/v1/add/action/apprenticeship-funding-avilable', function (req, res) {
  var reserveFunding = req.session.data['reserveFunding']

  if (reserveFunding == "no") {
    res.redirect('/employer/v1/add/')
  }
  else {
    res.redirect('/employer/v1/add/apprenticeship-funding-successful')
  }
})

router.post('/employer/v1/add/action/start-adding-apprentices', function (req, res) {
  var whoIsAddingApprentices = req.session.data['WhoIsAddingApprentices']

  if (whoIsAddingApprentices == "Provider") {
    res.redirect('/employer/v1/add/message-for-training-provider')
  }
  else {
    res.redirect('/employer/v1/add/apprenticeship-training')
  }
})

router.post('/employer/v1/live/action/apprenticeship-training', function (req, res) {
  var apprenticeCourse = req.session.data['apprentice-course']

  if (apprenticeCourse == "yes") {
    res.redirect('/employer/v1/add/apprenticeship-training-start')
  }
  else if (apprenticeCourse == "no") {
    res.redirect('/employer/v1/add/FAT-page')
  }
})

// Employer V1 Add Journey 2 Routes


router.post('/employer/v1/add-2/action/apprenticeship-training', function (req, res) {
  var apprenticeshipTraining = req.session.data['apprenticeship-training']

  if (apprenticeshipTraining == "yes") {
    res.redirect('/employer/v1/add-2/chosen-training-provider')
  }
  else if (apprenticeshipTraining == "no") {
    res.redirect('/employer/v1/add-2/FAT-page')
  }
})

router.post('/employer/v1/add-2/action/chosen-training-provider', function (req, res) {
  var trainingProvider = req.session.data['training-provider']

  if (trainingProvider == "yes") {
    res.redirect('/employer/v1/add-2/apprenticeship-start')
  }
  else if (trainingProvider == "no") {
    res.redirect('/employer/v1/add-2/FAT-page-training-provider')
  }
})

router.post('/employer/v1/add-2/action/apprenticeship-start', function (req, res) {
  var trainingStart = req.session.data['training-start']

  if (trainingStart == "yes") {
    res.redirect('/employer/v1/add-2/apprenticeship-existing')
  }
  if (trainingStart == "no") {
    res.redirect('/employer/v1/add-2/apprenticeship-start-no')
  }
  else if (trainingStart == "unknown") {
    res.redirect('/employer/v1/add-2/apprenticeship-start-unknown')
  }
})

router.post('/employer/v1/add-2/action/apprenticeship-existing', function (req, res) {
  var existingEmployee = req.session.data['existing-employee']

  if (existingEmployee == "yes") {
    res.redirect('/employer/v1/add-2/set-up-existing-employee')
  }
  else if (existingEmployee == "no") {
    res.redirect('/employer/v1/add-2/set-up-new-employee')
  }
})

router.post('/employer/v1/add-2/action/apprenticeship-funding-available', function (req, res) {
  var reserveFunding = req.session.data['reserveFunding']

  if (reserveFunding == "yes") {
    res.redirect('/employer/v1/add-2/apprenticeship-funding-successful')
  }
  else if (reserveFunding == "no") {
    res.redirect('/employer/v1/add-2/index')
  }
})

router.post('/employer/v1/add-2/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider']

  if (useProvider == "No") {
    res.redirect('/employer/v1/add-2/provider-details')
  }
  else {
    res.redirect('/employer/v1/add-2/start-adding-apprentices')
  }
})

router.post('/employer/v1/add-2/action/start-adding-apprentices', function (req, res) {
  var whoIsAddingApprentices = req.session.data['WhoIsAddingApprentices']

  if (whoIsAddingApprentices == "Provider") {
    res.redirect('/employer/v1/add-2/message-for-training-provider')
  }
  else {
    res.redirect('/employer/v1/add-2/select-standard')
  }
})

router.post('/employer/v1/add-2/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v1/add-2/notify-training-provider')
  }
  else {
    res.redirect('/employer/v1/add-2/approved')
  }
})

// Employer V2 - Employer initiates journey  Routes

router.post('/employer/v2/employer-adds/employer-add-or-TP-add', function (req, res) {
  var whoAdds = req.session.data['who-adds-action']

  if (whoAdds == "yes-add") {
    res.redirect('/employer/v2/employer-adds/add-new-apprentice')
  }
  else if (whoAdds == "no-request") {
    res.redirect('/employer/v2/employer-adds/add-training-provider-2')
  }
})

// Employer V3 - Employer initiates journey  Routes

router.post('/employer/v3/enhanced/employer-add-or-TP-add', function (req, res) {
  var whoAdds = req.session.data['who-adds-action']

  if (whoAdds == "yes-add") {
    res.redirect('/employer/v3/enhanced/request-sent-to-training-provider')
  }
  else if (whoAdds == "no-request") {
    res.redirect('/employer/v3/enhanced/successful-candidates')
  }
})


// Employer V5 - Employer initiates journey  Routes



router.post('/employer/v5/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v5/add/provider-details');
  } else {
    res.redirect('/employer/v5/add/start-adding-apprentices');
  }
});

router.post('/employer/v5/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where user will add apprentice details
    res.redirect('/employer/v5/add/successful-applicants');
  } else if (selection === "No") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v5/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v5/add/action/start-adding-apprentices'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v5/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v5/add/notification-sent')
  }
  else {
    res.redirect('/employer/v5/add/apprentice-sent')
  }
})

// Employer V6 - Employer initiates journey  Routes

router.post('/employer/v6/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v6/add/provider-details');
  } else {
    res.redirect('/employer/v6/add/start-adding-apprentices');
  }
});

router.post('/employer/v6/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where user will add apprentice details
    res.redirect('/employer/v6/add/successful-applicants');
  } else if (selection === "No") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v6/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v6/add/action/start-adding-apprentices'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v6/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v6/add/notification-sent')
  }
  else {
    res.redirect('/employer/v6/add/apprentice-sent')
  }
})



// Employer V7 - Employer initiates journey  Routes

router.post('/employer/v7/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v7/add/provider-details');
  } else {
    res.redirect('/employer/v7/add/start-adding-apprentices');
  }
});

router.post('/employer/v7/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where user will add apprentice details
    res.redirect('/employer/v7/add/apprenticeship-training-course');
  } else if (selection === "No") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v7/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v7/add/start-adding-apprentices'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v7/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v7/add/index')
  }
  else {
    res.redirect('/employer/v7/add/apprentice-sent')
  }
})

router.post('/employer/v7/add/action/reserve-funding-info', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where user will add reservation
    res.redirect('/employer/v7/add/reservation-details');
  } else if (selection === "No") {
    // Redirect to page where user doesn't know the details for a reservation
    res.redirect('/employer/v7/add/no-details-reservation');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v7/add/action/reserve-funding-info'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v7/add/action/confirm-reservation', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where request to training provider is sent
    res.redirect('/employer/v7/add/apprentice-request-sent');
  } else if (selection === "No") {
    // Redirect to page where user doesn't know the details for a reservation
    res.redirect('/employer/v7/add/reservation-details-2');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v7/add/action/confirm-reservation'); // Redirect to form page again if necessary
  }
});

// Employer V8 - Reservation journey

router.post('/employer/v8/reservation/action/apprenticeship-training', function (req, res) {
  var apprenticeCourse = req.session.data['apprentice-course']

  if (apprenticeCourse == "yes") {
    res.redirect('/employer/v8/reservation/apprenticeship-training-start')
  }
  else if (apprenticeCourse == "no") {
    res.redirect('/employer/v8/reservation/FAT-page')
  }
})

router.post('/employer/v8/reservation/action/apprenticeship-funding-avilable', function (req, res) {
  var reserveFunding = req.session.data['reserveFunding']

  if (reserveFunding == "no") {
    res.redirect('/employer/v8/reservation/index')
  }
  else {
    res.redirect('/employer/v8/reservation/apprenticeship-funding-successful')
  }
})


// Employer V8 - Employer initiates journey  Routes

router.post('/employer/v8/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v8/add/provider-details');
  } else {
    res.redirect('/employer/v8/add/start-adding-apprentices');
  }
});

router.post('/employer/v8/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where user will add apprentice details
    res.redirect('/employer/v8/add/apprentice-details');
  } else if (selection === "No") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v8/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v8/add/action/start-adding-apprentices'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v8/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v8/add/index')
  }
  else {
    res.redirect('/employer/v8/add/apprentice-sent')
  }
})

router.post('/employer/v8/add/action/confirm-funding', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where request to training provider is sent
    res.redirect('/employer/v8/add/apprentice-request-sent');
  } else if (selection === "No") {
    // Redirect to page where user doesn't know the details for a reservation
    res.redirect('/employer/v8/add/funding-existing');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v7/add/action/confirm-reservation'); // Redirect to form page again if necessary
  }
});


// Employer V9 - Employer initiates journey  Routes

router.post('/employer/v9/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v9/add/provider-details');
  } else {
    res.redirect('/employer/v9/add/start-adding-apprentices');
  }
});

router.post('/employer/v9/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where user will add apprentice details
    res.redirect('/employer/v9/add/apprenticeship-training-course');
  } else if (selection === "No") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v9/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v9/add/action/start-adding-apprentices'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v9/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v9/add/index')
  }
  else {
    res.redirect('/employer/v9/add/apprentice-sent')
  }
})

// Employer V9 - Employer initiates journey  Routes

router.post('/employer/v10/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v10/add/provider-details');
  } else {
    res.redirect('/employer/v10/add/start-adding-apprentices');
  }
});

router.post('/employer/v10/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {
    // Redirect to page where user will add apprentice details
    res.redirect('/employer/v10/add/apprenticeship-training-course');
  } else if (selection === "No") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v10/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v10/add/action/start-adding-apprentices'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v10/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v10/add/index')
  }
  else {
    res.redirect('/employer/v10/add/apprentice-sent')
  }
})


// Employer V11 - Employer initiates journey  Routes

router.post('/employer/v11/add/action/funding-existing', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Connection") {
    // Redirect to page where user will add apprentice details
    res.redirect('/employer/v11/add/select-transfer-connection');
  } else if (selection === "Levy") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v11/add/select-levy-transfer');
  } else if (selection === "Reserved") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v11/add/select-reservation');
  } else if (selection === "New") {
    // Redirect to page where user wants training provider to add apprentice details
    res.redirect('/employer/v11/add/provider-details-2');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v11/add/action/funding-existing'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v11/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v11/add/provider-details');
  } else {
    res.redirect('/employer/v11/add/start-adding-apprentices');
  }
});

router.post('/employer/v11/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {

    res.redirect('/employer/v11/add/apprenticeship-training-course');
  } else if (selection === "No") {

    res.redirect('/employer/v11/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v11/add/action/apprenticeship-training-course'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v11/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v11/add/index')
  }
  else {
    res.redirect('/employer/v11/add/apprentice-sent')
  }
})


// TP V3 - 1st proto for ILR Routes

router.post('/employer/v12/add/action/funding-existing', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Connection") {

    res.redirect('/employer/v12/add/select-transfer-connection');
  } else if (selection === "Levy") {

    res.redirect('/employer/v12/add/select-levy-transfer');
  } else if (selection === "New") {

    res.redirect('/employer/v12/add/provider-details-2');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v12/add/action/funding-existing'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v12/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider'];

  if (useProvider === "No") {
    res.redirect('/employer/v12/add/provider-details');
  } else {
    res.redirect('/employer/v12/add/start-adding-apprentices');
  }
});

router.post('/employer/v12/add/action/start-adding-apprentices', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Yes") {

    res.redirect('/employer/v12/add/successful-applicants');
  } else if (selection === "No") {

    res.redirect('/employer/v12/add/apprentice-request-sent');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v11/add/action/apprenticeship-training-course'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v12/add/action/approve-details', function (req, res) {
  var selection = req.session.data['selection']

  if (selection == "Send") {
    res.redirect('/employer/v12/add/index')
  }
  else {
    res.redirect('/employer/v12/add/apprentice-sent')
  }
});


router.post('/training-provider/v3/approvals/add/action/entry-method', function (req, res) {
  var addApprenticeDetails = req.session.data['add-apprentice-details']

  if (addApprenticeDetails == "csv-file") {
    res.redirect('/training-provider/v3/approvals/add/file-upload')
  }
  else if (addApprenticeDetails == "manually") {
    res.redirect('/training-provider/v3/approvals/add/select-journey')
  }
  else if (addApprenticeDetails == "ILR") {
    res.redirect('/training-provider/v3/approvals/add/select-journey')
  }
});

router.post('/training-provider/v3/approvals/add/action/select-journey', function (req, res) {
  var addApprenticeDetails2 = req.session.data['add-apprentice-details-2']

  if (addApprenticeDetails2 == "existing-cohort") {
    res.redirect('/training-provider/v3/approvals/choose-cohort')
  }
  else if (addApprenticeDetails2 == "new-cohort") {
    res.redirect('/training-provider/v3/approvals/add/select-employer')
  }
})

router.post('/training-provider/v3/approvals/add/action/confirm-employer', function (req, res) {
  var confirmEmployer = req.session.data['confirm-employer']

  if (confirmEmployer == "yes") {
    res.redirect('/training-provider/v3/approvals/add/select-apprentice-ILR')
  }
  else {
    res.redirect('/training-provider/v3/approvals/add/select-employer')
  }
})

router.post('/training-provider/v3/approvals/action/recognise-prior-learning', function (req, res) {
  var priorLearning = req.session.data['prior-learning']
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (priorLearning == "yes") {
    res.redirect('/training-provider/v3/approvals/recognise-prior-learning-details')
  }
  else if (priorLearning == "no") {
    if (pilotProgram == "No") {
      res.redirect('/training-provider/v3/approvals/approve-details')
    }
    else {
      if (deliveryMethod == "portable-flexi-job") {
        res.redirect('/training-provider/v3/approvals/approve-details')
      }
      else {
        res.redirect('/training-provider/v3/approvals/approve-details')
      }
    }
  }
})

// TP V4 - 2nd iteration proto for ILR

router.post('/training-provider/v4/approvals/add/action/select-journey', function (req, res) {
  var addApprenticeDetails2 = req.session.data['add-apprentice-details-2']

  if (addApprenticeDetails2 == "existing-cohort") {
    res.redirect('/training-provider/v4/approvals/choose-cohort')
  }
  else if (addApprenticeDetails2 == "new-cohort") {
    res.redirect('/training-provider/v4/approvals/add/select-employer')
  }
})

router.post('/training-provider/v4/approvals/add/action/confirm-employer', function (req, res) {
  var confirmEmployer = req.session.data['confirm-employer']

  if (confirmEmployer == "yes") {
    res.redirect('/training-provider/v4/approvals/add/select-apprentice-ILR')
  }
  else {
    res.redirect('/training-provider/v4/approvals/add/select-employer')
  }
})

router.post('/training-provider/v4/approvals/add/action/confirm-employer', function (req, res) {
  var confirmEmployer = req.session.data['confirm-employer']

  if (confirmEmployer == "yes") {
    res.redirect('/training-provider/v4/approvals/add/select-apprentice-ILR')
  }
  else {
    res.redirect('/training-provider/v4/approvals/add/select-employer')
  }
})

// Employer V14 - 2nd iteration proto for ILR

router.post('/employer/v14/training-provider-adds/action/review-details', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v14/training-provider-adds/approved')
  }
  else {
    res.redirect('/employer/v14/training-provider-adds/request-changes')
  }
})

router.post('/employer/v15/training-provider-adds/action/review-details', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v15/training-provider-adds/approved')
  }
  else {
    res.redirect('/employer/v15/training-provider-adds/request-changes')
  }
})

router.post('/employer/v14/training-provider-adds/action/select-funding', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Connection") {

    res.redirect('/employer/v14/training-provider-adds/select-transfer-connection');
  } else if (selection === "Levy") {

    res.redirect('/employer/v14/training-provider-adds/select-levy-transfer');
  } else if (selection === "Current") {

    res.redirect('/employer/v14/training-provider-adds/review-details-transfer');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v14/training-provider-adds/select-funding'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v14/training-provider-adds/action/select-levy-transfer', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Barry") {

    res.redirect('/employer/v14/training-provider-adds/review-details-transfer-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v14/training-provider-adds/review-details-transfer-2');

  }
});

router.post('/employer/v14/training-provider-adds/action/review-details-transfer-2', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v14/training-provider-adds/approved-transfer')
  }
  else {
    res.redirect('/employer/v14/training-provider-adds/request-changes-transfer')
  }
})

router.post('/employer/v14/training-provider-adds/action/select-transfer-connection', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Bristol") {

    res.redirect('/employer/v14/training-provider-adds/review-details-connection-1');
  } else if (selection === "Birm") {

    res.redirect('/employer/v14/training-provider-adds/review-details-connection-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v14/training-provider-adds/review-details-connection-1');

  }
});

router.post('/employer/v14/training-provider-adds/action/review-details-connection-1', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v14/training-provider-adds/approved-connection')
  }
  else {
    res.redirect('/employer/v14/training-provider-adds/request-changes-connection')
  }
})

router.post('/employer/v14/training-provider-adds/action/review-details-max-funding', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v14/training-provider-adds/approved-max-funding')
  }
  else {
    res.redirect('/employer/v14/training-provider-adds/request-changes-max-funding')
  }
})

// Employer V16 Levy - 2nd iteration proto for ILR

router.post('/employer/v16/training-provider-adds/action/review-details', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v16/training-provider-adds/approved')
  }
  else {
    res.redirect('/employer/v16/training-provider-adds/request-changes')
  }
})

router.post('/employer/v16/training-provider-adds/action/select-funding', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Connection") {

    res.redirect('/employer/v16/training-provider-adds/select-transfer-connection');
  } else if (selection === "Levy") {

    res.redirect('/employer/v16/training-provider-adds/select-levy-transfer');
  } else if (selection === "Current") {

    res.redirect('/employer/v16/training-provider-adds/review-details-transfer');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v16/training-provider-adds/select-funding'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v16/training-provider-adds/action/select-levy-transfer', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Barry") {

    res.redirect('/employer/v16/training-provider-adds/review-details-transfer-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v16/training-provider-adds/review-details-transfer-2');

  }
});

router.post('/employer/v16/training-provider-adds/action/select-transfer-connection', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Bristol") {

    res.redirect('/employer/v16/training-provider-adds/review-details-connection-1');
  } else if (selection === "Birm") {

    res.redirect('/employer/v16/training-provider-adds/review-details-connection-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v16/training-provider-adds/review-details-connection-1');

  }
});

router.post('/employer/v16/training-provider-adds/action/review-details-connection-1', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v16/training-provider-adds/approved-connection')
  }
  else {
    res.redirect('/employer/v16/training-provider-adds/request-changes-connection')
  }
})

router.post('/employer/v16/training-provider-adds/action/review-details-transfer-2', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v16/training-provider-adds/approved-transfer')
  }
  else {
    res.redirect('/employer/v16/training-provider-adds/request-changes-transfer')
  }
})

router.post('/employer/v16/training-provider-adds/action/review-details-max-funding', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v16/training-provider-adds/approved-max-funding')
  }
  else {
    res.redirect('/employer/v16/training-provider-adds/request-changes-max-funding')
  }
})

router.post('/employer/v16/training-provider-adds/action/review-details', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v16/training-provider-adds/approved-transfer')
  }
  else {
    res.redirect('/employer/v16/training-provider-adds/request-changes-transfer')
  }
})

// Employer V16 Non-levy - 2nd iteration proto for ILR

router.post('/employer/v17/training-provider-adds/action/review-details', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v17/training-provider-adds/approved')
  }
  else {
    res.redirect('/employer/v17/training-provider-adds/request-changes')
  }
})

router.post('/employer/v17/training-provider-adds/action/select-funding', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Connection") {

    res.redirect('/employer/v17/training-provider-adds/select-transfer-connection');
  } else if (selection === "Levy") {

    res.redirect('/employer/v17/training-provider-adds/select-levy-transfer');
  } else if (selection === "Current") {

    res.redirect('/employer/v17/training-provider-adds/review-details-transfer');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v17/training-provider-adds/select-funding'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v17/training-provider-adds/action/select-levy-transfer', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Barry") {

    res.redirect('/employer/v17/training-provider-adds/review-details-transfer-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v17/training-provider-adds/review-details-transfer-2');

  }
});

router.post('/employer/v17/training-provider-adds/action/select-transfer-connection', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Bristol") {

    res.redirect('/employer/v17/training-provider-adds/review-details-connection-1');
  } else if (selection === "Birm") {

    res.redirect('/employer/v17/training-provider-adds/review-details-connection-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v17/training-provider-adds/review-details-connection-1');

  }
});

router.post('/employer/v17/training-provider-adds/action/review-details-transfer-2', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v17/training-provider-adds/approved-transfer')
  }
  else {
    res.redirect('/employer/v17/training-provider-adds/request-changes-transfer')
  }
})

router.post('/employer/v17/training-provider-adds/action/review-details-connection-1', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v17/training-provider-adds/approved-connection')
  }
  else {
    res.redirect('/employer/v17/training-provider-adds/request-changes-connection')
  }
})

router.post('/employer/v17/training-provider-adds/action/review-details-max-funding', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v17/training-provider-adds/approved-max-funding')
  }
  else {
    res.redirect('/employer/v17/training-provider-adds/request-changes-max-funding')
  }
})

// Training provider V5 Levy - Employer provider

router.post('/training-provider/v5/approvals/add/action/select-journey', function (req, res) {
  var addApprenticeDetails2 = req.session.data['add-apprentice-details-2']

  if (addApprenticeDetails2 == "existing-cohort") {
    res.redirect('/training-provider/v5/approvals/choose-cohort')
  }
  else if (addApprenticeDetails2 == "new-cohort") {
    res.redirect('/training-provider/v5/approvals/add/select-employer')
  }
})

router.post('/training-provider/v5/approvals/add/action/confirm-employer', function (req, res) {
  var confirmEmployer = req.session.data['confirm-employer']

  if (confirmEmployer == "yes") {
    res.redirect('/training-provider/v5/approvals/add/select-apprentice-ILR')
  }
  else {
    res.redirect('/training-provider/v5/approvals/add/select-employer')
  }
})

router.post('/training-provider/v5/approvals/action/recognise-prior-learning', function (req, res) {
  var priorLearning = req.session.data['prior-learning']
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (priorLearning == "yes") {
    res.redirect('/training-provider/v5/approvals/recognise-prior-learning-details')
  }
  else if (priorLearning == "no") {
    if (pilotProgram == "No") {
      res.redirect('/training-provider/v5/approvals/recognise-prior-learning-details')
    }
    else {
      if (deliveryMethod == "portable-flexi-job") {
        res.redirect('/training-provider/v5/approvals/approve-details')
      }
      else {
        res.redirect('/training-provider/v5/approvals/approve-details')
      }
    }
  }
})

router.post('/training-provider/v5/approvals/action/recognise-prior-learning-2', function (req, res) {
  var priorLearning = req.session.data['prior-learning']
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (priorLearning == "yes") {
    res.redirect('/training-provider/v5/approvals/recognise-prior-learning-details')
  }
  else if (priorLearning == "no") {
    if (pilotProgram == "No") {
      res.redirect('/training-provider/v5/approvals/check-details-bernard')
    }
    else {
      if (deliveryMethod == "portable-flexi-job") {
        res.redirect('/training-provider/v5/approvals/check-details-bernard')
      }
      else {
        res.redirect('/training-provider/v5/approvals/check-details-bernard')
      }
    }
  }
})

router.post('/training-provider/v5/approvals/add/action/entry-method', function (req, res) {
  var addApprenticeDetails = req.session.data['add-apprentice-details']

  if (addApprenticeDetails == "csv-file") {
    res.redirect('/training-provider/v5/approvals/add/file-upload')
  }
  else if (addApprenticeDetails == "manually") {
    res.redirect('/training-provider/v5/approvals/add/select-journey')
  }
  else if (addApprenticeDetails == "ILR") {
    res.redirect('/training-provider/v5/approvals/add/select-journey')
  }
});

// Employer v18 Levy & non-levy 

router.post('/employer/v18/training-provider-adds/action/remove-alan', function (req, res) {
  var approveDetails = req.session.data['remove-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v18/training-provider-adds/review-details-2')
  }
  else {
    res.redirect('/employer/v18/training-provider-adds/review-details')
  }
})

router.post('/employer/v18/training-provider-adds/action/review-details-2', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v18/training-provider-adds/approved')
  }
  else {
    res.redirect('/employer/v18/training-provider-adds/request-changes')
  }
})

router.post('/employer/v18/training-provider-adds/action/select-funding', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Connection") {

    res.redirect('/employer/v18/training-provider-adds/select-transfer-connection');
  } else if (selection === "Levy") {

    res.redirect('/employer/v18/training-provider-adds/select-levy-transfer');
  } else if (selection === "Current") {

    res.redirect('/employer/v18/training-provider-adds/review-details-transfer');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v18/training-provider-adds/select-funding'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v18/training-provider-adds/action/select-transfer-connection', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Bristol") {

    res.redirect('/employer/v18/training-provider-adds/review-details-connection-1');
  } else if (selection === "Birm") {

    res.redirect('/employer/v18/training-provider-adds/review-details-connection-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v18/training-provider-adds/review-details-connection-1');

  }
});

router.post('/employer/v18/training-provider-adds/action/review-details-connection-1', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v18/training-provider-adds/approved-connection')
  }
  else {
    res.redirect('/employer/v18/training-provider-adds/request-changes-connection')
  }
})

// Employer v19 Non-levy 

router.post('/employer/v19/training-provider-adds/action/remove-alan', function (req, res) {
  var approveDetails = req.session.data['remove-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v19/training-provider-adds/review-details-2')
  }
  else {
    res.redirect('/employer/v19/training-provider-adds/review-details')
  }
})

router.post('/employer/v19/training-provider-adds/action/review-details-2', function (req, res) {
  var approveDetails = req.session.data['approve-details']

  if (approveDetails == "yes") {
    res.redirect('/employer/v19/training-provider-adds/approved')
  }
  else {
    res.redirect('/employer/v19/training-provider-adds/request-changes')
  }
})

router.post('/employer/v19/training-provider-adds/action/select-funding', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Connection") {

    res.redirect('/employer/v19/training-provider-adds/select-transfer-connection');
  } else if (selection === "Levy") {

    res.redirect('/employer/v19/training-provider-adds/select-levy-transfer');
  } else if (selection === "Current") {

    res.redirect('/employer/v19/training-provider-adds/review-details-transfer');
  } else {
    // Handle any other scenario if needed
    res.redirect('/employer/v19/training-provider-adds/select-funding'); // Redirect to form page again if necessary
  }
});

router.post('/employer/v19/training-provider-adds/action/select-levy-transfer', function (req, res) {
  var selection = req.session.data['selection'];

  if (selection === "Barry") {

    res.redirect('/employer/v19/training-provider-adds/review-details-transfer-1');
  } else if (selection === "Cov") {

    res.redirect('/employer/v19/training-provider-adds/review-details-transfer-2');

  }
});