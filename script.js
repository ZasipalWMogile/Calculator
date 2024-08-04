const screen = document.querySelector('.screen');
const BtnNum = document.querySelectorAll('.calcBtnNumber');
const BtnSymbol = document.querySelectorAll('.CalcBtnSymbol');
const btnDel = document.querySelector('.CalcBtnDelete');
const btnClearAll = document.querySelector('.calcBtnClear');

const btnSolve = document.querySelector('.btnSolve');

let screen2 = screen.cloneNode(false);
let isFirstClick = true;
let symbolClik = true;

let btnNum = Array.from(BtnNum);
let btnSymbol = Array.from(BtnSymbol);

IndexChange(btnNum, 0, 9);
IndexChange(btnNum, 1, 6);
IndexChange(btnNum, 2, 7);
IndexChange(btnNum, 3, 8);
IndexChange(btnNum, 4, 8);
IndexChange(btnNum, 5, 8);
IndexChange(btnNum, 6, 8);
IndexChange(btnNum, 7, 9);

    
for (let a = 0; a < btnNum.length; a++ ){
    btnNum[a].addEventListener('click', OnClick(a), InfoShow())
    btnNum[a].addEventListener('click', InfoShow())
};

btnClearAll.addEventListener('click', RemovingSymb());
btnDel.addEventListener('click', function(){
    removeLastSymbolModel();

    InfoShow2();
});


btnSymbol[0].addEventListener('click', PLusModal());
btnSymbol[0].addEventListener('click', InfoShow());
btnSymbol[1].addEventListener('click', MinusModal());
btnSymbol[1].addEventListener('click', InfoShow());
btnSymbol[2].addEventListener('click', MultiplicationModal());
btnSymbol[2].addEventListener('click', InfoShow());
btnSymbol[3].addEventListener('click', DivisionModal());
btnSymbol[3].addEventListener('click', InfoShow());

btnSolve.addEventListener('click', SolveModal());

NumbersEntered = Array();
let NumForSolve1;
let is0Showed = true;

function IndexChange (Array, index1, index2){
    let temp = Array[index1];

    Array[index1] = Array[index2];

    Array[index2] = temp;
};

function OnClick (a) {
    return function () {
        console.log(a);

        if(isFirstClick){
            NumbersEntered.pop();
            NumbersEntered.push(a);
            console.log(NumbersEntered);
            isFirstClick = false;
            symbolClik = true

        }else{
            NumbersEntered.push(a);
            console.log(NumbersEntered);
            symbolClik = true;
        };
        
    };
};

function InfoShow(){
    return function (){
        screen.innerHTML = NumbersEntered.join('');
    };
};

function InfoShow2(){
    screen.innerHTML = NumbersEntered.join('');
};

function ClickNum (a){
    OnClick(a);
    InfoShow2();
};

function RemovingSymb () {
    return function(){
    isFirstClick = true;
    is0Showed = true;

    RemovingSymbModel();
    InfoShow2();
}
};

function removeLastSymbolModel () { 

    NumbersEntered.pop();

    if(NumbersEntered.length === 0){
        NumbersEntered = [0];
        isFirstClick = true;
    };

    console.log(NumbersEntered);
};

function RemovingSymbModel () {
   NumbersEntered = [0];
   SymbolInc = [0];

   console.log(NumbersEntered);
};


MathSolvSymb = Array();
let NumbersEnteredNUM;
let NumbersEnteredNUM2;
let MathSolvingNUM;
let plus;
let SolveSymb;
let SymbolInc =Array();


function SolveModal () {
    return function(){
    
        if(SolveSymb == '+'){

            NumbersEnteredNUM2 = parseInt(NumbersEntered.join(''), 10);
                
            console.log(NumbersEnteredNUM2); 

            Solve = NumbersEnteredNUM + NumbersEnteredNUM2;
            console.log(Solve);

            NumbersEntered = [Solve];
            console.log(NumbersEntered);

            screen.innerHTML = Solve;

            SymbolInc = [0];
            console.log(SymbolInc);
        } if (SolveSymb == '-'){

            NumbersEnteredNUM2 = parseInt(NumbersEntered.join(''), 10);
            console.log(NumbersEnteredNUM2); 

            Solve = NumbersEnteredNUM - NumbersEnteredNUM2;
            console.log(Solve);

            NumbersEntered = [Solve];
            console.log(NumbersEntered);

            screen.innerHTML = Solve;

            SymbolInc = [0];
            console.log(SymbolInc);
        } if (SolveSymb == '*'){

            NumbersEnteredNUM2 = parseInt(NumbersEntered.join(''), 10);
            console.log(NumbersEnteredNUM2); 

            Solve = NumbersEnteredNUM * NumbersEnteredNUM2;
            console.log(Solve);

            NumbersEntered = [Solve];
            console.log(NumbersEntered);

            screen.innerHTML = Solve;

            SymbolInc = [0];
            console.log(SymbolInc);

            
        } if (SolveSymb == '/') {

            NumbersEnteredNUM2 = parseInt(NumbersEntered.join(''), 10);
            console.log(NumbersEnteredNUM2); 

            Solve = NumbersEnteredNUM / NumbersEnteredNUM2;
            console.log(Solve);

            NumbersEntered = [Solve];
            console.log(NumbersEntered);

            screen.innerHTML = Solve;

            SymbolInc = [0];
            console.log(SymbolInc);
        }
    }
};

function PLusModal () {
    return function(){
        console.log(SymbolInc);
        console.log(!SymbolInc.includes('+') && !SymbolInc.includes('-') && !SymbolInc.includes('*') && !SymbolInc.includes('/'));
        if(!SymbolInc.includes('+') && !SymbolInc.includes('-') && !SymbolInc.includes('*') && !SymbolInc.includes('/')){
            if(isFirstClick ){
                console.log("Can`t sum");
            } if(symbolClik == false) {
                console.log("Can`t sum2");
            }else{
                NumbersEnteredNUM = parseInt(NumbersEntered.join(''), 10);
                
                console.log(NumbersEnteredNUM); 

                NumbersEntered = ['+'];
                

                NumbersEntered.push('+');

               

                InfoShow2();

                console.log(NumbersEntered); 
                
                SymbolInc = NumbersEntered.slice();
               
                console.log(SymbolInc, 'symbolInc');

                SolveSymb = NumbersEntered.pop();

                isFirstClick = true;
                symbolClik = false;
            };
        };
    };
};

function MinusModal () {
    return function(){
        
        if(!SymbolInc.includes('+') && !SymbolInc.includes('-') && !SymbolInc.includes('*') && !SymbolInc.includes('/')){
            if(isFirstClick){
                console.log("Can`t minus");
            } if(symbolClik == false) {
                console.log("Can`t sum2");
            }else {

                NumbersEnteredNUM = parseInt(NumbersEntered.join(''), 10);
                
                console.log(NumbersEnteredNUM); 

                NumbersEntered = ['-'];

                NumbersEntered.push('-');
                
                InfoShow2();

                console.log(NumbersEntered);

                SymbolInc = NumbersEntered.slice();
                console.log(SymbolInc, 'symbolInc');

                SolveSymb = NumbersEntered.pop();

                isFirstClick = true;
                symbolClik = false;
            };
        };
    };
};

function MultiplicationModal () {
    return function(){
        if(!SymbolInc.includes('+') && !SymbolInc.includes('-') && !SymbolInc.includes('*') && !SymbolInc.includes('/')){
            if(isFirstClick){
                console.log("Can`t multiplicate");
            }if(symbolClik == false) {
                console.log("Can`t sum2");
            } else {

                NumbersEnteredNUM = parseInt(NumbersEntered.join(''), 10);
                
                console.log(NumbersEnteredNUM); 

                NumbersEntered = ['*'];

                NumbersEntered.push('*');
                
                InfoShow2();

                console.log(NumbersEntered);

                SymbolInc = NumbersEntered.slice();
                console.log(SymbolInc, 'symbolInc');

                SolveSymb = NumbersEntered.pop();

                isFirstClick = true;
                symbolClik = false;
            };
        };
    };
};

function DivisionModal () {
    return function(){
        if(!SymbolInc.includes('+') && !SymbolInc.includes('-') && !SymbolInc.includes('*') && !SymbolInc.includes('/')){
            if(isFirstClick){
                console.log("Can`t divide");
            }if(symbolClik == false) {
                console.log("Can`t sum2");
            } else {

                NumbersEnteredNUM = parseInt(NumbersEntered.join(''), 10);
                
                console.log(NumbersEnteredNUM); 

                NumbersEntered = ['/'];

                NumbersEntered.push('/');
                
                InfoShow2();

                console.log(NumbersEntered);

                SymbolInc = NumbersEntered.slice();
                console.log(SymbolInc, 'symbolInc');

                SolveSymb = NumbersEntered.pop();

                isFirstClick = true;
                symbolClik = false;
            };
        };
    };
};