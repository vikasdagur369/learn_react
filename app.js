//import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "hello world"
// );==>> this syntax is not user friendly , so we will use jsx. jsx is nothing but html like syntax but not html
// so babel is responsible to convert jsx into valid js, it does this task by converting jsx into
// createElement("element" , {props} , value){

const Title = () => <h1>vikas dagur</h1>;

const Heading = () => (
  <div className="head">
    {Title()}
    <h2>I am a software enginner who is bhakt of sadguru</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
