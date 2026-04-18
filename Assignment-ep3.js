import React from "react";
import ReactDOM from "react-dom/client";

const logoUrl = new URL("./images/logo.jpeg", import.meta.url).href;
const profileImgUrl = new URL("./images/profile.png", import.meta.url).href;

//  const nestedHeaderElement =  React.createElement("div",{id:"container",className:"title"},[React.createElement("h1",{key:"h1",id:"heading1"},"Heading 1"),React.createElement("h2",{key:"h2",id:"heading2"},"Heading 2"),React.createElement("h3",{key:"h3",id:"heading3"},"Heading 3")])
 const nestedJSX = (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
 )

 const SampleComponent = () =>{
    return (
        <div>Composition component</div>
    )
 }
const FunctionalComponent = ()=>{
    return (
        <div className="title">
           { <SampleComponent/>}
            {SampleComponent()}
            {<SampleComponent></SampleComponent>}
            <h1 id="head 1">heading 111</h1>
            <h2 id="head 2">heading 112</h2>
            <h3 id="head 3">heading 113</h3>
        </div>
    )
}


const Header = ()=>{
    return (
        <div className="container">
            <div className="logo">
                <img src={logoUrl} alt="Logo"/>
            </div>
            <div className="input-container">
                <div>🔍</div><input type="text" placeholder="Search"/>
            </div>
            <div>
                <img src={profileImgUrl} alt="Profile"/>
            </div>

        </div>
    )
}


 const root = ReactDOM.createRoot(document.getElementById("root2"));
 root.render(<Header/>)