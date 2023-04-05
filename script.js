
const keyBoard = document.getElementById('keyBoard');
const answerCellElement = document.querySelector('[answer-text]')
const operators = ['+', '-','÷','X','%'];

let operand1 = '';
let operand2 = '';
let operator = '';
let answer = '';
let previouskey = '';

keyBoard.addEventListener('click', handleClick);

function handleClick (event){

  const element = event.target.id;
    if(previouskey === '=' && (element>=0 && element <=9)){
      previouskey = element;
      resetCalculator();
    }

    previouskey = element;

    if(element === 'C' || element === 'AC' ){
      resetCalculator();
    }
    else if(element === '='){
      calculateAnswer();
    }
    else if(element>=0 && element <=9 || element === '.'){
        if(operand1.length === 0 || operand1.length > 0  &&  operator.length === 0 ){
          operand1 = operand1.concat(element);
          answerCellElement.innerText = operand1;
        } else{
          operand2 = operand2.concat(element);
          answerCellElement.innerText = operand2;
        }
    } 
    else if(operators.includes(element)){
        operator=operator.concat(element); 
    }
}

function resetCalculator(){
  answerCellElement.innerText = 0;
  operand2 = '';
  operator = '';
  operand1 = '';
  answer = '';
}

function calculateAnswer() {

  if( operator === '+'){
    answer = answer.concat(+operand1 + +operand2);
  }
  else if( operator === '-'){
    answer = answer.concat(+operand1 - +operand2);
  }
  else if( operator === '÷'){
    answer = answer.concat(+operand1 / +operand2);
  }
  else if( operator === 'X'){
    answer = answer.concat(+operand1 * +operand2);
  }
  else if( operator === '%'){
    answer = answer.concat( (+operand1 /+operand2)*100);
  }

  if(answer){
    let finalAnswer = +answer;
    if(answer.length>13){
      answerCellElement.innerText = finalAnswer.toExponential(4);
    } else {
      answerCellElement.innerText = answer;
    }
      
    operand2 = '';
    operator = '';
    operand1 = '';
    operand1 = operand1.concat(answer);
    answer = '';
  }
}