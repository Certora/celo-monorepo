rule no_validate_delegation_when_validating {
	env _e;
	env eF;
	
	address account = eF.msg.sender;
	bool _isAccountValidating = sinvoke _isValidating(_e,account);

	calldataarg arg;
	invoke delegateValidating(eF,arg);
	bool succeededDelegate = !lastReverted;
	
	assert _isAccountValidating => !succeededDelegate, "Account successfully delegated validating even though it is already a validator";
} 

rule no_vote_delegation_when_voting {
	env _e;
	env eF;
	
	address account = eF.msg.sender;
	bool _isAccountVoting = sinvoke isVoting(_e,account);

	calldataarg arg;
	invoke delegateVoting(eF,arg);
	bool succeededDelegate = !lastReverted;
	
	assert _isAccountVoting => !succeededDelegate, "Account successfully delegated voting even though it is already a voter";
} 

rule no_weight_changing_when_voting(method f) {
	env _e;
	uint256 _accountWeight = sinvoke _weight(_e,a);
	
	bool isAccountVoting = sinvoke isVoting(_e,account);
	
	env eF;
	calldataarg arg;
	invoke f(eF,arg);
	
	env e_;
	uint256 accountWeight_ = sinvoke _weight(e_,a);
	
	assert isAccountVoting => _accountWeight == accountWeight_, "Method changed weight of account if voting";
}