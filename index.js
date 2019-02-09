 window.onload=function() {

    //变量的声明
    var a=0;//问题的序号，从0开始点一下tips就+1
    var tips=document.getElementsByClassName("tips")[0];
    var card=document.getElementsByClassName("card")[0];
    var title,num,question,content,answer1,answer2,answer3,answer4,answer_1,answer_2,answer_3,answer_4,tip,tip1,tip2,tip3;
    var tip1=document.getElementsByClassName("tip1")[0];
    //添加子节点的函数
    var createElement=function(element,classname,parentnode){
        var nodename = document.createElement(element);
        parentnode.appendChild(nodename);
        nodename.className = classname;
    };
    //添加下一组问题的函数
    var contentStructrue=function(questionX,answerA,answerB,answerC,answerD,right1){
        // card.innerHTML="";
        createElement("div",title,card);
        title=document.getElementsByClassName("title")[0];
        createElement("span",num,title);
        num=document.getElementsByClassName("num")[0];
        createElement("span",question,title);
        question=document.getElementsByClassName("question")[0];
        createElement("div",content,card);
        content=document.getElementsByClassName("content")[0];

        createElement("div",answer1,content);
        answer1=document.getElementsByClassName("answer1")[0];
        createElement("div",answer2,content);
        answer2=document.getElementsByClassName("answer2")[0];
        createElement("div",answer3,content);
        answer3=document.getElementsByClassName("answer3")[0];
        createElement("div",answer4,content);
        answer4=document.getElementsByClassName("answer4")[0];

        createElement("span",answer_1,answer1);
        answer_1=document.getElementsByClassName("answer_1")[0];
        createElement("span",answer_2,answer2);
        answer_2=document.getElementsByClassName("answer_2")[0];
        createElement("span",answer_3,answer3);
        answer_3=document.getElementsByClassName("answer_3")[0];
        createElement("span",answer_4,answer4);
        answer_4=document.getElementsByClassName("answer_4")[0];

        createElement("div",tips,card);
        tips=document.getElementsByClassName("tips")[0];
        createElement("span",tip1,tips);
        tip1=document.getElementsByClassName("tip1")[0];
        //开始赋值
        a=a+1;
        num.innerHTML=" "+a+". ";
        question.innerHTML=questionX;
        answer_1.innerHTML=answerA;
        answer_2.innerHTML=answerB;
        answer_3.innerHTML=answerC;
        answer_4.innerHTML=answerD;
    };
    //点击下一题按钮的事件
    tips.addEventListener("click",function(){
        if(a==4){
                var trueOne=document.getElementsByClassName("trueOne")[0];
                if(trueOne){
                    alert("您已回答完全部问题!")
                }else{
                    alert("请作答此题！")
                }
        }else if(a==0){
            tip1.innerHTML=">请选择您的回答";
            contentStructrue("何美杉是哪一年出生的","A.1997年","B.1998年","C.1999年","D.2000年");
        }else if(a==1){
            tip1.innerHTML=">请选择您的回答";
            var trueOne=document.getElementsByClassName("trueOne")[0];
            if(trueOne){
                trueOne.className="answer_1";
                contentStructrue("何美杉的属相是","A.子鼠","B.丑牛","C.寅虎","D.卯兔");
            }else{
                alert("请作答此题！")
            }
        }else if(a==2){
            tip1.innerHTML=">请选择您的回答";
            var trueOne=document.getElementsByClassName("trueOne")[0];
            if(trueOne){
                trueOne.className="answer_2";
                contentStructrue("何美杉是哪个月份出生的","A.一月","B.二月","C.三月","D.四月");
            }else{
                alert("请作答此题！")
            }
        }else if(a==3){
            tip1.innerHTML=">请选择您的回答";
            var trueOne=document.getElementsByClassName("trueOne")[0];
            if(trueOne){
                trueOne.className="answer_3";
                contentStructrue("何美杉出生的日期是那一天","A.7号","B.8号","C.9号","D.10号");
            }else{
                alert("请作答此题！")
            }
        }
    });
   //点选择按钮触发的事件
    var answer1=document.getElementsByClassName("answer1")[0];
    var answer2=document.getElementsByClassName("answer2")[0];
    var answer3=document.getElementsByClassName("answer3")[0];
    var answer4=document.getElementsByClassName("answer4")[0];
    //点击A选项时
    answer1.addEventListener("click",function(){
        answer_1=document.getElementsByClassName("answer_1")[0];
        if(a==1){
            answer_1.className="trueOne";
            tip1.innerHTML=">回答正确!点击进入下一题";
        }
        else if(a==2||a==3||a==4){
            alert("选择错误！")
        }
    });
    //点击B选项时
    answer2.addEventListener("click",function(){
        if(a==2){
            tip1.innerHTML=">点击进入下一题";
            answer_1=document.getElementsByClassName("answer_1")[0];
            tip1.innerHTML=">回答正确!点击进入下一题";
            answer_2.className="trueOne";
        }
        else if(a==1||a==3||a==4){
            alert("选择错误！")
        }
    });
    //点击C选项时
    answer3.addEventListener("click",function(){
        if(a==3){
            answer_1=document.getElementsByClassName("answer_1")[0];
            tip1.innerHTML=">回答正确!点击进入下一题";
            answer_3.className="trueOne";
        }else if(a==1||a==2||a==4){
            alert("选择错误！")
        }
    });
    //点击D选项时
    answer4.addEventListener("click",function(){
        if(a==4){
            answer_1=document.getElementsByClassName("answer_1")[0];
            tip1.innerHTML=">回答正确!已经是最后一题";
                answer_4.className="trueOne";
        }
        else if(a==1||a==2||a==3){
            alert("选择错误！")
        }
    });
};
