import React from "react";
import type { ComponentStory } from "@storybook/react";
import DeprecationNotice from "./DeprecationNotice";

// eslint-disable-next-line import/no-default-export -- deprecated usage
export default {
  title: "Admin/App/DeprecationNotice",
  component: DeprecationNotice,
  argTypes: {
    onClose: { action: "DeprecationNotice" },
  },
};

export const Default: ComponentStory<typeof DeprecationNotice> = args => {
  return <DeprecationNotice {...args} />;
};

Default.args = {
  hasSlackBot: true,
  hasDeprecatedDatabase: true,
  isEnabled: true,
};
