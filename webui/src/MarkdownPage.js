import React from "react";
import "./markdown.css";
import TopNavigationBar from "./TopNavigationBar";
import "highlight.js/styles/xcode.css"

const parse = require('html-react-parser');
const hljs = require('highlight.js');
const md = require("markdown-it")({
    xhtmlOut: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return ''; // use external default escaping
    }
});

async function getGetStartedAsync(filename) {
    const rawData = await fetch(filename).then(x=>x.text());
    const result = md.render(rawData);
    return result;
}

class GetStarted extends React.Component {

    componentDidMount() {
        getGetStartedAsync(this.props.filename).then(content => {
            this.setState({
                getStartedContent: content
            })
        })
    }

    render() {
        return (
        <div className={"GetStartedPanel MarkdownPanel"} style={{textAlign: "left", margin: "10px auto", width: "60%"}}>
            {parse(this.state && this.state.getStartedContent || "")}
        </div>
        )
    }
}

export default GetStarted;