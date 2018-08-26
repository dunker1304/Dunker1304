/*

// javascript version:

function charCount(){
    var quest = document.getElementById("quest").value;
    console.log(quest.length);
    document.getElementById("left").innerHTML = 200-quest.length+"/200 chars left";
    if(quest.length >= 200){
        document.getElementById("quest").readOnly =  true;
        //document.getElementById("quest").value = document.getElementById("quest").value.slice(0, 200);
    }
}
*/

// jQuery version:

function charCount(){
    var quest = $("#quest").val();
    console.log(quest.length);
    $("#left").text(200-quest.length+"/200 chars left");
}