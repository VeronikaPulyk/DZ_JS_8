$(document).ready(function() {
	$('#btn').click(function() {
		var str = $('#text').val();
		var s = '';
		if (~str.indexOf("https:\/\/www.")) {
			s = str.replace(/https:\/\/www./g, "");
		} else if (~str.indexOf("http:\/\/www.")) {
			s = str.replace(/http:\/\/www./g, "");
		} else if (~str.indexOf("https:\/\/")) {
			s = str.replace(/https:\/\//g, "");
		} else if (~str.indexOf("http:\/\/")) {
			s = str.replace(/http:\/\//g, "");
		} else if (~str.indexOf("www.")) {
			s = str.replace(/www./g, "");
		} else {
			s = str;
		}
		var shift = s.indexOf(".");
		s = s.substring(0, shift).split('');
		for (var i = 0; i < s.length; i++) {
			if (s[i] == "o" || s[i] == "O") {
				s[i] = "0";
			} else if (s[i] == "l") {
				s[i] = "1";
			} else if (s[i] == "i") {
				s[i] = "3";
			} else if (s[i] == "s") {
				s[i] = "5";
			}
		}
		s = s.join('');
		var num = 0;
		for (var i = 0; i < 4; i++) {
			var x = Math.floor(Math.random() * 10) + 1;
			if (x % 3 != 0) {
				num = Math.floor(Math.random() * (122 - 97)) + 97;
				s += String.fromCharCode(num);
			} 
			else {
				num = Math.floor(Math.random() * (57 - 48)) + 48;
				s += String.fromCharCode(num);
			}
		}
		$('#out').html(s);
	});
});