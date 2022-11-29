import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "../index";
import Selector from "../components/Selector";
import OptionContainer from "../components/OptionContainer";
import Option from "../components/OptionItem";

export default {
	title: "Components/Dropdown",
	component: Dropdown,
	id: "Dropdown",
} as ComponentMeta<typeof Dropdown>;

const Primary: ComponentStory<typeof Dropdown> = (args) => (
	<Dropdown {...args} style={{ minHeight: "300px" }}>
		<Selector placeholder={args.placeholder} />
		<OptionContainer>
			<Option label="Education 🌍" value="education" />
			<Option label="Science 🥼" value="science" />
			<Option label="Art ❤️" value="art" />
			<Option label="Sport  🎉" value="sport" />
			<Option label="Health 👓" value="health" />
			<Option label="Math ➗" value="math" />
			<Option label="Study 🧢" value="study" />
			<Option label="Work 💼" value="work" />
		</OptionContainer>
	</Dropdown>
);

export const Template = Primary.bind({});
Template.args = {
	placeholder: "Please select an option",
	onSelect: (value, lable) => console.log(value, lable),
};
