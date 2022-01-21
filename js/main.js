let nums = document.querySelectorAll('.num')
let signs = document.querySelectorAll('.sign')
let clearElements = document.querySelector('.remove-element')[0]
let removeElements = document.querySelector('.remove-element')[1]
let dot = document.querySelector('.dot')
let equal = document.querySelector('.equal')
let input = document.querySelector('#display')



class Calculator {
	operators = ['+', '-', 'X', '%']
	operator = null
	isDot = false

	num(value) {
		if(input.value.length == 1 &&
			input.value[0] == '0'
		) input.value = value
	
		else if ( 
			input.value.slice(-2, -1)[0] == this.operator && 
			input.value[input.value.length - 1] == 0
		) input.value = input.value.slice(0, input.value.length - 1) + value

		else display.value = display.value + value
	}

	sign(value) {
		
	}



}

let calc = new Calculator()


for(let num of nums) {
	num.onclick = () => {
		calc.num(num.textContent)
	}
}

for(let sign of signs) {
	sign.onclick = () => {
		calc.sign(sign.textContent)
	}
}

// numbers.addEventListener('click', calculator.numbers())


