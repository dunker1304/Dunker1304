function count(num){
    for(let i = num;i>=0;i--){
        setTimeout(function(){
            console.log(i);
        },1000*(num-i));
        
    }
}
count(5);