var fname;
var lname;
var program;
var homeCountry;
var studentId;
var username;
var zooList = new Array();

class Zoo {
	constructor (name, city, code, desc, url, id) {
		this.name = name; 
        this.city = city;
        this.code = code;
        this.desc = desc;
        this.url = url;
        this.id = id;
	}
}

$(document).ready(function() {

    $.ajax({
		type: "GET",
		url: "data/A2-Zoo.json",
		dataType: "json",
		success: loadJSON,
		error: function(e) {alert(`${e.status} - ${e.statusText}`)}
	});// end oj ajax call

}); //end of doc ready

function loadJSON(data) {

    //pulling personal info from json file
	fname = data.myInfo.FirstName;
    lname = data.myInfo.LastName;
    program = data.myInfo.SheridanProgram;
    homeCountry = data.myInfo.HomeCountry;
    studentId = data.myInfo.StudentNumber;
    username = data.myInfo.UserName;

	//saving personal data in local storage
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("program", program);
    localStorage.setItem("homeCountry", homeCountry);
    localStorage.setItem("studentId", studentId);
    localStorage.setItem("username", username);
    console.log(data);

    //populating the zooList
    for(let z of data.zooData) {
		zooList.push(new Zoo(
            z.zooName, z.zooCity, z.zipCode, z.description, z.photoUrl, z.zooID
        ));
	}
    
    //saving array in LS
    localStorage.setItem("zooList", JSON.stringify(zooList));

    loadLayout();
}//end of loadJSON function

function loadLayout() {
    $("#header h2:first").html(`Assignment 2 for Winter 2021`);
    $("#header h3:first").html(`${fname} ${lname} / ${studentId} / ${username}`);
    $("#header").append(`<hr>`);

    $(".contentHeading").html(
        ` <strong> Zoo List:</strong> <br> 
        Select a zoo to see more information.`
    );

    $("#footer h4:first").html(`My Sheridan Program: ${program}`);
    $("#footer h5:first").html(`My Home Country: ${homeCountry}`);

    //printing the array
    for(let x =0; x<zooList.length; x++) {
        if(x % 2 === 0){
            $("#list1 ul").append(
                `
                <li id=${x}>
                    <a href="html/page2.html">
                        ${zooList[x].name}
                    </a>
                </li>
                `
            );
        }else{
            $("#list2 ul").append(
                `
                <li id=${x}>
                    <a href="html/page2.html">
                        ${zooList[x].name}
                    </a>
                </li>
                `
            );
        }
	}
}   //end of loadLayout function

// Save zoo id to local storage
$(document).on("click", "#list1 > ul > li", function() {
	localStorage.setItem("rowId", 
		$(this).closest("li").attr("id")
	);
});
$(document).on("click", "#list2 > ul > li", function() {
	localStorage.setItem("rowId", 
		$(this).closest("li").attr("id")
	);
});
