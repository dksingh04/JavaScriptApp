menuContainerViewModel = function(){
	
	this.techlists = ko.observableArray([
			{
				name:"JavaScript", 
				topiclist:[
				{topicname:"ECMA", page:"views/javascript/ecma.html", breifdesc:"JavaScript is based on ECMA standard."},
				{topicname:"Progressive Enhancement", page:"views/javascript/progressive.html", breifdesc:"Creating separation among content, presentation and behavior."},
				{topicname:"Method Chaning", page:"views/javascript/method-chaining.html", breifdesc:"Applying multiple command on the same object/element."},
				{topicname:"Object Creation", page:"views/javascript/obj-creation.html", breifdesc:"Ways of creating JavaScript Object."},
				{topicname:"Callback Function", page:"views/javascript/callback.html", breifdesc:"Understanding JavaScript callback function."},
				/*{topicname:"Anonymous Function", page:"views/javascript/anonymous.html", breifdesc:"Creating anonymous function."},
				{topicname:"concept of this", page:"views/javascript/concept-this.html", breifdesc:"How does 'this' keyword works in JavaScript."},
				{topicname:"Event Bubbling and Capturing", page:"views/javascript/event-bubbling.html", breifdesc:"How event bubbling and capturing works."},
				{topicname:"Inheritance", page:"views/javascript/inheritance.html", breifdesc:"How to implement inheritance concept using JavaScript."},
				{topicname:"Closure", page:"views/javascript/closure.html", breifdesc:"How to implement closure concept using JavaScript."},
				{topicname:"Scopes", page:"views/javascript/scope.html", breifdesc:"How does variable scopes work in JavaScript."},*/
				{topicname:"Content Writing is in Progress...", page:"views/content-in-progress.html"}
				]
			},
			
			{
				name:"Other Topics", 
				topiclist:[
				{topicname:"Delicious", page:"views/javascript/delicious.html", breifdesc:"Bookmarking website"},
				{topicname:"To-do's for Job Interview", page:"views/javascript/interview-todo.html", breifdesc:"What different things you should takcare while appearing for Interviewes."}
				]
			}
			
			/*,
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
			}*/
			
		]);
};
ko.applyBindings(new menuContainerViewModel(), document.getElementById("menu-container"));