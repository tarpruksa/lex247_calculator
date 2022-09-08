import React from 'react'
import { useDispatch } from 'react-redux'
import { chooseOperation } from '../store/calculatorSlice';

const OperationButton = ({ operation }) => {
    const dispatch = useDispatch();
    return (
        <>
            {(operation === "^") ?
                <button className="Grid-Border" onClick={() => dispatch(chooseOperation(operation))}>x<sup>y</sup></button>
                : <button onClick={() => dispatch(chooseOperation(operation))}>{operation}</button>}
        </>
    )
}

export default OperationButton