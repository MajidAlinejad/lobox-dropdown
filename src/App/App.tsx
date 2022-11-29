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
						<Option label="Education 🌍" value="education" />
						<Option label="Science 🥼" value="science" />
						<Option label="Art ❤️ " value="art" />
						<Option label="Sport  🎉" value="sport" />
						<Option label="Games  😃" value="games" />
						<Option label="Health 👓" value="health" />
						<Option label="Math ➗" value="math" />
						<Option label="Study 🧢" value="study" />
						<Option label="Work 💼" value="work" />
					</OptionContainer>
				</Dropdown>
			</div>
		</div>
	);
}

export default App;
