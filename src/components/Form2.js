import React from "react";
import { Input, Button } from "mdbreact";
import Wrap from "./Wrap";

const Form2 = () => {
  return (
    <form class="pa4 black-80">
      <Input label="First name" />
      <Input label="Last name" />
      <Input label="Phone number" />
      <Input label="e-mail" />
      <div class="flex justify-start">
        <input
          class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
          type="submit"
          value="Next"
        />
      </div>
    </form>
  );
};

export default Form2;
