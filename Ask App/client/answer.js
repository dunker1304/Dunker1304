let numOfYes = 0;
let numOfNo = 0;

$.ajax({
    url: 'http://localhost:6969/question',
    method: 'GET',
    success: function(data){
        console.log("Success",data);
        $('#questCont').text(data.questionContent);
        $('.answer').attr("data-id", data.id);
        numOfYes = data.yes;
        numOfNo = data.no;
    },
    error: function(){
        console.log("Fail");
    }
})

$('.answer').on('click', function(event){
    let answer = $(event.target).attr('data-answer');
    let questionID = $(event.target).attr('data-id');
    console.log(answer, questionID);
    if(answer === "yes") numOfYes++;
    else                 numOfNo++;
    let newAnswer = {
        id: questionID,
        questionContent: $('#questCont').text(),
        yes : numOfYes,
        no : numOfNo
    }
    // put len /answer
    $.ajax({
        url: 'http://localhost:6969/answer',
        method : 'PUT',
        data : newAnswer,
        error: function(){
            console.log('Fail');
        }
    })
})  // end change number of answer yes/no


$('.resultAnalyse').click(function(){
    console.log(+numOfNo + +numOfYes);
    $('.showResult').css({
        'display' : 'block',
    })
    if(numOfYes === 0 && numOfNo === 0){
        return;
    }
    let left = (+numOfNo / (+numOfYes + +numOfNo)) * 100;
    left = left.toFixed(1);
    let leftWidth = left+'%';
    let right = (+numOfYes / (+numOfYes + +numOfNo)) * 100;
    right = right.toFixed(1);
    let rightWidth = right+'%';
    console.log(leftWidth);
    
    

    $('.showResult .left').css({
        'width': leftWidth,
    })

    $('.showResult .left').text(leftWidth);

    $('.showResult .right').css({
        'width': rightWidth,
    })
    $('.showResult .right').text(rightWidth);
})
