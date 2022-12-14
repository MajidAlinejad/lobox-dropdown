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
			<Option label="Education ๐" value="education" />
			<Option label="Science ๐ฅผ" value="science" />
			<Option label="Art โค๏ธ" value="art" />
			<Option label="Sport  ๐" value="sport" />
			<Option label="Health ๐" value="health" />
			<Option label="Math โ" value="math" />
			<Option label="Study ๐งข" value="study" />
			<Option label="Work ๐ผ" value="work" />
		</OptionContainer>
	</Dropdown>
);

export const Template = Primary.bind({});
Template.args = {
	placeholder: "Please select an option",
	onSelect: (value, lable) => console.log(value, lable),
};
