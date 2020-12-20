var This_Col
var TD_arr = document.querySelectorAll('.little-col')

/* for (i=0 ; i < TD_arr.length ; i++){
TD_arr[i].innerText = i
} */



function Level(){

if (event.target.value == "Лёгкий") Easy()
if (event.target.value == "Средний") Medium()
if (event.target.value == "Сложный") Hard()

}

function Easy(){

document.querySelector("#Start").hidden = false

}

function Medium(){

document.querySelector("#Start").hidden = false

}

function Hard(){

document.querySelector("#Start").hidden = false

}

function Show_Square() {

document.querySelector('.Tabl').style.visibility = 'visible'

}

function Start_Game(){

Start.addEventListener('click', Show_Square)

}

Start_Game()

function ShowColButton(){

if (event.target.textContent != "") return null

This_Col = event.target

i = 0

while (i <= document.querySelector('.SetNumber').childNodes.length - 1) {

if (document.querySelector('.SetNumber').childNodes[i].nodeName == "OPTION") {

document.querySelector('.SetNumber').childNodes[i].style.color = 'blue'

}
i++
}

document.querySelector('.SetNumber').style.visibility = 'visible'

}

function HandlerSetNumber() {

if (event.target.value != "Выбрать цифру") {


event.target.style.color = 'blue'
document.querySelector('.SayOk').style.visibility = 'visible'

}

}

function ClickOnSetNumber() {

document.querySelector('.SetNumber').addEventListener('click', HandlerSetNumber)

}

ClickOnSetNumber()

function HandlerSayOk(number) {


// Индексы блока и ячейки
let This_Ind_Block
let This_Ind_Col

//опредялем индекс ячейки в TD_arr (Переменная index)
//ее блок (Переменная This_Ind_Block)
//индекс ячейки в блоке (Переменная This_Ind_Col)
for(i=0 ; i<TD_arr.length ; i++){
if (TD_arr[i] == This_Col){
index = i
This_Ind_Block = Math.floor(i / 9)
This_Ind_Col = i % 9
break
}
}


//проверим сам блок
index_start_block = This_Ind_Block * 9
index_end_block = (This_Ind_Block+1) * 9 - 1

for (i = index_start_block;i <= index_end_block;i++){

if (i == index){
continue
}

if (TD_arr[i].innerText == number){
//ошибка , число стоит неправильно

This_Col.style.color = 'red'

}
}



//проверять горизонталь
current_bloks_line = Math.floor(index / 27)
current_line_in_block = Math.floor(This_Ind_Col / 3)

//console.log(current_bloks_line) // индекс линии блока
//console.log(current_line_in_block) // индекс линии с ячейками в блоке

if (current_bloks_line == 0) {

let Vertical_Index_Start_Block = This_Ind_Block
let Vertical_Index_Start_Col = This_Ind_Col % 3

i = 1
  
  while (i <= 3) {

m = 1

 while (m <= 3) {

if (TD_arr[Vertical_Index_Start_Col + (Vertical_Index_Start_Block * 9)].innerText == number) This_Col.style.color = 'red'

  Vertical_Index_Start_Col += 3
  m++
 }


    Vertical_Index_Start_Col -= 9
    Vertical_Index_Start_Block += 3
    i++
  }

}

if (current_bloks_line == 1) {

let Vertical_Index_Start_Block = This_Ind_Block - 3
let Vertical_Index_Start_Col = This_Ind_Col % 3

i = 1

  while (i <= 3) {

m = 1

  while (m <= 3) {

if (TD_arr[Vertical_Index_Start_Col + (Vertical_Index_Start_Block * 9)].innerText == number) This_Col.style.color = 'red'

    Vertical_Index_Start_Col += 3
    m++
  }

    Vertical_Index_Start_Col -= 9
    Vertical_Index_Start_Block += 3
    i++
  }

}

if (current_bloks_line == 2) {

  let Vertical_Index_Start_Block = This_Ind_Block - 6
  let Vertical_Index_Start_Col = This_Ind_Col % 3
  
  i = 1
    
    while (i <= 3) {
  
  m = 1
  
   while (m <= 3) {
  
  if (TD_arr[Vertical_Index_Start_Col + (Vertical_Index_Start_Block * 9)].innerText == number) This_Col.style.color = 'red'
  

    Vertical_Index_Start_Col += 3
    m++
   }
  
  
      Vertical_Index_Start_Col -= 9
      Vertical_Index_Start_Block += 3
      i++
    }

}

Gorizontal_Index_Start_Block = This_Ind_Block
Gorizontal_Index_Start_Col = This_Ind_Col

i = This_Ind_Block


 while (i % 3 != 0) {

i--

}

Gorizontal_Index_Start_Block = i



i = This_Ind_Col


  while (i % 3 != 0) {

i--

}

Gorizontal_Index_Start_Col = i



  i = 1

    while (i <= 3) {

m = 1

  while (m <= 3) {

if (TD_arr[Gorizontal_Index_Start_Col + (Gorizontal_Index_Start_Block * 9)] == This_Col) Gorizontal_Index_Start_Col++

if (Gorizontal_Index_Start_Col % 3 == 0 && Math.floor(Gorizontal_Index_Start_Col / 3) != current_line_in_block) break

if (TD_arr[Gorizontal_Index_Start_Col + (Gorizontal_Index_Start_Block * 9)].innerText == number) This_Col.style.color = 'red'

//console.log(TD_arr[Gorizontal_Index_Start_Col + (Gorizontal_Index_Start_Block * 9)])

Gorizontal_Index_Start_Col++
m++

  }

      Gorizontal_Index_Start_Col -= 3
      Gorizontal_Index_Start_Block++
      i++
    }

/* 🠕🠕🠕🠕🠕🠕🠕
Проверка блока
*/



This_Col.textContent = document.querySelector('.SetNumber').value

document.querySelector('.SayOk').style.visibility = 'hidden'

document.querySelector('.SetNumber').value = "Выбрать цифру"

document.querySelector('.SetNumber').style.visibility = 'hidden'

This_Col.removeEventListener('click', ShowColButton)

}

function ClickOnSayOk() {

document.querySelector('.SayOk').addEventListener('click',function (){  HandlerSayOk (document.querySelector('.SetNumber').value ) } )

}

function GetAllCol() {

Get_Col = document.querySelectorAll('.little-col')

i = 0

while (i <= Get_Col.length - 1){

Get_Col[i].addEventListener('click', ShowColButton)

i++

}

}

function create_sudoku(){
square = 9

//разбираемся с единичками
//генерим первую ячейку
index = Math.round(Math.random() * 8)
TD_arr[index] = '1'

}

function clearSudoku(){
  for ( let i = 0; i < TD_arr.length ; i++){
    TD_arr[i].innerText = ''
  }
}

function fillSudoku(){
  iter = 0
  function fill(){

    for(let i = 0; i < TD_arr.length ; i ++){
      This_Col = TD_arr[i]

      count = 0
      while (true){
        This_Col.style.color = "black"
        let number = Math.round(Math.random()*9)
        document.querySelector('.SetNumber').value = number
        HandlerSayOk(number)
        
        if (This_Col.style.color != 'red'){
          break
        }
        
        if (count == 100){
          //Очистить поле судоку , и еще раз запсутить функцию
          clearSudoku()
          return
        }
        count = count + 1
        
      }
    }
    return true
  }

  while (true){
    console.log(iter)
    if (fill()){
      return
    }
    i = i + 1
  }

  //очистить случайные ячейки

}



ClickOnSayOk()
GetAllCol()