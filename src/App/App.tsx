import Dropdown from "Components/Dropdown";
import OptionContainer from "Components/Dropdown/components/OptionContainer";
import Option from "Components/Dropdown/components/OptionItem";
import Selector from "Components/Dropdown/components/Selector";
import "./App.css";
function App() {
	return (
		<div className="App">
			<div className="drop-down-wrapper">
				<Dropdown onSelect={(value, lable) => console.log(value, lable)}>
					<Selector placeholder="Please select an option" />
					<OptionContainer>
						<Option label="Education ๐" value="education" />
						<Option label="Science ๐ฅผ" value="science" />
						<Option label="Art โค๏ธ " value="art" />
						<Option label="Sport  ๐" value="sport" />
						<Option label="Games  ๐" value="games" />
						<Option label="Health ๐" value="health" />
						<Option label="Math โ" value="math" />
						<Option label="Study ๐งข" value="study" />
						<Option label="Work ๐ผ" value="work" />
					</OptionContainer>
				</Dropdown>
			</div>
		</div>
	);
}

export default App;
