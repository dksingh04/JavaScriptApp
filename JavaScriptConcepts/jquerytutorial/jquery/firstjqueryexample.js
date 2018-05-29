 $(document).ready(function() {
            
            $("div").click(function() {alert("Hello, world!");});

            $("body").click(function(event) {
   				alert("clicked: " + event.target);
			});
         });