// TO DO

var lastEquals = false;

var pushToFormula = function (val) {
  //define current formula
  var formula = document.getElementById('formula');

  //define current result
  var result = document.getElementById('result')

  //define last entry - number or operator...
  var lastEntry = formula.innerHTML[formula.innerHTML.length-1]

  if (lastEquals && typeof val == "number") {
    formula.innerHTML = ""
  }
  lastEquals = false

  //do not allow operator to be first in formula
  if (val == "+" || val == "-" || val == "*" ||  val =="/" ||  val == ".") {
    if (formula.innerHTML.length < 1) {
      return formula.innerHTML = ""
    }
  }
  //do not allow repeated operators
  if (val == "+" || val == "-" || val == "*" ||  val =="/" ||  val == ".") {
    if (lastEntry == "+" || lastEntry == "-" || lastEntry == "*" ||  lastEntry =="/" ||  lastEntry == ".") {
      return formula.innerHTML += ""
    }
  }

  return formula.innerHTML += val

}

var renderResult = function () {
  var evaluatedFormula = eval(document.getElementById('formula').innerHTML)
  var result = document.getElementById('result')
  if (document.getElementById('formula').innerHTML == evaluatedFormula) {
    return result.innerHTML = ""
  }
  return result.innerHTML = evaluatedFormula
}

function digitLimmit() {
  if (document.getElementById('formula').innerHTML.length > 10) {
    document.getElementById('result').innerHTML = "Digit Limmit Met"
    document.getElementById('formula').innerHTML = ""
  }
}


document.getElementById('num-0').onclick = function() {
  pushToFormula(0)
  renderResult()
  digitLimmit()
}

document.getElementById('num-1').onclick = function() {
  pushToFormula(1)
  renderResult()
  digitLimmit()
}

document.getElementById('num-2').onclick = function() {
  pushToFormula(2)
  renderResult()
  digitLimmit()
}

document.getElementById('num-3').onclick = function() {
  pushToFormula(3)
  renderResult()
  digitLimmit()
}

document.getElementById('num-4').onclick = function() {
  pushToFormula(4)
  renderResult()
  digitLimmit()
}

document.getElementById('num-5').onclick = function() {
  pushToFormula(5)
  renderResult()
  digitLimmit()
}

document.getElementById('num-6').onclick = function() {
  pushToFormula(6)
  renderResult()
  digitLimmit()
}

document.getElementById('num-7').onclick = function() {
  pushToFormula(7)
  renderResult()
  digitLimmit()
}

document.getElementById('num-8').onclick = function() {
  pushToFormula(8)
  renderResult()
  digitLimmit()
}

document.getElementById('num-9').onclick = function() {
  pushToFormula(9)
  renderResult()
  digitLimmit()
}

document.getElementById('ADD').onclick = function() {
  pushToFormula("+")
  digitLimmit()
}

document.getElementById('SUBTRACT').onclick = function() {
  pushToFormula("-")
  digitLimmit()
}

document.getElementById('MULTIPLY').onclick = function() {
  pushToFormula("*")
  digitLimmit()
}

document.getElementById('DIVIDE').onclick = function() {
  pushToFormula("/")
  digitLimmit()
}

document.getElementById('DECIMAL').onclick = function() {
  pushToFormula(".")
  digitLimmit()
}

document.getElementById('CLR').onclick = function() {
  document.getElementById('formula').innerHTML = ""
  document.getElementById('result').innerHTML = ""
}

document.getElementById('EQUALS').onclick = function() {
  lastEquals = true
  if (document.getElementById('result').innerHTML.length > 0) {
    document.getElementById('formula').innerHTML = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = ""
  }

}