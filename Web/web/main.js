
var firebaseRef = firebase.database().ref();
var storageRef =firebase.storage().ref();

function upload(){
	
	
    storageRef.child(document.getElementById('myfile').name).put(document.getElementById('myfile')) ;
// ey fhemtek thats what im trying to see xD

}

function add(){


	
	if(document.getElementById('id').value == ""){
		alert("id is empty");
	}else if(document.getElementById('name').value == ""){
		alert("name is empty");
	}
	else if(document.getElementById('age').value == ""){
		alert("age is empty");
	}
	else if(document.getElementById('moyen').value == ""){
		alert("moyen is empty");
	}



	
	else{

		firebaseRef.child(document.getElementById('id').value).set({
		name : document.getElementById("name").value,
		age : document.getElementById("age").value,
		moyen : document.getElementById("moyen").value
		})
	cls();
	alert("Added...");
	}
}


function cls(){
	document.getElementById('id').value="";
	document.getElementById('name').value="";
	document.getElementById('age').value="";
	document.getElementById('moyen').value="";
}

function load(){

	if(document.getElementById('Lid').value == ""){
		alert ("please gimme some ids my man");
	}
	else{
		var data = firebase.database().ref(document.getElementById('Lid').value+"/");
		data.on('value',gotData);
	
	}
}

function gotData(data){
	if(data.val() != null){
		document.getElementById('Lname').value = data.val().name;
		document.getElementById('Lage').value = data.val().age;
		document.getElementById('Lmoyen').value = data.val().moyen;
	}
	
	else{
		alert("does not exist in the data base");
	}
}

