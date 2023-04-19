// console.log("123456");
// let name = "113333";
// console.log(name);
// a = 123;
// a =null
// a = [1,2,3,4,4,5]
// console.log(a);
// a = {name : "aaaa",
// tel : 123456};

// let result = 0;
// for(let s =1 ; s<1001 ; s++){
//     if(s%2==0){
//         result += s;
//     }
//     continue;
// }
// console.log(result);

// const filterArr =arr.filter(function(i){
// return i%2 == 0 ;
// });
// console.log(filterArr);

// const mapArr =arr.map(function(i){
//     return i+1 == 0 ;
//     });
// console.log(mapArr);


// //1~1000總和
// //fifter map

// let result1 = 0;
// for(let a = 1;a<=1000;a++){
//     result1 += a
// }
// console.log(result1);

// let array =[];
// for(let a = 1;a<=1000;a++){
//     array.push(a);
// }   
// console.log(array);

// const doubleArr = array.filter(function(i){

//     return i%2==0
// });
// console.log(doubleArr);

// let abc =0;
// doubleArr.forEach(function(i){
//      abc += i ;
// });
// console.log(abc);

// const map1 = array.map(function(i){
//     if(i %2 != 0){
//     return 0;
//     }
//     return i*2;

// })
// console.log(map1,"map");

//只能抓ID 
const title =document.getElementById("title");

//可以抓 ID  CLASS 都行
const title2 =document.querySelector("#title2");
// title.innerText="這是甚麼東西";
console.log(title2);

const button =document.querySelector("#btn");

const input = document.querySelector('#input')

const input2 = document.querySelector('#input2');

const h3Text = document.querySelector('#h3Text');
const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');


console.log(input);


let answer=Math.floor(Math.random() * 100) + 1;
button.addEventListener("click", function(){
    let a = Number(firstNum.innerText);
    let b = Number(secondNum.innerText);

    let c = parseInt(firstNum.innerText);
    let d = parseInt(secondNum.innerText);

    if(input.value>a&& input.value <b && input.value == answer){
        title.innerText=input.value;
        h2Text.innerText="恭喜答對了";
        
        
    }
    else if(input.value>a && input.value <answer){
        
        firstNum.innerText=input.value;
       
        h2Text.innerText="答錯了，再試一次";
    }
    else if(input.value< b && input.value >answer){
        
        secondNum.innerText=input.value;
      
        h2Text.innerText="答錯了，再試一次";
    }
    else if(input.value<1 || input.value >100){
        h2Text.innerText="請好好打字";

    }else{
        console.log("=========");
    }

    console.log();
    
})
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault(); // 防止頁面重新載入
        document.querySelector("#btn").click(); // 執行回答問題的程式碼
    }
});






