var HP;
HP = HP || {};
HP.Routes = [
// blank (the first route below) is the default route
	{route: '', js: HP.C.Contact.list  }
	, {route: 'dialog/close', js: HP.C.Application.dialogClose }
	, {route: 'contacts/list', js: HP.C.Contact.list  }
	, {route: 'contacts/create', js: HP.C.Contact.create }
	, {route: 'contacts/new', js: HP.C.Contact.form}
	, {route: 'contacts/{id}', js: function(id) {HP.C.Contact.form(id);}  }
];