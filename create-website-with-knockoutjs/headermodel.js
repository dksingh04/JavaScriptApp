headerMessageViewModel = function(){
	this.headerMessage={
			headertitle: 'Belief is, Knowledge and Experience!!!!', 
			menus:[{title:"About Me", page:"about.html"}]
	};
	
}
ko.applyBindings(new headerMessageViewModel(), document.getElementById("container-header"));