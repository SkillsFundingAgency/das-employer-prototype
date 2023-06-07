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
    if(req.session.data['add-paye'] == 'government-gateway'){
        res.redirect('government-gateway')
	} else if(req.session.data['add-paye'] == 'aorn'){
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
  if(req.session.data['confirm-permissions-check'] == 'yes'){
      res.redirect('account-setup-complete')
} else if(req.session.data['confirm-permissions-check'] == 'no'){
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
  if(req.session.data['confirm-permissions-check'] == 'yes'){
      res.redirect('account-setup-complete')
} else if(req.session.data['confirm-permissions-check'] == 'no'){
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
  if(req.session.data['details-correct'] == 'yes'){
      res.redirect('paye-scheme-added')
} else if(req.session.data['details-correct'] == 'no'){
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
  if(req.session.data['confirm-permissions-check'] == 'yes'){
      res.redirect('account-setup-complete')
} else if(req.session.data['confirm-permissions-check'] == 'no'){
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
  if(req.session.data['training-provider-invited-choice-check'] == 'yes'){
      res.redirect('select-permissions')
  } else if(req.session.data['training-provider-invited-choice-check'] == 'different'){
      res.redirect('enter-ukprn')
  } else if(req.session.data['training-provider-invited-choice-check'] == 'no'){
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
  if(req.session.data['details-correct'] == 'yes'){
      res.redirect('paye-scheme-added')
  } else if(req.session.data['details-correct'] == 'address'){
      res.redirect('address-wrong')
  } else if(req.session.data['details-correct'] == 'no'){
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
  if(req.session.data['confirm-permissions-check'] == 'yes'){
      res.redirect('account-setup-complete')
} else if(req.session.data['confirm-permissions-check'] == 'no'){
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
  if(req.session.data['training-provider-invited-choice-check'] == 'yes'){
      res.redirect('select-permissions')
  } else if(req.session.data['training-provider-invited-choice-check'] == 'different'){
      res.redirect('enter-ukprn')
  } else if(req.session.data['training-provider-invited-choice-check'] == 'no'){
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
  if(req.session.data['details-correct'] == 'yes'){
      res.redirect('paye-scheme-added')
  } else if(req.session.data['details-correct'] == 'address'){
      res.redirect('address-wrong')
  } else if(req.session.data['details-correct'] == 'no'){
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
   if(req.session.data['confirm-permissions-check'] == 'yes'){
       res.redirect('account-setup-complete')
 } else if(req.session.data['confirm-permissions-check'] == 'no'){
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
   if(req.session.data['training-provider-invited-choice-check'] == 'yes'){
       res.redirect('select-permissions')
   } else if(req.session.data['training-provider-invited-choice-check'] == 'different'){
       res.redirect('enter-ukprn')
   } else if(req.session.data['training-provider-invited-choice-check'] == 'no'){
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
   if(req.session.data['details-correct'] == 'yes'){
       res.redirect('paye-scheme-added')
   } else if(req.session.data['details-correct'] == 'address'){
       res.redirect('address-wrong')
   } else if(req.session.data['details-correct'] == 'no'){
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
	if(req.session.data['security-code'] == 'app'){
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
  if(req.session.data['confirm-permissions-check'] == 'yes'){
      res.redirect('account-setup-complete')
} else if(req.session.data['confirm-permissions-check'] == 'no'){
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
  if(req.session.data['training-provider-invited-choice-check'] == 'yes'){
      res.redirect('select-permissions')
  } else if(req.session.data['training-provider-invited-choice-check'] == 'different'){
      res.redirect('enter-ukprn')
  } else if(req.session.data['training-provider-invited-choice-check'] == 'no'){
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
  if(req.session.data['details-correct'] == 'yes'){
      res.redirect('paye-scheme-added')
  } else if(req.session.data['details-correct'] == 'address'){
      res.redirect('address-wrong')
  } else if(req.session.data['details-correct'] == 'no'){
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
 	if(req.session.data['security-code'] == 'app'){
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
   if(req.session.data['confirm-permissions-check'] == 'yes'){
       res.redirect('account-setup-complete')
 } else if(req.session.data['confirm-permissions-check'] == 'no'){
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
   if(req.session.data['training-provider-invited-choice-check'] == 'yes'){
       res.redirect('select-permissions')
   } else if(req.session.data['training-provider-invited-choice-check'] == 'different'){
       res.redirect('enter-ukprn')
   } else if(req.session.data['training-provider-invited-choice-check'] == 'no'){
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
   if(req.session.data['details-correct'] == 'yes'){
       res.redirect('paye-scheme-added')
   } else if(req.session.data['details-correct'] == 'address'){
       res.redirect('address-wrong')
   } else if(req.session.data['details-correct'] == 'no'){
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
 	if(req.session.data['security-code'] == 'app'){
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
   if(req.session.data['confirm-permissions-check'] == 'yes'){
       res.redirect('account-setup-complete')
 } else if(req.session.data['confirm-permissions-check'] == 'no'){
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
   if(req.session.data['training-provider-invited-choice-check'] == 'yes'){
       res.redirect('select-permissions')
   } else if(req.session.data['training-provider-invited-choice-check'] == 'different'){
       res.redirect('enter-ukprn')
   } else if(req.session.data['training-provider-invited-choice-check'] == 'no'){
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
   if(req.session.data['details-correct'] == 'yes'){
       res.redirect('paye-scheme-added')
   } else if(req.session.data['details-correct'] == 'address'){
       res.redirect('address-wrong')
   } else if(req.session.data['details-correct'] == 'no'){
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
	if(req.session.data['security-code'] == 'app'){
		res.redirect('/436/v9/1e-app')
	} else {
		res.redirect('/436/v9/1e-enter-number')
	}
 })

 router.post('/436/v9/add-paye-scheme', function (req, res) {
	 const editChoice = req.session.data['add-paye-scheme-check']

	 if (editChoice === 'government-gateway') {
		 res.redirect('government-gateway')
	 } else if (editChoice === 'aorn') {
		 res.redirect('enter-your-PAYE-scheme-details')
	 }
 });

 router.post('/436/v9/confirm-training-provider', function (req, res) {
	 const editChoice = req.session.data['confirm-training-provider-check']

	 if (editChoice === 'yes') {
		 res.redirect('select-permissions')
	 } else if (editChoice === 'no') {
		 res.redirect('enter-ukprn')
	 }
 });



 router.post('/436/v9/confirm-permissions-check', (req, res) => {
	 if(req.session.data['confirm-permissions-check'] == 'yes'){
			 res.redirect('account-setup-complete')
 } else if(req.session.data['confirm-permissions-check'] == 'no'){
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
		 res.redirect('account-name-change-confirm')
	 } else if (editChoice === 'no') {
		 res.redirect('task-list-4')
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
	 if(req.session.data['training-provider-invited-choice-check'] == 'yes'){
			 res.redirect('select-permissions')
	 } else if(req.session.data['training-provider-invited-choice-check'] == 'different'){
			 res.redirect('enter-ukprn')
	 } else if(req.session.data['training-provider-invited-choice-check'] == 'no'){
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
	 if(req.session.data['details-correct'] == 'yes'){
			 res.redirect('paye-scheme-added')
	 } else if(req.session.data['details-correct'] == 'address'){
			 res.redirect('address-wrong')
	 } else if(req.session.data['details-correct'] == 'no'){
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






module.exports = router
