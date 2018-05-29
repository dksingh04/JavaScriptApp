var menuModel = {};
 $.getJSON("data/allarticles.json", function(data) { 
        menuModel.techlists = ko.observableArray(data.topiclists);
        ko.applyBindings(menuModel, document.getElementById("menu-container"));
		 $(function() {
			 
				$( "#menu-list" ).accordion({
				collapsible: true,
				heightStyle: "content"
				});
		});
		
		  $('.menu-content-title').hover(
				
               function () {
                   $(this).css({"background-color":"#00131a"});
               }, 
				
               function () {
				   if($(this).attr("clicked") != 'true')
					$(this).css({"background-color": "#00384d;"});
               }
            );	
 });
 