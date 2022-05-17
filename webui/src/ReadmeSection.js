import React from "react";
import "./markdown.css";
import TopNavigationBar from "./TopNavigationBar";

const parse = require('html-react-parser');
const md = require("markdown-it")();

async function getReadmeContentAsync() {
    const rawData = await fetch("./data/README.md").then(x=>x.text());
    const result = md.render(rawData);
    return result;
}

class ReadmeSection extends React.Component {

    componentDidMount() {
        getReadmeContentAsync().then(content => {
            this.setState({
                readmeContent: content
            })
        })
    }

    render() {
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <div className={"ReadmePanel MarkdownPanel"} style={{textAlign: "left", margin: "10px auto", width: "60%"}}>{parse(this.state && this.state.readmeContent || "")}</div>
        </div>)
    }
}

export default ReadmeSection;