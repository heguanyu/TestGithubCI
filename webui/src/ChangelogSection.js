import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import MarkdownPage from "./MarkdownPage";


class ChangelogSection extends React.Component {

    render() {
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <MarkdownPage filename={"./data/CHANGELOG.md"}></MarkdownPage>
        </div>)
    }
}

export default ChangelogSection;