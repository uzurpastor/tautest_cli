var server_url = 'https://localhost:3000'  
function getDataFromField(elements){
	var hash_set = {};
	elements.forEach(function(item) {
		var value = $('#' + item).val().trim();
		hash_set[item] = value;
	})
	return hash_set;
};
