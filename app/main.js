require([
	"lib/zepto.min"
	, "lib/underscore.min"
	, "lib/text"
	, "../config/application"
	, "oneapp"

	//account
	, "models/m-account"
	, "views/v-account"
	, "controllers/c-account"
	, "datas/d-account"
	, "lib/text!templates/accounts/lookup.html"

	//contact
	, "models/m-contact"
	, "views/v-contact"
	, "controllers/c-contact"
	, "datas/d-contact"
	, "lib/text!templates/contacts/list.html"
	, "lib/text!templates/contacts/form.html"

	//common
	, "views/v-common"
	, "controllers/c-application"
	, "../config/route"
	, "lib/text!templates/common/loading.html"
	, "lib/text!templates/common/dialog.html"
	
	]
	, function() {
		console.log("=> Loading app")
		$(document).ready( function(){ HP.Core.init(); });	           
	}
);