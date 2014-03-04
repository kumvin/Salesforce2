var HP, model;
HP = HP || {};
HP.M = HP.M || {};
HP.M.Contact = {};

model = HP.M.Contact;

model.list = function(callback) {
	//retrieve contacts and callback
	var contacts = HP.D.contacts;
	callback(contacts);
}

model.detail = function(id, callback) {
	console.log("=> HP.M.Contact.detail id = " + id);
	var contact = _.findWhere(HP.D.contacts, {id: id});
	callback(contact);
}