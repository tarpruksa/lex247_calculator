import React from 'react'
import "./styles.css";
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import SpecialButton from './components/SpecialButton';
import { useSelector, useDispatch } from 'react-redux';
import { clear, evaluate, deleteDigit, positiveOrNegative, clearHistory } from './store/calculatorSlice'

const formatDigit = require('./module/formatDigit')


function App() {
	const { calStore } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();


	return (
		<>
			<img className="header" src="https://fontmeme.com/permalink/220908/4b5bef17f3ddf569d4278c274bf5fe16.png" alt="head" />
			<div className="container">
				<div className="calculator">
					<div className="display">
						<div className="prevOperand">{formatDigit(calStore.prevOperand)} {calStore.operation}</div>
						<div className="curOperand">{formatDigit(calStore.curOperand)}</div>

					</div>

					<SpecialButton operate="x²" />
					<button onClick={() => dispatch(clear())}>AC</button>
					<button onClick={() => dispatch(deleteDigit())}>DEL</button>
					<button onClick={() => dispatch(positiveOrNegative())}>+/-</button>
					<OperationButton operation="÷" />
					<SpecialButton operate="10x" />

					<OperationButton operation="^" />
					<DigitButton digit="1" />
					<DigitButton digit="2" />
					<DigitButton digit="3" />
					<OperationButton operation="×" />
					<SpecialButton operate="sin" />

					<SpecialButton operate="√x" />
					<DigitButton digit="4" />
					<DigitButton digit="5" />
					<DigitButton digit="6" />
					<OperationButton operation="-" />
					<SpecialButton operate="cos" />

					<SpecialButton operate="x!" />
					<DigitButton digit="7" />
					<DigitButton digit="8" />
					<DigitButton digit="9" />
					<OperationButton operation="+" />
					<SpecialButton operate="tan" />

					<SpecialButton operate="%" />
					<DigitButton digit="0" />
					<DigitButton digit="." />
					<button className="spanTwo" onClick={() => dispatch(evaluate())}>=</button>
					<button className="clearHistory" onClick={() => dispatch(clearHistory())}>clear history</button>
					<div className="history">
						<ul>
							{calStore.longResult
								.slice(0, 10)
								.map((eachResult, i) => { return <li key={i}>{eachResult}</li> }
								)}
						</ul>

					</div>
				</div>
			</div>

		</>
	);
}

export default App;
