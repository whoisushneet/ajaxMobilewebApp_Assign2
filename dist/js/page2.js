var fname;
var lname;
var program;
var homeCountry;
var studentId;
var username;
var zooList = new Array();

$(document).ready(function() {
    //declaring personal variables and assigning values from LS
    fname= localStorage.getItem("fname");
    lname= localStorage.getItem("lname");
    username = localStorage.getItem("username")
    studentId= localStorage.getItem("studentId");
    program= localStorage.getItem("program");
    homeCountry= localStorage.getItem("homeCountry");
    rowId= localStorage.getItem("rowId");
    zooList= JSON.parse(localStorage.getItem("zooList"));

    loadLayout();
    
}); //end of doc ready

function loadLayout() {
    $("#header h2:first").html(`Assignment 2 for Winter 2021`);
    $("#header h3:first").html(`${fname} ${lname} / ${studentId} / ${username}`);
    $("#header").append(`<hr>`);

    $(".contentHeading").html(` <strong> Zoo Information:</strong>`);

    $("#footer h4:first").html(`My Sheridan Program: ${program}`);
    $("#footer h5:first").html(`My Home Country: ${homeCountry}`);

    $("#list1").append(
        `<img src='${zooList[rowId].url}' width='100'></img>`
    );

    $("#list2").html(
        `
        <p style="text-align: center;">
            <strong>NAME:</strong> ${zooList[rowId].name}<br>
            <strong>CITY:</strong> ${zooList[rowId].city}<br>
            <strong>CODE:</strong> ${zooList[rowId].code}<br>
            <strong>DESCRIPTION:</strong> ${zooList[rowId].desc}
        </p>
        `
    );
    
}   //end of loadLayout function