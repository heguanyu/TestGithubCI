import React from "react";
import "./markdown.css";
import TopNavigationBar from "./TopNavigationBar";
import MarkdownPage from "./MarkdownPage";


class ReadmeSection extends React.Component {
    render() {
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <MarkdownPage filename={"./data/README.md"}></MarkdownPage>
        </div>)
    }
}

export default ReadmeSection;