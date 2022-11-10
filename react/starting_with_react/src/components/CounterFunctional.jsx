import React, { useMemo, useState, useCallback } from 'react';

const CounterFunctional = () => {
	const [counter, setCounter] = useState(0);
	const [item, setItem] = useState(10);

const multiCountMemo = useMemo(()=>{
  return counter * 5;
},[counter])

const multiCountCallback = useCallback(()=>{
  return counter * 5; 
}, [counter])

	const updateCounter = () => {
		setCounter(counter + 1);
	};
	const updateItem = () => {
		setItem(item * 2);
	};

	return (
		<div>
			<h1>Functional Component</h1>
			<button onClick={updateCounter}> Update Count</button>
			<button onClick={updateItem}> Update Item</button>
      <br/>
			Counter: {counter}
      <br/>
			Item : {item}
      <br/>
      UseMemo Counter: {multiCountMemo}
      <br />
      UseCallback Counter: {multiCountCallback()}
		</div>
	);
};

export default CounterFunctional;
