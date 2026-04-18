import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id="heading">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}


// React Element
const heading = (
    <h1>Hello React</h1>
)

const title = <h1>This is a React element</h1>
const TitleComponent = ()=>(
    <h1>This is a React Component</h1>
)
// React Functional Component
const HeadingComponent = () => {
    return (
    <div>
    {title}
    <TitleComponent/>
    {TitleComponent()}
    <h1>Hello from Functional Component</h1>
    </div>
)
}


// const heading = React.createElement("h1",{id:"heading"},"Hello World from React");
//  const heading = React.createElement("div",
//     {id:"heading"},
//     React.createElement("div",{id:"child"},React.createElement("h1",null,"I am h1 tag")));
//  root.render(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)