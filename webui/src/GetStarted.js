import {marked} from "marked";
import React from "react";
import "./markdown.css";
import TopNavigationBar from "./TopNavigationBar";
const parse = require('html-react-parser');

async function getGetStartedAsync() {
    const rawData = await fetch("./data/GETSTARTED.md").then(x=>x.text());
    const result = marked.parse(rawData);
    return result;
}

class GetStarted extends React.Component {

    componentDidMount() {
        getGetStartedAsync().then(content => {
            this.setState({
                getStartedContent: content
            })
        })
    }

    render() {
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <div className={"GetStartedPanel MarkdownPanel"} style={{textAlign: "left", margin: "10px auto", width: "60%"}}>{parse(this.state && this.state.getStartedContent || "")}</div>
        </div>)
    }
}

export default GetStarted;