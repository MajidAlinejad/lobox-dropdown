import Dropdown from "Components/Dropdown";
import OptionContainer from "Components/Dropdown/components/OptionContainer";
import Option from "Components/Dropdown/components/OptionItem";
import Selector from "Components/Dropdown/components/Selector";
import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="drop-down-wrapper">
				<Dropdown onSelect={(value, lable) => console.log(value, lable)}>
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
		</div>
	);
}

export default App;
