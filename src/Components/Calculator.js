import './Calculator.css'
import { useState } from 'react';

const Calculator = () => {
    const [inputValue, setInputValue] = useState("0")// state เก็บค่าตัวเลขที่กดปุ่ม เป็น String


    const display = (value) => { //ส่งค่าตัวเลขและตัวดำเนินการ มาเก็บลงใน state inputValue
        if (inputValue.toString().charAt(0) === "0") { //เช็คตัวอักษรตัวเลขว่าเป็นเลข 0 หรือเปล่า
            setInputValue(value) // ถ้าเป็นเลข 0 ให้กำหนดค่าใหม่
        } else {
            setInputValue(inputValue + value) //ตัวเลขหลักก่อนหน้า มา + กับ เลขถัดไป
        }
    }

    const clearValue = () => { //clearค่าตัวเลข
        setInputValue("0")
    }

    const calculate = () => { //คำนวณตัวเลข 
        // eslint-disable-next-line
        const result = eval(inputValue)
        setInputValue(result) //นำตัวแปร ไปเก็บลงใน state value
    }

    return (
        <div className="calculator">
            <div className="calculator_display">
                <h1>{inputValue}</h1>
            </div>
            <div className="calculator_button">
                <button className="operator" onClick={() => display("+")}>+</button>
                <button className="operator" onClick={() => display("-")}>-</button>
                <button className="operator" onClick={() => display("*")}>x</button>
                <button className="operator" onClick={() => display("/")}>÷</button>
                <button onClick={() => display("7")}>7</button>
                <button onClick={() => display("8")}>8</button>
                <button onClick={() => display("9")}>9</button>
                <button onClick={() => display("4")}>4</button>
                <button onClick={() => display("5")}>5</button>
                <button onClick={() => display("6")}>6</button>
                <button onClick={() => display("1")}>1</button>
                <button onClick={() => display("2")}>2</button>
                <button onClick={() => display("3")}>3</button>
                <button onClick={() => display(".")}>.</button>
                <button onClick={() => display("0")}>0</button>
                <button className="clear_btn" onClick={clearValue}>C</button>
                <button className="equal operator" onClick={calculate}>=</button>
            </div>
        </div>
    )
}
export default Calculator