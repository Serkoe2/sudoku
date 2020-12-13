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

function HandlerSayOk() {

number = document.querySelector('.SetNumber').value
console.log(TD_arr)
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

console.log(index)
console.log(This_Ind_Block)
console.log(This_Ind_Col)

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

console.log(index)

//проверять горизонталь
current_bloks_line = Math.floor(index / 27)
current_line_in_block = Math.floor(This_Ind_Col / 3)

console.log(current_bloks_line) // индекс линии блока
console.log(current_line_in_block) // индекс линии с ячейками в блоке

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

console.log(TD_arr[Gorizontal_Index_Start_Col + (Gorizontal_Index_Start_Block * 9)])

Gorizontal_Index_Start_Col++
m++

  }

      Gorizontal_Index_Start_Col -= 3
      Gorizontal_Index_Start_Block++
      i++
    }

/*
//Активные гор. линия и таблица
This_tr = This_Col.parentNode
This_table = This_tr.parentNode

//для верт. проверки
This_tr_all_td = $(This_tr).children()
This_td_num = This_tr_all_td.index(This_Col)
console.log("----------num-------------------")
console.log(This_td_num)
console.log("------------------------------")

//для гор. проверки
This_table_all_tr = $(This_table).children()
console.log(This_table_all_tr)
This_tr_num = This_table_all_tr.index(This_tr)
console.log("-----------tr------------------")
console.log(This_tr_num)
console.log("------------------------------")

//номер таблицы
This_table_num = $(This_table.parentNode).children().index(This_table)
console.log("-----------table------------------")
console.log( This_table.parentNode)
console.log( document.querySelector('.little-col'))
console.log("------------------------------")
*/
/*
for (i = 0; i <= $(This_table).children().length - 1; i += 1) {

// Первым циклом перебираем "TR"

m = 0
while (m <= $(This_table).children()[i].childNodes.length - 1) {

// Вторым циклом перебираем "TD"

if ($(This_table).children()[i].childNodes[m].nodeName == 'TD' && $(This_table).children()[i].childNodes[m].textContent != "") {

Number_In_Block.push($(This_table).children()[i].childNodes[m])


}

m++
}



}*/

// Number_In_Block Массив Чисел в Блоке, если блок пуст и при этом запускается событие, то возвращает пустой массив



/*

Проверка блока
🠗🠗🠗🠗🠗🠗🠗 */
/*
if (Number_In_Block.length != 0) {

let m = 0
// Цикл для сравнения числа в блоке с ячейкой на которой срабатывает событие
do {

if (document.querySelector('.SetNumber').value == Number_In_Block[m].textContent) This_Col.style.color = 'red'


m++
}
while (m <= Number_In_Block.length - 1)

} */

/* 🠕🠕🠕🠕🠕🠕🠕
Проверка блока
*/



/*
let Big_Left_Block = [0, 3, 6]
let Big_Middle_Block = [1, 4, 7]
let Big_Right_Block = [2, 5, 8]

All_Block = [Big_Left_Block, Big_Middle_Block, Big_Right_Block]

This_Vertical_TD = []

for (i = 0; i <= All_Block.length - 1; i += 1) {

m = 0

while (m <= All_Block[i].length - 1) {

if (This_Ind_Block == All_Block[i][m]) {

for (m = 0; m <= All_Block[i].length - 1; m += 1) {

let Child_Call = document.querySelectorAll('TD')[All_Block[i][m] * 10]

for (j = 0; j <= 2; j++) {

Child_Call = $(Child_Call).children()

}

let Ind_TR_Child = 0

while (Ind_TR_Child < Child_Call.length) {

for (let Ind_TD_Child = 0; Ind_TD_Child <= $(Child_Call[Ind_TR_Child].childNodes).length - 1; Ind_TD_Child++) {

if ($(Child_Call[Ind_TR_Child].childNodes[Ind_TD_Child]).index() == This_td_num) {

if (Child_Call[Ind_TR_Child].childNodes[Ind_TD_Child].nodeName == 'TD') {

This_Vertical_TD.push(Child_Call[Ind_TR_Child].childNodes[Ind_TD_Child])

}

}

}
Ind_TR_Child += 1
}

}

}

m++
}



}

for (i = 0; i <= This_Vertical_TD.length - 1; i++) {

if (document.querySelector('.SetNumber').value == This_Vertical_TD[i].textContent) This_Col.style.color = 'red'

}

This_Horizontally_TD = []

let This_Big_TR = $(This_table).parents()[2]

m = 0
while (m <= 2) {
let This_Small_TR = $(This_Big_TR).children()[m]

while (This_Small_TR.nodeName != 'TBODY') {

This_Small_TR = $(This_Small_TR).children()[0]

}
j = 0
while (j <= $($(This_Small_TR).children()[This_tr_num]).children().length - 1) {

This_Horizontally_TD.push($($(This_Small_TR).children()[This_tr_num]).children()[j])

j++
}

m++
}

for (z = 0; z <= This_Horizontally_TD.length - 1; z++) {


if (This_Horizontally_TD[z] == This_Col && This_Col != This_Horizontally_TD[This_Horizontally_TD.length - 1]) {

z += 1

}

console.log(This_Horizontally_TD[z])

if (This_Horizontally_TD[z].textContent == document.querySelector('.SetNumber').value) This_Col.style.color = 'red'

}

 for (i = 0; i <= This_Col.parentNode.parentNode.childNodes.length - 1; i++) {

if (This_Col.parentNode.parentNode.childNodes[i].nodeName + "" != "#text") {

This_Block.push(This_Col.parentNode.parentNode.childNodes[i])

}

}

i = 0

GetNumberInBlock = []

do {

for (m = 0; m <= This_Block[i].childNodes.length - 1; m++) {

if (This_Block[i].childNodes[m].nodeName + "" != "#text" && This_Block[i].childNodes[m].textContent != "") {

GetNumberInBlock.push(This_Block[i].childNodes[m].textContent)

}

}

i++

}

while (i <= 2)

if (GetNumberInBlock.length != 0) {

for (m = 0; m <= GetNumberInBlock.length - 1; m++) {

if (document.querySelector('.SetNumber').value == GetNumberInBlock[m]) {

This_Col.style.color = 'red'
break

}

}

}

console.log(This_Col)

i = This_Col.parentNode

m = 0

while (m <= i.childNodes.length - 1) {

if (i.childNodes[m] == This_Col) {

let BigTr = []

let AllTr = document.querySelectorAll('tr')

Tr = 0
do {

BigTr.push(AllTr[Tr])

Tr += 10

}

while (Tr <= 20)

ArrTD = []

o = This_Col.parentNode

while (o.nodeName != "TD") {

o = o.parentNode

if (o.nodeName == 'TD') ArrTD.push(o)

}

for (j = 0; j <= BigTr.length - 1; j++) {

p = 0

while (p <= BigTr[j].childNodes.length - 1) {

if (BigTr[j].childNodes[p] == o) {

while (true) {

j++

ArrTD.push(BigTr[j].childNodes[p])

if (j == BigTr.length - 1) break

}

}
p++
}

}

var Arr_Small_Square = []

for (j = 0; j <= ArrTD.length - 1; j++) {

p = 0
while (p <= 5) {

if (ArrTD[j].childNodes[1].childNodes[1].childNodes[p].nodeName == "TR") {

console.log(ArrTD[j])

Small_Square = ArrTD[j].childNodes[1].childNodes[1].childNodes[p].childNodes[m]
Arr_Small_Square.push(Small_Square)


}


p++
}

}

}
m++
}

j = 0

do {

console.log(Arr_Small_Square)

j++
}

while (j <= Arr_Small_Square.length - 1) */

This_Col.textContent = document.querySelector('.SetNumber').value

document.querySelector('.SayOk').style.visibility = 'hidden'

document.querySelector('.SetNumber').value = "Выбрать цифру"

document.querySelector('.SetNumber').style.visibility = 'hidden'

This_Col.removeEventListener('click', ShowColButton)

}

function ClickOnSayOk() {

document.querySelector('.SayOk').addEventListener('click', HandlerSayOk)

}

ClickOnSayOk()

function GetAllCol() {

Get_Col = document.querySelectorAll('.little-col')

i = 0

while (i <= Get_Col.length - 1){

Get_Col[i].addEventListener('click', ShowColButton)

i++

}

}

GetAllCol()


function create_sudoku(){
square = 9

//разбираемся с единичками
//генерим первую ячейку
index = Math.round(Math.random() * 8)
TD_arr[index] = '1'

}