/*global console, _ , require, scrollTo $ */
var HP, view;
HP = HP || {};
HP.V = HP.V || {};
HP.V.Account = {};
view = HP.V.Account;

view.lookup = function(accounts) {
	"use strict";
	console.log("=> HP.V.Account.lookup");
	console.log(accounts);
	HP.V.Common.openBusy();
	_.templateSettings.variable = "rc";
	var template = _.template(require(HP.Config.templates + "/accounts/lookup.html"));
	$("#" + HP.Config.container).append(
        template({accounts: accounts})
    );
    scrollTo(0, 0);
	HP.Core.hijackLinks();
	HP.V.Common.closeBusy();	
}