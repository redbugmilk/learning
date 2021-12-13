import React from "react";
import PureInboxScreen from "./InboxScreen";
import ConfiguredProvider from "../ConfiguredProvider";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [
    (story) => (
      <ConfiguredProvider>
        <div style={{ padding: "3rem" }}>{story()}</div>
      </ConfiguredProvider>
    ),
  ],
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  error: "Something",
};
