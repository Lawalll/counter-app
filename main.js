let count=0;
let decreaseBtn= document.getElementById('decreaseBtn').onclick=function(){
    count -=1;
    document.getElementById('count').innerHTML=count;
}
let resetBtn=document.getElementById('resetBtn').onclick=function(){
    count=0;
    document.getElementById('count').innerHTML=count;
}

let increaseBtn=document.getElementById('increaseBtn').onclick=function(){
    count +=1;
    document.getElementById('count').innerHTML=count;
}