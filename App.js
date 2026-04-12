import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id="heading">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}



// const heading = React.createElement("h1",{id:"heading"},"Hello World from React");
 const heading = React.createElement("div",
    {id:"heading"},
    React.createElement("div",{id:"child"},React.createElement("h1",null,"I am h1 tag")));
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);