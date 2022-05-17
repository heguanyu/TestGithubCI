import {Container, Navbar, Nav} from "react-bootstrap";

function TopNavigationBar() {
    let slash = "/";
    if (window.location.origin.indexOf(".github.io") >= 0) {
        slash = "#";
    }
    console.log(slash);
    return (
        <div className={"topNavigationBar"}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="ml-auto" activeKey={window.location.href.replace(window.location.origin+"/","")}>
                        <Navbar.Brand href={slash}>Test Github CI</Navbar.Brand>
                        <Nav.Link href={slash + "dashboards"} >Dashboards</Nav.Link>
                        <Nav.Link href={slash + "getstarted"} >Get Started</Nav.Link>
                        <Nav.Link href={slash + "versions"}>Versions</Nav.Link>
                        <Nav.Link href={slash + "changelog"}>Change Logs</Nav.Link>
                        <Nav.Link href={slash + "documents"}>Documents</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNavigationBar;
