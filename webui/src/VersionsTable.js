import Table from 'react-bootstrap/Table';
import React from "react";
import TopNavigationBar from "./TopNavigationBar";

const statusMap = {
    0: "Active",
    1: "Maintenance",
    2: "Deprecated"
}

async function getVersionHistory() {
    const result = [];
    const tagsJson = await fetch("./data/tags.json").then(x=>x.text()).then(x=> {
        return JSON.parse(x);
    });
    const sortedTags = tagsJson.tags.map(x=>{return {version: x.version, date: +x.date}}).sort( x=> -x.date)
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
        result.push({
            version: tag.version,
            date: new Date(tag.date*1000).toLocaleDateString(),
            status: status,
            deprecation: deprecation ? new Date(deprecation*1000).toLocaleDateString() : "N/A"
        })
    }
    return result;
}
class VersionsTable extends React.Component{
    componentDidMount() {
        getVersionHistory().then(tagHistory => {
            this.setState({
                tagHistory: tagHistory
            })
        })
    }

    render() {
        let versions = this.state && this.state.tagHistory || [];
        let tbodyrows = versions.map(x => {
            return (<tr>
                <td>{x.version}</td>
                <td>{x.date}</td>
                <td>{statusMap[x.status]}</td>
                <td>{x.deprecation}</td>
                <td><a href={"https://github.com/linkedin/audience-network-ios/releases/tag/"+x.version} target="_blank">Link</a></td>
                <td><a href={"/#documents"} target="_blank">Link</a></td>
            </tr>)
        })
        return (<>
            <TopNavigationBar></TopNavigationBar>

            <Table responsive={"sm"} style={{textAlign: "left", margin: "10px auto", width: "60%"}}>
                <thead>
                <tr>
                    <th>Version</th>
                    <th>Release date</th>
                    <th>Current status</th>
                    <th>Deprecation date</th>
                    <th>Download</th>
                    <th>Docs</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {tbodyrows}
                </tbody>
            </Table>
        </>)
    }

}

export default VersionsTable;