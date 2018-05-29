menuContainerViewModel = function(){
	this.loadDataBindingpage = function(){
	console.log("I am in loadDataBinding page");
		$("#container-hello").load("../databinding.html"); 
	}
};
ko.applyBindings(new menuContainerViewModel(), document.getElementById("menu-container"));