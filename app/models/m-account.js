var HP, model;
HP = HP || {};
HP.M = HP.M || {};
HP.M.Account = {};

model = HP.M.Account;

model.list = function(callback) {
	//retrieve contacts and callback
	var accounts = HP.D.accounts;
	callback(accounts);
}
