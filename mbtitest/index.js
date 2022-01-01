var num = 1;

var q = {
    1: {"title" : "Q1. 나는 여행지를 선택할 때 주로", "type": "EI", "A" : "많은 사람이 있는 도시가 좋아", "B" : "빼어난 자연경관이 있는 자연이 좋아"},
    2: {"title" : "Q2. 여행을 간다면 누구랑 ?", "type": "EI", "A" : "소중한 내 친구들이랑!", "B" : "그냥.. 혼자 조용히 갔다오고 싶어"},
    3: {"title" : "Q3. 여행지에 도착한 나, 배가 너무 고픈데 밥은 어디를 가서 먹을까 ?", "type": "EI", "A" : "귀찮은데 그냥 근처 아무데나 들어가서 먹자", "B" : "내가 찾아온 맛집으로 한번 가보자!!"},
    4: {"title" : "문제 4번", "type": "SN", "A" : "S", "B" : "N"},
    5: {"title" : "문제 5번", "type": "SN", "A" : "S", "B" : "N"},
    6: {"title" : "문제 6번", "type": "SN", "A" : "S", "B" : "N"},
    7: {"title" : "문제 7번", "type": "TF", "A" : "T", "B" : "F"},
    8: {"title" : "문제 8번", "type": "TF", "A" : "T", "B" : "F"},
    9: {"title" : "문제 9번", "type": "TF", "A" : "T", "B" : "F"},
    10: {"title" : "문제 10번", "type": "JP", "A" : "J", "B" : "P"},
    11: {"title" : "문제 11번", "type": "JP", "A" : "J", "B" : "P"},
    12: {"title" : "문제 12번", "type": "JP", "A" : "J", "B" : "P"}
};

var result = {
    "ISTJ" : {"animal" : "하마", "explain" : "하마 설명", "img" : 'lion.jpg'} ,
    "ISFJ" : {"animal" : "하마", "explain" : "하마 설명", "img" : 'lion.jpg'} ,
    "INFJ" : {"animal" : "하마", "explain" : "하마 설명", "img" : 'lion.jpg'} ,
    "INTJ" : {"animal" : "하마", "explain" : "하마 설명", "img" : 'lion.jpg'} ,
    "ISTP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ISFP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "INFP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "INTP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ESTP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ESFP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ENFP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ENTP" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ESTJ" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ESFJ" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ENFJ" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
    "ENTJ" : {"animal" : "멋쟁이 사자", "explain" : "멋쟁이 사자 설명", "img" : 'lion.jpg'} ,
}

function start() {
    $(".start").hide();
    $('.question').show();
    next();
}

$('#A').click(function() {
   var type = $('#type').val();
   var preValue = $('#'+type).val();
   $('#'+type).val(parseInt(preValue)+1);

   next();
   
   console.log(preValue+1)
});

$('#B').click(function() {
    next();
})

function next() {
    if(num == 13) {
        $('.question').hide();
        $('.result').show();

        var mbti = '';
        ($('#EI').val() < 2) ? mbti += "I" : mbti += "E";
        ($('#SN').val() < 2) ? mbti += "N" : mbti += "S";
        ($('#TF').val() < 2) ? mbti += "F" : mbti += "T";
        ($('#JP').val() < 2) ? mbti += "P" : mbti += "J";

        alert(mbti);

        $('#img').attr('src', result[mbti]["img"]);
        $('#animal').html(result[mbti]["animal"]);
        $('#explain').html(result[mbti]["explain"]);

    } else {
    $('#title').html(q[num]["title"]);
    $('#type').val(q[num]["type"]);
    $('#A').html(q[num]["A"]);
    $('#B').html(q[num]["B"]);

    $('.progress-bar').attr('style', 'width:calc(100/12*' + num +'%)');

    num++;
    }

    
}