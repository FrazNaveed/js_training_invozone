import React, { useContext } from 'react';
import {LoginContext} from '../Context/LoginContext'

const Login = () => {
    const {setUsername, setShowProfile} = useContext(LoginContext)
	return (
		<div>
			<br />
			<br />
			<input
				type="text"
				placeholder="username"
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<input type="text" placeholder="password" />
			<button onClick={()=>{setShowProfile(true)}}>Login</button>
		</div>
	);
};

export default Login;
