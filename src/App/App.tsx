import Dropdown from "Components/Dropdown";
import OptionContainer from "Components/Dropdown/components/OptionContainer";
import Option from "Components/Dropdown/components/OptionItem";
import Selector from "Components/Dropdown/components/Selector";
import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<Dropdown>
				<Selector>select</Selector>
				<OptionContainer>
					<Option label="new1" value="oi1" />
					<Option label="new2" value="oi2" />
					<Option label="new3" value="oi3" />
					<Option label="new4" value="oi4" />
					<Option label="new5" value="oi5" />
				</OptionContainer>
			</Dropdown>
		</div>
	);
}

export default App;
