
var firebaseRef = firebase.database().ref();


	var myfile = document.getElementById("myfile");
	
	myfile.addEventListener('change', function(e){
		var file = e.target.files[0]; 
		var storageRef = firebase.storage().ref('folder/'+file.name);
		storageRef.put(file);

	});
	

function retrieve() {
var storageRef = firebase.storage().ref("folder/files.jpg");
storageRef.getDownloadURL().then(function(url) {
console.log(url);
var downloadFile = function(url){
	let a = document.createElement('a');
	a.href =  url;
	a.download = "yikes.jpg";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
  }
 downloadFile(url); 
  /*var link = document.createElement("a");
  link.download = "yikes.jpg";
  link.href = url;
  document.body.appendChild(link);
 // link.click();
  document.body.removeChild(link);
  delete link; 
  window.saveAs(url, "yikes.jpg")
*/
  
});

}	
function add(){


	
	if(document.getElementById('numins').value == ""){
		alert("numins is empty");
	}else if(document.getElementById('name').value == ""){
		alert("name is empty");
	}
	else if(document.getElementById('email').value == ""){
		alert("email is empty");
	}





	
	else{
		res="";
		if(document.getElementById("class").textContent=="1ere") {res+="1p";}
		else {res+="2p";}
		if(document.getElementById("group").textContent=="1ere") {res+="1";}
		else {res+="2";}

		firebaseRef.child("Etudiant/"+document.getElementById('name').value).set({
		Numins : document.getElementById("numins").value,
		Email : document.getElementById("email").value,
		Classe : res
		})
	cls();
	alert("Added...");
	}
}


function cls(){
	document.getElementById('name').value="";
	document.getElementById('numins').value="";
	document.getElementById('email').value="";
	document.getElementById('class').value="";
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
function changeclass1ere() {
	console.log("1ere");
	document.getElementById("class").textContent="1ere";
  }
function changeclass2eme() {
	console.log("2eme");
	document.getElementById("group").textContent="2eme";
  }

  
  


