import React from 'react'
import { useDispatch } from 'react-redux'
import { specialOperation } from '../store/calculatorSlice';

const SpecialButton = ({ operate }) => {
    const dispatch = useDispatch();
    return (
        <>
            {(operate === "10x") ?
                <button className="Grid-Border" onClick={() => dispatch(specialOperation(operate))}>10<sup>x</sup></button>
                : <button className="Grid-Border" onClick={() => dispatch(specialOperation(operate))}>{operate}</button>
            }
        </>
    )
}

export default SpecialButton