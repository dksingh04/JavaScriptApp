techlistModel = function(){
	
		this.techlists = ko.observableArray([
			{name:"Java Programming", topiclist:[{topicname:"OOPS Concept", page:"oops.html"},{topicname:"Thread", page:"thread.html"}, {topicname:"Collections", page:"collection.html"}]},
			{name:"Android App Development", topiclist:[{topicname:"History", page:"history.html"},{topicname:"Android Architecture", page:"androidarchitecture.html"},{topicname:"Android Layout", page:"androidlayout.html"},{topicname:"Android UI Controls", page:"androiduicontrol.html"}]},
			{name:"KnockOut JS", topiclist:[{topicname:"Introduction", page:"knockIntro.html"}, {topicname:"Data Binding Example",page:"databinding.html"}, {topicname:"Event Handling", page:"eventhandling.html"}, {topicname:"List Example",page:"listexample.html"}]},
			{name:"Python Programming", topiclist:[{topicname:"Introduction", page:"pythonIntro.html"}, {topicname:"Install and Setup", page:"pythonInsNsetup.html"}, {topicname:"Start Working", page:"pythonworking.html"}]},
			{name:"Mongos DB", topiclist:[{topicname:"Introduction", page:"mongoIntro.html"},{topicname:"Install and Setup", page:"mongoInstNsetup.html"}, {topicname:"Introduction to NoSQL", page:"mongoNoSql.html"}, {topicname:"CRUD Operation", page:"mongocrud.html"}]}
			
		]);
	
};

ko.applyBindings(new techlistModel(), document.getElementById("menu-container"));