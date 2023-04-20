

const list100 = document.querySelector('#list100');

let arr=[];

for(let i =1 ;i<100;i++){
    arr.push(i);

}
                    //名稱 無關  順序比較  (i, index)  (key,value)
arr.forEach(function(i, index){
    console.log(i+","+index);
})




let contant ="";


arr.forEach(function(i){
    contant += `<li>${i}</li>`
})
list100.innerHTML =contant;