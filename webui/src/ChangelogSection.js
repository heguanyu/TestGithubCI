import {marked} from "marked";
import React from "react";
import "./markdown.css";
import TopNavigationBar from "./TopNavigationBar";
const parse = require('html-react-parser');

async function getChangelogContentAsync() {
    const rawData = await fetch("./data/CHANGELOG.md").then(x=>x.text());
    const result = marked.parse(rawData);
    return result;
}

class ChangelogSection extends React.Component {

    componentDidMount() {
        getChangelogContentAsync().then(content => {
            this.setState({
                changelogContent: content
            })
        })
    }

    render() {
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <div className={"ChangelogPanel MarkdownPanel"} style={{textAlign: "left", margin: "10px auto", width: "60%"}}>{parse(this.state && this.state.changelogContent || "")}</div>
        </div>)
    }
}

export default ChangelogSection;