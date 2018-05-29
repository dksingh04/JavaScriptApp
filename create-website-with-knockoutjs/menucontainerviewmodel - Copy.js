menuContainerViewModel = function(){
	
	this.techlists = ko.observableArray([
			{
				name:"Java Programming", 
				topiclist:[{topicname:"OOPS Concept", page:"oops.html", breifdesc:"oops concept"},
					{topicname:"Thread", page:"thread.html", breifdesc:"thread concept"},
					{topicname:"Collections", page:"collection.html", breifdesc:"collection concept"}
				]
			},
			{
				name:"Android App Development", 
				topiclist:[{topicname:"History", page:"history.html", breifdesc:"Android History"},
				{topicname:"Android Architecture", page:"androidarchitecture.html", breifdesc:"Android Architecture"},
				{topicname:"Android Layout", page:"androidlayout.html", breifdesc:"Android Layout Concepts"},
				{topicname:"Android UI Controls", page:"androiduicontrol.html", breifdesc:"Android UI Controls"}
				]
			},
			{
				name:"KnockOut JS", 
				topiclist:[{topicname:"Introduction", page:"knockIntro.html", breifdesc:"Introduction to Knockout JS framwork"},
				{topicname:"Data Binding Example",page:"databinding.html", breifdesc:"Working with <code>ko.observable & ko.computed</code>"},
				{topicname:"Event Handling", page:"eventhandling.html", breifdesc:"Working with declarative binding and how KO uses that"},
				{topicname:"List Example",page:"listexample.html", breifdesc:"oops concept"}
				]
			},
			{
				name:"Python Programming",
				topiclist:[{topicname:"Introduction", page:"pythonIntro.html", breifdesc:"Introduction to Python"},
				{topicname:"Install and Setup", page:"pythonInsNsetup.html", breifdesc:"Installation of Python on Windows"},
				{topicname:"Start Working", page:"pythonworking.html", breifdesc:"Start working"}
				]
			},
			{
				name:"Mongos DB",
				topiclist:[{topicname:"Introduction", page:"mongoIntro.html", breifdesc:"MongoDB's breif introduction"},
				{topicname:"Install and Setup", page:"mongoInstNsetup.html", breifdesc:"Installation of MongoDB on windows"},
				{topicname:"Introduction to NoSQL", page:"mongoNoSql.html", breifdesc:"NOSQL Concepts"},
				{topicname:"CRUD Operation", page:"mongocrud.html", breifdesc:"CRUD operations in NOSQL"}
				]
			}
			
		]);
};
ko.applyBindings(new menuContainerViewModel(), document.getElementById("menu-container"));