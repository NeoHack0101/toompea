import React from "react";

const Form1 = () => {
  return (
    <form class="pa4 black-80">
      <div class="measure">
        <label for="name" class="f6 b db mb2">
          Name <span class="normal black-60">(optional)</span>
        </label>
        <input
          id="name"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </div>
      <div class="measure">
        <label for="name" class="f6 b db mb2">
          Lastname
        </label>
        <input
          id="lastname"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </div>
      <div class="measure">
        <label for="name" class="f6 b db mb2">
          Phone number
        </label>
        <input
          id="phone"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </div>
      <div class="measure">
        <label for="name" class="f6 b db mb2">
          e-mail
        </label>
        <input
          id="e-mail"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </div>
      <div class="flex justify-center">
        <input
          class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
          type="submit"
          value="Next"
        />
      </div>
    </form>
  );
};

export default Form1;
