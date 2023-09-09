import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [operand1, setOperand1] = useState("")
    const [operand2, setOperand2] = useState("")
    const [operator, setOperator] = useState("")
    const [result, setResult] = useState("")
    const handleClick = (e) =>{
        if (operator === "") {
            setResult(result + e.target.getAttribute("name"))
        }
        if (e.target.getAttribute("name") === "+" || e.target.getAttribute("name") === "-" || e.target.getAttribute("name") === "*" || e.target.getAttribute("name") === "/") {
            setOperand1(result)
            setOperator(e.target.getAttribute("name"))
            setResult("")
        }
        if (operator !== "" && operand1 !== "") {
            setResult(result + e.target.getAttribute("name"))
            setOperand2(result)
        }
        if (e.target.getAttribute("name") === "=") {
            setResult("")
            if (operator === "+") {
                 let Finaloperand1 = (parseFloat(operand1))
                 let Finaloperand2 = (parseFloat(operand2))
                 let finalOperand = (Finaloperand1 + Finaloperand2).toString()
                setResult(finalOperand)
            }
            else if (operator === "-") {
                setResult((parseFloat(operand1) - parseFloat(operand2)).toString())
            }
            else if (operator === "*") {
                setResult((parseFloat(operand1) * parseFloat(operand2)).toString())
            }
            else if (operator === "/") {
                setResult((parseFloat(operand1) / parseFloat(operand2)).toString())
            }

        }
    }
    return (
        <>
            <div id="calculator">
                <h1 className="clac-name">CALCULATOR</h1>
                <div className="container">
                    <input type="text" className="display-ans" id="ans" value={result} onChange={handleClick} placeholder="0" />
                </div>
                <div className="buttons-container">
                    <div className="clac" name="AC" id="ac">AC</div>
                    <div className="clac" name="+/-" id="plus-minus">+/-</div>
                    <div className="clac" name="%" id="percent" onClick={handleClick}>%</div>
                    <div className="clac" name="/" id="divide" onClick={handleClick}>/</div>
                    <div className="clac" name="7" id="seven" onClick={handleClick}>7</div>
                    <div className="clac" name="8" id="eight" onClick={handleClick}>8</div>
                    <div className="clac" name="9" id="nine" onClick={handleClick}>9</div>
                    <div className="clac" name="*" id="multiply" onClick={handleClick}>*</div>
                    <div className="clac" name="4" id="four" onClick={handleClick}>4</div>
                    <div className="clac" name="5" id="five" onClick={handleClick}>5</div>
                    <div className="clac" name="6" id="six" onClick={handleClick}>6</div>
                    <div className="clac" name="-" id="minus" onClick={handleClick}>-</div>
                    <div className="clac" name="1" id="one" onClick={handleClick}>1</div>
                    <div className="clac" name="2" id="two" onClick={handleClick}>2</div>
                    <div className="clac" name="3" id="three" onClick={handleClick}>3</div>
                    <div className="clac" name="+" id="plus" onClick={handleClick}>+</div>
                    <div className="clac" name="0" id="zero" onClick={handleClick}>0</div>
                    <div className="clac" id="dot" onClick={handleClick}>.</div>
                    <div className="clac" name="=" id="equals" onClick={handleClick}>=</div>
                </div>
            </div>
        </>
    )
}
export default Calculator;
