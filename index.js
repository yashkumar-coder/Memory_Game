document.querySelector('body').addEventListener('mousemove',function(e){
    document.body.style.backgroundColor=`rgba(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY+e.offsetX})`;
    console.log('You mouse curosor is moving everywhere.');
})

// let change1=document.getElementById('btn1');
// let change2 =document.getElementById('btn2');

// function changes1(){

//     document.getElementById("root1").style.display="flex";
//     document.getElementById("root1").style.justifyContent="center";
//     let count=0;
//     for(let i=0;i<2;i++){

//         // MAIN CONTAINER WHICH CONTAIN 3 DIV ELEMENT
//         let mynewH1=document.createElement("div");
        
//         mynewH1.className="'main'+i";
//         for(let j=0;j<2;j++){

//             // TO CREATE THE BLOCK IN ROW AND COLOMN
//             var myNewH2=document.createElement("div");
//             myNewH2.className='div_boss';
//             document.getElementById("root1").appendChild(mynewH1);
//         myNewH2.style.width="100px";
//         myNewH2.style.height="100px";
//         myNewH2.style.border="5px solid red";
//         console.log(myNewH2);
//         myNewH2.style.flexDirection="column"
//         mynewH1.append(myNewH2);

//         // GENERATE RANDOM NUMBER AND PUT THEM
//         const randomIndex = getRndInteger(0,9);
//             let text=document.createTextNode(randomIndex);

//             myNewH2.append(text);

//       myNewH2.style.fontSize="30px";
//       myNewH2.style.alignItems="center";
//     }
    
//     console.log(myNewH2);
//     }

//     function getRndInteger(min,max){
//             return Math.floor(Math.random()*(max-min+1));
//         }
// }



// function changes2(){
//     document.getElementById("root2").style.display="flex";
//     document.getElementById("root2").style.justifyContent="center";
//     // const arr=new arr();
//     let count=0;
//     for(let i=0;i<3;i++){
//         let mynewH1=document.createElement("div");
        
//         mynewH1.className="'main'+i";
//         for(let j=0;j<3;j++){

//             // TO CREATE THE BLOCK IN ROW AND COLOMN
//             var myNewH2=document.createElement("div");
//             myNewH2.className='div_boss';
//             document.getElementById("root2").appendChild(mynewH1);
//         myNewH2.style.width="100px";
//         myNewH2.style.height="100px";
//         myNewH2.style.border="5px solid red";
//         console.log(myNewH2);
//         myNewH2.style.flexDirection="column"
//         mynewH1.append(myNewH2);

//         // GENERATE RANDOM NUMBER AND PUT THEM
//         const randomIndex = getRndInteger(0,9);
//             let text=document.createTextNode(randomIndex);

//             myNewH2.append(text);

//       myNewH2.style.fontSize="30px";
//       myNewH2.style.alignItems="center";
//     }
    
//     console.log(myNewH2);
//     }

    // function getRndInteger(min,max){
    //         return Math.floor(Math.random()*(max-min+1));
    //     }
// }


function ResetElement(){
    for(let i=1;i<=13;i++){
        document.getElementById('child'+i).style.backgroundColor='chocolate';
    }
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
    score=0;
    l=0;
    l2=0;
    count_green2=0;
    count_green3=0;
    check_Enter_if=0;
}


// FOR 2X2

// document.getElementById('child1').innerHTML=Rnd1();

function getRndInteger(min,max){
    return  Math.floor((Math.random() * 4) + 1);
}

let a=new Array(4);
let c=new Array(4);
let b=new Array(9);
let d=new Array(9);
// GENERATE RANDOM NO FOR 2X2 MATRIX

function Rnd1(){
    
    alert('YOU WILL GET ONLY 2 CHANCES');
    for(let i=1;i<=4;i++){
        const rand=getRndInteger(1,4);
        a[i]=rand;
        c[i-1]=rand;
        document.getElementById('child'+i).innerText=rand;  
    }
    c.sort(function(a, b){return b-a});
    console.log(c);
    c.reverse();
    console.log(c);
    
    const btn=document.getElementsByClassName('box2');
//    IT IS USE OF HIDE THE NUMBER AFTER 1 SEC
    setTimeout(()=>{
     for(let i=0;i<4;i++){
         console.log(btn[i]);
         btn[i].innerHTML="";
     }
    },1000);

    
    setTimeout(()=>{
        for(let i=1;i<=4;i++){
            document.getElementById('child'+i).style.backgroundColor='chocolate';
        }
     })
     
}


// // GENERATE RANDOM NO FOR 3X3 MATRIX
function Rnd2(){
    alert('YOU WILL GET ONLY 3 CHANCES');
    for(let i=5;i<=13;i++){
        const rand=getRndInteger(1,9);
        b[i]=rand;
        d[i-1]=rand;
        document.getElementById('child'+i).innerText=rand; 
    }
    d.sort();
    const btn=document.getElementsByClassName('box3');
//    IT IS USE OF HIDE THE NUMBER AFTER 1 SEC
    setTimeout(()=>{
        for(let i=0;i<9;i++){
            console.log(btn[i]);
            btn[i].innerHTML="";
        }
       },3000)
    
     setTimeout(()=>{
        for(let i=5;i<=13;i++){
            document.getElementById('child'+i).style.backgroundColor='chocolate';
        }
     })
    
}


Array.from(document.getElementsByClassName('box2')).forEach((ele)=>{
    ele.addEventListener('click',checkCorrectNumber1);
})
Array.from(document.getElementsByClassName('box3')).forEach((ele)=>{
    ele.addEventListener('click',checkCorrectNumber2);
})


let score=0;
let l=0;
let count_green2=0;
let check_Enter_if=0;
function checkCorrectNumber1(event){
    let id=event.target.id;
    let arr_index=+id.split('')[5];
    if(a[arr_index]==c[0]){ 
        event.target.style.backgroundColor='green';
        event.target.innerHTML='&#128526;';  
        score=score+25;
        count_green2=count_green2+1;
        check_Enter_if++;
        setTimeout(()=>{
            if(count_green2==4){
                score_board();
                ResetElement();
            }
        },1000)
        c.shift();
    }else{
        if(l==0){
            score=score-25;
            event.target.style.backgroundColor='red';
        event.target.innerHTML='&#128561;'; 
        alert('You have only 2 chance is left');
        event.target.style.backgroundColor='chocolate';
        setTimeout(()=>{
            event.target.innerHTML=''; 
        },1000);
        }
        if(l==1){
            score=score-25;
            event.target.style.backgroundColor='red';
        event.target.innerHTML='&#128561;'; 
        alert('You have only 1 chance is left');
        event.target.style.backgroundColor='chocolate';
        setTimeout(()=>{
            event.target.innerHTML=''; 
        },1000);
        }
        
        
        if(l==2){
            event.target.style.backgroundColor='red';
        event.target.innerHTML='&#128520;';
        Mess_GameOver();
        }

        l++;
          
    }
    
    
    
    // if(a[arr_index]==c[0]){
    //     event.target.style.backgroundColor='green';
    //     event.target.innerHTML='&#128540;';
    //     c.shift();
    // }else{
    //     event.target.style.backgroundColor='red';
    //     event.target.innerHTML='&#128520;';
    //     setTimeout(()=>{
    //         alert("Sorry, You choice is wrong");
        
    //         if(confirm("You want to play again?")){
    //             ResetElement();
    //         }else{
    //             alert('Game over');
    //         }
            
    //     },1000); 
    // }
   
    // console.log(arr_index)
}

let l2=0;
let count_green3=0;
function checkCorrectNumber2(event){
   
    let id=event.target.id;
    let arr_index=+id.split('')[5];
    if(b[arr_index]==d[0]){
        event.target.style.backgroundColor='green';
        event.target.innerHTML=' &#128526;';
        score=score+25;
        count_green3=count_green3+1;
        check_Enter_if++;
        setTimeout(()=>{
            if(count_green3==9){
                score_board();
                ResetElement();
            }
        },1000)
        
        c.shift();
    }else{
        if(l2==0){
            score=score-5;
            event.target.style.backgroundColor='red';
        event.target.innerHTML='&#128561;'; 
        alert('You have only 3 chance is left');
        event.target.style.backgroundColor='chocolate';
        setTimeout(()=>{
            event.target.innerHTML=''; 
        },1000);
        }
        if(l2==1){
            score=score-7;
            event.target.style.backgroundColor='red';
        event.target.innerHTML='&#128561;'; 
        alert('You have only 2 chance is left');
        event.target.style.backgroundColor='chocolate';
        setTimeout(()=>{
            event.target.innerHTML=''; 
        },1000);
        }
        if(l2==2){
            score=score-10;
            event.target.style.backgroundColor='red';
        event.target.innerHTML='&#128561;'; 
        alert('You have only 1 chance is left');
        event.target.style.backgroundColor='chocolate';
        setTimeout(()=>{
            event.target.innerHTML=''; 
        },1000);
        }
        if(l2==3){
            event.target.style.backgroundColor='red';
        event.target.innerHTML='&#128520;';
        Mess_GameOver();
        }
        
        l2++;       
    }
}

function Mess_GameOver(){
    setTimeout(()=>{
        alert("Sorry, You have no more chances");
        if(check_Enter_if==0){
            alert('YOUR SCORE IS : '+check_Enter_if)
        }
        else{
            alert('YOUR SCORE IS : '+score);
        }
        if(confirm("You want to play again?")){
            ResetElement();
        }else{
            window.location="signin.html";
        }
        
    },1000); 
}

function score_board(){
    alert('Game Over');
    if(check_Enter_if==0){
        alert('YOUR SCORE IS : '+check_Enter_if)
    }
    else{
        alert('YOUR SCORE IS : '+score);
    }
}




// TO CHECK INPUT NUMBER IS CORRECT OR NOT

// FOR 2X2

function Run_to_check1(){
    let sum1=new Array(4);
     sum1[0]=sum1;
     sum1[1]=sum2;
     sum1[2]=sum3;
     sum1[3]=sum4;
     
//     let count=1;
//     let n=0;
//     for(let i=1;i<=2;i++){
//         for(let j=1;j<=2;j++){
//             if(sum1[n]==a[count]){
//                     document.getElementById(`child${count}`).style.backgroundColor='green';
//                 }else{
//                     document.getElementById(`child${count}`).style.backgroundColor='red';
//                 }
//                 count++;
//                 n++;
//         }
//     }
    
    // if(col1_row1==a[1]){
    //     document.getElementById('child1').style.backgroundColor='green';
    // }else{
    //     document.getElementById('child1').style.backgroundColor='red';
    // }

    // if(col1_row2==a[2]){
    //     document.getElementById('child2').style.backgroundColor='green';
    // }else{
    //     document.getElementById('child2').style.backgroundColor='red';
    // }
    // if(col2_row1==a[3]){
    //     document.getElementById('child3').style.backgroundColor='green';
    // }else{
    //     document.getElementById('child3').style.backgroundColor='red';
    // }
    // if(col2_row2==a[4]){
    //     document.getElementById('child4').style.backgroundColor='green';
    // }else{
    //     document.getElementById('child4').style.backgroundColor='red';
    // } 
}

// FOR 3x3



function Run_to_check2(){
    // let sum2=new Array(9);
    //  sum2[0]=sum5;
    //  sum2[1]=sum6;
    //  sum2[2]=sum7;
    //  sum2[3]=sum8;
    //  sum2[4]=sum9;
    //  sum2[5]=sum10;
    //  sum2[6]=sum11;
    //  sum2[7]=sum12;
    //  sum2[8]=sum13;
    // let count=5;
    // let n=0;
    // for(let i=1;i<=3;i++){
    //     for(let j=1;j<=3;j++){
    //         if(sum2[n]==b[count]){
    //                 document.getElementById(`child${count}`).style.backgroundColor='green';
    //             }else{
    //                 document.getElementById(`child${count}`).style.backgroundColor='red';
    //             }
    //             count++;
    //             n++;
    //     }
    // }
}