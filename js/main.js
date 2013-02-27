$(document).ready(function() {

	//Déclaration des boutons
	var ubuntu = $("#ubuntu");
	var fedora = $("#fedora");
	var mint = $("#mint");
	var con;

	$(ubuntu).click(function() {

		function connect() {
			con = new WebSocket('localhost');
			con.onopen = function() {
				setStatus("Open");
			};
			con.onmessage = function(e) {
				displayMsg("Server: " + e.data);
			};
			con.onclose = function(e) {
				setStatus("Closed");
			};
			con.onerror = function(error) {
				setStatus("Error" + error);
			};
		};
		function closeConnection() {
			if (con.readyState != 3)
				con.close();
		}

		function send() {
			if (con.readyState == 1) {
				var msg = "document";
				con.send(msg);
			}
		}

		alert("Ubuntu is clicked");
	});

	$(fedora).click(function() {
		alert("Fedora is clicked");
	});

	$(mint).click(function() {
		alert("Mint is clicked");
	});

});
