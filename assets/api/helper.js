if (ENV.JEKYLL_ENV == "development")
	var server_url = 'https://localhost:3000'
if (ENV.JEKYLL_ENV == "prodaction")
	var server_url = 'https://tauest-srv.herokuapp.com'

function getDataFromField(elements){
	var hash_set = {};
	elements.forEach(function(item) {
		var value = $('#' + item).val().trim();
		hash_set[item] = value;
	})
	return hash_set;
};
