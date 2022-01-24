let nums = document.querySelectorAll('.num')
let signs = document.querySelectorAll('.sign')
let clearElements = document.querySelectorAll('.remove-element')[0]
let removeElements = document.querySelectorAll('.remove-element')[1]
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
		if(
			!display.value ||
			( 	
				(typeof +display.value[display.value.length - 1]) === 'number' && 
				!isNaN(+display.value[display.value.length - 1]) &&
				this.operator 
			) || 
			display.value[display.value.length - 1] === '.'
		) return

		display.value = this.operator ? display.value.slice(0, display.value.length - 1) + value :  display.value + value
		this.operator = value
		this.isDot = false
	}

	dot(value) {
		if(
			this.isDot ||
			!display.value || 
			display.value[display.value.length - 1] === '.' ||
			this.operators.includes(display.value[display.value.length - 1])
		) return
	
		display.value = display.value + value
		this.isDot = true
	}

	calculate() {
		if(this.operators.includes(display.value[display.value.length - 1])) return
		const [ num1, num2 ] = display.value.split(this.operator)
		switch(this.operator) {
			case '+': {
				display.value = +num1 + +num2
				break
			}
			case '-': {
				display.value = num1 - num2
				break
			}
			case '✕': {
				display.value = num1 * num2
				break
			}
			case '÷': {
				display.value = num1 / num2
				break
			}
		}
		this.operator = null
		if(display.value.includes('.')) this.isDot = true
	}

	clear() {
		display.value = null
		this.operator = null
		this.isDot = false
	}

	remove () {
		if(display.value[display.value.length - 1] === '.') this.isDot = false
		if(this.operators.includes(display.value[display.value.length - 1])) this.operator = null
		display.value = display.value.slice(0, display.value.length - 1)
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

dot.onclick = () => calc.dot(dot.textContent)
equal.onclick = () => calc.calculate()
clearElements.onclick = () => calc.clear()
removeElements.onclick = () => calc.remove()



// numbers.addEventListener('click', calculator.numbers())


