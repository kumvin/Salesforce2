var HP, controller;
HP = HP || {};
HP.C = HP.C || {};
HP.C.Account = {};
controller = HP.C.Account;

controller.lookup = function() {
	HP.M.Account.list(HP.V.Account.lookup);	
}