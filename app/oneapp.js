console.log("=> Loading hp-core.js");
var HP, core;
HP = HP || {};
HP.Core = HP.Core || {};
core = HP.Core;


core.setupRoute = function() {
	console.log("=> HP.Core.setupRoute");
	var i, r;
	for (i=0; i<HP.Routes.length ; i = i + 1) {
		r = HP.Routes[i]
		crossroads.addRoute(r.route, r.js);
	}
	crossroads.ignoreState = true;	
}

core.init = function() {
	console.log("=> init");
	HP.Core.setupRoute();
	crossroads.parse("");
}

core.hijackLinks = function(element) {

	//$("#dialogPopup *[route]")
	var element = element || "";
	$( element + " *[route]" ).click(function(e){ 
		console.log("=> link is clicked");
		e.preventDefault();
		var route;
		route = undefined;
		while ((typeof route === "undefined" || route == null) && e !== null) {
			if (e.target) {
				console.log("=> e.target")
				HP.target = e.target;
				if(e.target.getAttribute("route")) {
					route = e.target.getAttribute("route");
					console.log("=> found route = " + route);
									
				}
				else {
					console.log("=> not found route");
					e = e.target;
				}
			}
			else if (typeof e.attributes !== "route") {
				if (typeof e.attributes["route"] !== "route") {
					route = e.getAttribute("route");
				}
			}
			e = e.parentNode;
		}
		route = route || "";
		console.log("=> route = " + route);
		crossroads.parse(route);
	
	});
	$('#progress').remove();
}



