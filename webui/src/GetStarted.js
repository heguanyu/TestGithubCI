import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import MarkdownPage from "./MarkdownPage";


class GetStarted extends React.Component {

    render() {
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <MarkdownPage filename={"./data/GETSTARTED.md"}></MarkdownPage>
        </div>)
    }
}

export default GetStarted;