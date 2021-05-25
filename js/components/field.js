"use strict";



const field = document.querySelector('.field');
let squaresArr = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",""];
let empty = 0;

// Копия изначального масива для сравнения условия победы
let winArr = squaresArr.slice();

// перетасовка масива
function shuffleArr(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}


// рендерим перетасованый масив значений  
function renderSquares (){
    squaresArr.forEach(element => {
        let square = document.createElement('div');
        square.textContent = element;
        field.append(square);
    });
}

// Поиск пустого элемента масива 
function isEmptySquare(square, index){

    if(square.textContent == ""){

        square.textContent = ""
        square.classList.add("empty");
        empty = index;
    }
}


function replaceSquares(target,index){

    empty = index;
    
    let beforeReplaceSquare = target;
    let beforeReplaceEmpty = document.querySelector(".empty");
    let square;

    square = beforeReplaceSquare.textContent;
   
    beforeReplaceSquare.innerHTML = "";
    beforeReplaceSquare.classList.add('empty');

    beforeReplaceEmpty.classList.remove('empty');
    beforeReplaceEmpty.textContent = square;
    
}

// Проверка на равенство изначального масива значений с нынешним 
function isWin(){
    let arrWinConditional = [];

    for(let i = 0; i < squares.length ; i++){
        arrWinConditional.push(squares[i].textContent);
    }

   if(JSON.stringify(arrWinConditional) === JSON.stringify(winArr)){
       alert("You win!");
   }
}


shuffleArr(squaresArr);
renderSquares();

const squares = document.querySelectorAll(".field div");

function moveSquare(){

    squares.forEach( (element, index) => {

        isEmptySquare(element,index);
        
        element.addEventListener('click', (e) => {

            // Проверка на угловые значения 5, 9, 8, 12 
            if  (  (index % 4) - (empty % 4) !== 3  && (index % 4) - (empty % 4) !== -3 ){

                // Проверка на квадраты только вокруг
                if ( index == empty - 1 || index == empty + 1  || index == empty - 4  || index == empty + 4 ){
    
                    replaceSquares(e.target,index);
                    isWin();
                }
            }
        })
    });

}

moveSquare();

