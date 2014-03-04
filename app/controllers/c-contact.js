var HP, controller, contact;
HP = HP || {};
HP.C = HP.C || {};
HP.C.Contact = {};
controller = HP.C.Contact;

controller.list = function() {
	HP.M.Contact.list(HP.V.Contact.list);	
}

controller.form = function(id) {
	HP.M.Contact.detail(id, HP.V.Contact.detail);
}

controller.create = function() {
	HP.V.Common.openDialog();
}

