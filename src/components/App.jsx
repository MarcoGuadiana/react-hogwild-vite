import React, {useState} from "react";
import Nav from "./Nav";
import 'semantic-ui-css/semantic.min.css';
import hogs from "../porkers_data";
import DisplayComponent from "./DisplayComponent";
import { Button } from 'semantic-ui-react';




function App() {
	const [hogs, setHog] = useState([]);


	return (
		<div className="App">
			<Nav />
			<h3 />
	
				
			<DisplayComponent/>
			

		</div>
	);
}

export default App;
