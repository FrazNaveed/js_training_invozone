import React, { useState } from 'react';
import Counter from './components/Counter';
import CounterFunctional from './components/CounterFunctional';
import Login from './components/Login';
import Profile from './components/Profile';
import {LoginContext} from './Context/LoginContext';
function App() {
	const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');


	return (
		<div>
			<Counter />
			<CounterFunctional /> 
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
      {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
			
		</div>
	);
}
export default App;