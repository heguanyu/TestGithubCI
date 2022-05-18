import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import Select from 'react-select'
import redirect from "react-router-dom/es/Redirect";

class Documents extends React.Component {

    statusMap = {
        0: "Current",
        1: "Maintaining"
    }
    async getVersionHistory() {
        const result = [];
        const tagsJson = await fetch("./data/tags.json").then(x=>x.text()).then(x=> {
            return JSON.parse(x);
        });
        const sortedTags = tagsJson.tags.map(x=>{return {version: x.version, date: +x.date}}).sort( (x,y)=>{return (+y.date)-(+x.date)})
        for (let i = 0; i < sortedTags.length; i++) {
            const tag = sortedTags[i];
            const lastTag = i ? sortedTags[i-1] : null
            let status = 0;
            let deprecation = 0;
            if (lastTag) {
                deprecation = lastTag.date + 365*24*60*60;
                if (deprecation*1000 < Date.now()) {
                    status = 2
                }
                else {
                    status = 1;
                }
            }
            if (status < 2) {
                result.push({
                    value: tag.version,
                    label: `${tag.version} (${this.statusMap[status]})`
                })
            }
        }
        return result;
    }

    handleSelectVersion(selectedOption) {
        window.location.href = `/documents?v=${selectedOption.value}`
    }

    componentDidMount() {
        this.getVersionHistory().then(options => {
            this.setState({
                selectOptions: options,
                selectedVersion: new URLSearchParams(window.location.search).get("v")
            })
        })
    }

    render() {
        const allTags = this.state && this.state.selectOptions || [];
        const selectedTags = allTags.find((x) => {
            return x.value == this.state.selectedVersion;
        })

        let path = "./data/jazzydocs/index.html";
        if (this.state && this.state.selectedVersion) {
            path = `./doc_archives/${this.state.selectedVersion}/index.html`;
        }
        return (<div>
            <TopNavigationBar></TopNavigationBar>
            <Select options={allTags} hideSelectedOptions={true} value={selectedTags} onChange={this.handleSelectVersion.bind(this)}></Select>
            <iframe src={path} style={{position: "absolute", width:"100%", height: "100%", border: "none", left: 0, top: 95}}></iframe>
        </div>)
    }
}

export default Documents;