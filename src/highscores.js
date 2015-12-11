var C = require("constants"),
	Firebase = require("firebase"),
	firebase = new Firebase(C.FIREBASE);

module.exports = {
  postScore: function(name, score){
		var myFireRef = new Firebase(C.FIREBASE+"/score");
		firebase.push({
			name: name,
			score: score
		});

	},
};
