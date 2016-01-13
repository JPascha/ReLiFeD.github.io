// // // ===== CUSTOM SCRIPTS ===== \\ \\ \\


// == BACKGROUND CHANGER == \\
var a = self.setInterval('roastBeef()', 10000);
var b = 0;
var c = [
        'img/background1.jpg',
        'img/background2.jpg',
        'img/background3.jpg',
		'img/background4.jpg',
		'img/background5.jpg'
    ];

function roastBeef() {
	b = (b + 1) % c.length;
	return $('.background').css('background', 'url("' + c[b] + '") no-repeat center center');
}

// == GUILD INFO API KEY AUTHENTICATION == \\
function getKey() {
	if (document.getElementById("inputInfo").value == "") {
		alert("Please enter your API-key.");
	} else {
		var apiKey = document.getElementById("inputInfo").value;
		if (apiKey.length < 72) {
			alert("You entered an incorrect API-key.");
		} else if (apiKey.length > 72) {
			alert("You entered an incorrect API-key.");
		} else {
			var HttpClient = function () {
				this.get = function (aUrl, aCallback) {
					var anHttpRequest = new XMLHttpRequest();
					anHttpRequest.onreadystatechange = function () {
						if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200)
							aCallback(anHttpRequest.responseText);
					};

					anHttpRequest.open("GET", aUrl, true);
					anHttpRequest.send(null);
				};
			};
			aClient = new HttpClient();
			aClient.get('https://api.guildwars2.com/v2/account?access_token=' + apiKey, function (response) {
				guildMember = response.search("4CA49F58-EB63-4F9D-8899-CAF4B38D032A");
				if (guildMember === -1) {
					alert("You don't seem to be a member of Irreversible. If you are, you might have entered an incorrect API-key.");
				} else {
					document.getElementsByClassName('steamInfo')[0].id = "key";
					document.getElementsByClassName('discordInfo')[0].id = "key";
					document.getElementsByClassName("steamInfo")[0].innerHTML = "<a href='http://steamcommunity.com/groups/irreversiblegw2'>Irreversible Steam group</a>";
					document.getElementsByClassName("discordInfo")[0].innerHTML = "<a href='https://discord.gg/0TAl0WnhpQLa0u8J'>Irreversible Discord server</a>";
					document.getElementsByClassName("popOutInfo")[0].innerHTML = "Verified!";
					document.getElementsByClassName("popOutInfo")[0].style.top = "40px";
					document.getElementsByClassName("popOutInfo")[0].style.transform = "scaley(1)";
				}
			});
		}
	}
}
