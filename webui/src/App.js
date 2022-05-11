import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ReadmeSection from "./ReadmeSection";
import ChangelogSection from "./ChangelogSection";
import Documents from "./Documents";
import VersionsTable from "./VersionsTable";
import GetStarted from "./GetStarted";
import Dashboards from "./Dashboards";

class App extends React.Component {
    componentDidMount() {
        // window.location.reload();
    }

    render() {
        return (
            <div className="App">
                <HashRouter hashType={"noslash"}>
                    <Switch>
                        <Route path={"/"} exact component={ReadmeSection}></Route>
                        <Route path="/dashboards" exact component={Dashboards} />
                        <Route path="/getstarted" exact component={GetStarted} />
                        <Route path="/versions" exact component={VersionsTable} />
                        <Route path="/changelog" exact component={ChangelogSection} />
                        <Route path="/documents" exact component={Documents} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
