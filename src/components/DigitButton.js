import React from 'react'
import { useDispatch } from 'react-redux'
import { addDigit } from '../store/calculatorSlice';

const DigitButton = ({ digit }) => {
    const dispatch = useDispatch();
    return (
        <button className="digits" onClick={() => dispatch(addDigit(digit))}>{digit}</button>
    )
}

export default DigitButton