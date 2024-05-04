const heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello world"),React.createElement("h2",{},"Hi hello")]));
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)