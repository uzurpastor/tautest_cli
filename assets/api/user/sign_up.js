function signUp(){
	var data_as_hash = getDataFromField(["uname", "email", "password", "password_confirm"]);
	var data = JSON.stringify(data_as_hash);
	requestCreateUser(data);
};

function requestCreateUser(data){
	$.ajax({
		url:  server_url + '/users.json',
		method: 'POST',
		datatype: 'application/json',
		data: data,
		success: function(){
			console.log("send")
		}
	})
};