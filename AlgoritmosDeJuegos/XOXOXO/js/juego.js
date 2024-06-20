const caja0 = document.getElementById("0")
const caja1 = document.getElementById("1")
const caja2 = document.getElementById("2")
const caja3 = document.getElementById("3")
const caja4 = document.getElementById("4")
const caja5 = document.getElementById("5")
const caja6 = document.getElementById("6")
const caja7 = document.getElementById("7")
const caja8 = document.getElementById("8")
const ganado = document.getElementById("ganador")

let xo = ["X", "O"]
let turno = [0]
let cajas = [caja0.textContent, caja1.textContent, caja2.textContent, caja3.textContent, caja4.textContent, caja5.textContent, caja6.textContent, caja7.textContent, caja8.textContent]
let cajasContent = [
    caja0,
    caja1,
    caja2,
    caja3,
    caja4,
    caja5,
    caja6,
    caja7,
    caja8
]


function empate() {
    if (cajas.includes("") == false) {
        return true
    }
    return false

}
function ganador(valor) {
    if (cajas[0] === valor) {
        if (cajas[4] === valor) {
            if (cajas[8] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    if (cajas[0] === valor) {
        if (cajas[1] === valor) {
            if (cajas[2] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    if (cajas[0] === valor) {
        if (cajas[3] === valor) {
            if (cajas[6] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    if (cajas[1] === valor) {
        if (cajas[4] === valor) {
            if (cajas[7] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    if (cajas[6] === valor) {
        if (cajas[4] === valor) {
            if (cajas[2] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    if (cajas[2] === valor) {
        if (cajas[5] === valor) {
            if (cajas[8] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    if (cajas[6] === valor) {
        if (cajas[7] === valor) {
            if (cajas[8] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    if (cajas[3] === valor) {
        if (cajas[4] === valor) {
            if (cajas[5] === valor) {

                // ganado.innerText = valor + " es el ganador"
                return true
            }
        }
    }

    return
}

function mejor_movimiento(cajas) {
    let best_score = -2
    let move = null
    for (let i = 0; i < 9; i++) {
        if (cajas[i] == "") {
            cajas[i] = "O"
            let score = minimax(cajas, 0, false)
            cajas[i] = ""
            if (score > best_score) {
                best_score = score
                move = i
                console.log(i)
            }
        }

    }
    console.log(move)
    return move
}

function movimiento(cajas, index, valor) {
    if (cajas[index] == "") {
        cajas[index] = valor
        return true
    }
    return false
}

function minimax(cajas, profundidad, maximizar) {
    if (ganador("O")) {
        return 1
    }
    if (ganador("X")) {
        return -1
    }
    if (empate()) {
        return 0
    }
    if (maximizar) {
        let best_score = -20
        for (let i = 0; i < 9; i++) {
            if (cajas[i] == "") {
                cajas[i] = "O"
                let score = minimax(cajas, profundidad + 1, false)
                cajas[i] = ""
                best_score = Math.max(score, best_score)
            }

        }
        return best_score
    }
    else {
        best_score = 20
        for (let i = 0; i < 9; i++) {
            if (cajas[i] == "") {
                cajas[i] = "X"
                let score = minimax(cajas, profundidad + 1, true)
                cajas[i] = ""
                best_score = Math.min(score, best_score)
            }

        }
        return best_score
    }
}
function YvsM() {
    cajasContent.forEach(item => {
        item.addEventListener("click", e => {
            if (item.textContent == "") {
                movimiento(cajas, item.id, "X")
                item.innerText = "X"
                if (cajas.includes("")) {
                    let move = mejor_movimiento(cajas)
                    movimiento(cajas, move, "O")
                    cajasContent[move].innerText = "O"
                    if (ganador("X")) {
                        return ganado.innerText = "El ganadoe es X"
                    }
                    else if (ganador("O")) {
                        return ganado.innerText = "El ganadoe es O"
                    }

                }
                else if (empate()) {
                    if (ganador("X")) {
                        return ganado.innerText = "El ganadoe es X"
                    }
                    else if (ganador("O")) {
                        return ganado.innerText = "El ganadoe es O"
                    }
                    else{

                        return ganado.innerText = "Empate"
                    }
                    
                }
                return
            }
            // item.innerText = xo[0]
            // movimiento(cajas,index, "X")
        })
    })

}

function YvsV(caja, index) {
    if (cajas[index] == "") {
        caja.innerText = xo[turnos()]
        cajas[index] = caja.textContent
        function ganador(valor) {
            empate()
            if (cajas[0] === valor) {
                if (cajas[4] === valor) {
                    if (cajas[8] === valor) {
                        console.log(valor, "es el ganador")
                        caja0.style.color = "rgb(215, 175, 71)"
                        caja0.style.textShadow = "7px 7px 5px"

                        caja4.style.color = "rgb(215, 175, 71)"
                        caja4.style.textShadow = "7px 7px 5px"

                        caja8.style.color = "rgb(215, 175, 71)"
                        caja8.style.textShadow = "7px 7px 5px"


                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }

            empate()
            if (cajas[0] === valor) {
                if (cajas[1] === valor) {
                    if (cajas[2] === valor) {
                        console.log(valor, "es el ganador")
                        caja0.style.color = "rgb(215, 175, 71)"
                        caja0.style.textShadow = "7px 7px 5px"

                        caja1.style.color = "rgb(215, 175, 71)"
                        caja1.style.textShadow = "7px 7px 5px"

                        caja2.style.color = "rgb(215, 175, 71)"
                        caja2.style.textShadow = "7px 7px 5px"

                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }
            empate()
            if (cajas[0] === valor) {
                if (cajas[3] === valor) {
                    if (cajas[6] === valor) {
                        console.log(valor, "es el ganador")
                        caja0.style.color = "rgb(215, 175, 71)"
                        caja0.style.textShadow = "7px 7px 5px"

                        caja3.style.color = "rgb(215, 175, 71)"
                        caja3.style.textShadow = "7px 7px 5px"

                        caja6.style.color = "rgb(215, 175, 71)"
                        caja6.style.textShadow = "7px 7px 5px"

                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }
            empate()
            if (cajas[1] === valor) {
                if (cajas[4] === valor) {
                    if (cajas[7] === valor) {
                        console.log(valor, "es el ganador")
                        caja1.style.color = "rgb(215, 175, 71)"
                        caja1.style.textShadow = "7px 7px 5px"

                        caja4.style.color = "rgb(215, 175, 71)"
                        caja4.style.textShadow = "7px 7px 5px"

                        caja7.style.color = "rgb(215, 175, 71)"
                        caja7.style.textShadow = "7px 7px 5px"

                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }
            empate()
            if (cajas[6] === valor) {
                if (cajas[4] === valor) {
                    if (cajas[2] === valor) {
                        console.log(valor, "es el ganador")
                        caja6.style.color = "rgb(215, 175, 71)"
                        caja6.style.textShadow = "7px 7px 5px"

                        caja4.style.color = "rgb(215, 175, 71)"
                        caja4.style.textShadow = "7px 7px 5px"

                        caja2.style.color = "rgb(215, 175, 71)"
                        caja2.style.textShadow = "7px 7px 5px"

                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }
            empate()
            if (cajas[2] === valor) {
                if (cajas[5] === valor) {
                    if (cajas[8] === valor) {
                        console.log(valor, "es el ganador")
                        caja2.style.color = "rgb(215, 175, 71)"
                        caja2.style.textShadow = "7px 7px 5px"

                        caja5.style.color = "rgb(215, 175, 71)"
                        caja5.style.textShadow = "7px 7px 5px"

                        caja8.style.color = "rgb(215, 175, 71)"
                        caja8.style.textShadow = "7px 7px 5px"

                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }
            empate()
            if (cajas[6] === valor) {
                if (cajas[7] === valor) {
                    if (cajas[8] === valor) {
                        console.log(valor, "es el ganador")
                        caja6.style.color = "rgb(215, 175, 71)"
                        caja6.style.textShadow = "7px 7px 5px"

                        caja7.style.color = "rgb(215, 175, 71)"
                        caja7.style.textShadow = "7px 7px 5px"

                        caja8.style.color = "rgb(215, 175, 71)"
                        caja8.style.textShadow = "7px 7px 5px"

                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }
            empate()
            if (cajas[3] === valor) {
                if (cajas[4] === valor) {
                    if (cajas[5] === valor) {
                        console.log(valor, "es el ganador")
                        caja3.style.color = "rgb(215, 175, 71)"
                        caja3.style.textShadow = "7px 7px 5px"

                        caja4.style.color = "rgb(215, 175, 71)"
                        caja4.style.textShadow = "7px 7px 5px"

                        caja5.style.color = "rgb(215, 175, 71)"
                        caja5.style.textShadow = "7px 7px 5px"

                        return ganado.innerText = valor + " es el ganador"
                    }
                }
            }

            return
        }
        function empate() {
            console.log(cajas)
            if (cajas.includes("") == false) {
                if (cajas[2], cajas[3], cajas[4], cajas[7], cajas[8] || cajas[1], cajas[2], cajas[3], cajas[4], cajas[8] === "O") {
                    if (cajas[0], cajas[5], cajas[6], cajas[7] || cajas[0], cajas[1], cajas[5], cajas[6] === "X") {
                        return ganado.innerText = "Empate"
                    }
                }
                if (cajas[0], cajas[4], cajas[5], cajas[6], cajas[7] || cajas[0], cajas[1], cajas[4], cajas[5], cajas[6] === "O") {
                    if (cajas[2], cajas[3], cajas[7], cajas[8] || cajas[1], cajas[2], cajas[3], cajas[8] === "X") {
                        return ganado.innerText = "Empate"
                    }
                }
                if (cajas[0], cajas[4], cajas[5], cajas[6], cajas[7] || cajas[0], cajas[4], cajas[5], cajas[6], cajas[1] === "O") {
                    if (cajas[2], cajas[3], cajas[8], cajas[1] || cajas[2], cajas[3], cajas[8], cajas[7] === "X")
                        return ganado.innerText = "Empate"
                }
                if (cajas[0], cajas[2], cajas[4], cajas[7], cajas[3] || cajas[0], cajas[2], cajas[4], cajas[7], cajas[5] === "O") {
                    if (cajas[1], cajas[6], cajas[8], cajas[3] || cajas[1], cajas[5], cajas[8], cajas[6] === "X")
                        return ganado.innerText = "Empate"
                }
                if (cajas[2], cajas[3], cajas[4], cajas[8], cajas[7] || cajas[2], cajas[3], cajas[4], cajas[8], cajas[1] === "O") {
                    if (cajas[0], cajas[5], cajas[6], cajas[1] || cajas[0], cajas[5], cajas[6], cajas[7] === "X")
                        return ganado.innerText = "Empate"
                }
                if (cajas[1], cajas[4], cajas[8], cajas[6], cajas[3] || cajas[1], cajas[4], cajas[8], cajas[6], cajas[5] === "O") {
                    if (cajas[2], cajas[0], cajas[7], cajas[3] || cajas[0], cajas[2], cajas[5], cajas[7] === "X")
                        return ganado.innerText = "Empate"
                }
                return
            }
            return
        }


        function turnos() {
            let random = (Math.random(10) * 1).toFixed(0)
            // console.log("Turn antes:",turno)
            console.log(random)
            if (turno[0] == 0 && random == 0) {
                turno[0]++
                // console.log("Turn despues:",turno)
                return turno
            }
            else if (turno[0] == 1 && random == 1) {
                turno[0] -= 1
                // console.log("Turn despues:",turno)
                return turno
            }
            else {
                turno[0] = random
                // console.log("Turn despues:",turno)
                return turno
            }
        }
        ganador(caja.innerText)
    }
    return
}
YvsM()
// let hola=5
// let mundo=5
// if (hola,mundo===5){
//     console.log(5)
// }
// else{
//     console.log(0)
// }
console.log(cajas.includes(""))
