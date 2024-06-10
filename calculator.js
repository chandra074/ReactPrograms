let btn = document.getElementsByTagName('button')
let res = document.getElementById('result')
for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        // console.log(this)
        let input = this.innerText
        updateDisplay(input)
    }
}
function updateDisplay(input) {
    let pkey = res.innerText
    if (pkey == '0') {
        if (input != 'C' && input != 'DEL' && input != '=') {
            res.innerText = ''
            res.innerText = input
        }
    }
    else {
        if (input == 'DEL') {
            res.innerText = pkey.substring(0, pkey.length - 1)
            if (res.innerText == '') {
                res.innerText = '0'
            }
        }
        if (input == 'C') {
            res.innerText = '0'
        }
        if (input != 'C' && input != 'DEL' && input != '=') {
            res.innerText += input
        }
        if (input == '=') {
            let display = res.innerText
            res.innerText = eval(display)
        }
    }
}