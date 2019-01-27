import { storiesOf } from "@storybook/react";
import * as React from "react";

import Clock from "./";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Clock
    callback={() => {
      console.log("hello clock");
    }}
  />
));
