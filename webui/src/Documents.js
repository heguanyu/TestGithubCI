import React from "react";
import TopNavigationBar from "./TopNavigationBar";

class Documents extends React.Component {
    render() {
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <iframe src={"./data/jazzydocs/index.html"} style={{position: "absolute", width:"100%", height: "100%", border: "none", left: 0, top: 50}}></iframe>
        </div>)
    }
}

export default Documents;