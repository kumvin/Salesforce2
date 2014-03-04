/*global console, _ , require, scrollTo $ */
var HP, view;
HP = HP || {};
HP.V = HP.V || {};
HP.V.Contact = {};
view = HP.V.Contact;

view.list = function (contacts) {
	"use strict";
	console.log("=> HP.V.Contact.list");
	console.log(contacts);
	HP.V.Common.openBusy();
	_.templateSettings.variable = "rc";
	var template = _.template(require(HP.Config.templates + "/contacts/list.html"));
	$("#" + HP.Config.container).html(
        template({contacts: contacts})
    );
    scrollTo(0, 0);
	HP.Core.hijackLinks();
	HP.V.Common.closeBusy();
}

view.detail = function(contact) {
	"use strict";
	console.log("=> HP.V.Contact.detail");
	console.log(contact);
	HP.V.Common.openBusy();
	var template = _.template(require(HP.Config.templates + "/contacts/form.html"));
    $( "#" + HP.Config.container ).html(template());
    scrollTo(0, 0);	
	if(contact) {
		$('#contact_first_name').val(contact.first_name);
		$('#contact_last_name').val(contact.last_name);
		$('#contact_company').val(contact.company);
		$('#contact_title').val(contact.title);		
	}
	
	$( "#lookup_account" ).focus(function() {
	  console.log( "Handler for lookup_account.focus() called." );
	  HP.C.Account.lookup();
	});
	
	HP.Core.hijackLinks();
	HP.V.Common.closeBusy();
}

