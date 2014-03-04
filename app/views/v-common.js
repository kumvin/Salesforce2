var HP, view;
HP = HP || {};
HP.V = HP.V || {};
HP.V.Common = {};
view = HP.V.Common;


view.openDialog = function() {
	var template = _.template(require(HP.Config.templates + "/common/dialog.html"));
    $( "#" + HP.Config.container ).append(template());
	HP.Core.hijackLinks("#dialogPopup");		
}

view.dialogClose = function() {
	$('.dialog').remove();	
}

view.openBusy = function() {
	var template = _.template(require(HP.Config.templates + "/common/loading.html"));
    $( "#" + HP.Config.container ).append(template());	
}

view.closeBusy = function() {
	$('#busyPopup').remove();	
}