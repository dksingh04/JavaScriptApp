clickCounterViewModel =  function(){
	this.numberOfClicks= ko.observable(0);
	
	this.registerClick = function(){
		console.log("Inside Click Counter");
		this.numberOfClicks(this.numberOfClicks() + 1);
	};
	this.resetClicks = function(){
		this.numberOfClicks(0);
	};
	
	hasClickedToManyTimes = ko.computed(function(){
			return this.numberOfClicks()>=3;
	}, this);
};

ko.applyBindings(new clickCounterViewModel(), document.getElementById("click-counter"));