import React from "react";

const Wrap = props => {
  return (
    <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      {props.children}
    </div>
  );
};

export default Wrap;
