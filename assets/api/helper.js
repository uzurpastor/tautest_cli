{% if jekyll.environment == "development" %}
	var server_url = 'https://localhost:3000'
{% else %}
	var server_url = 'https://heroku'
{% endif %}

function getDataFromField(elements){
	var hash_set = {};
	elements.forEach(function(item) {
		var value = $('#' + item).val().trim();
		hash_set[item] = value;
	})
	return hash_set;
};
