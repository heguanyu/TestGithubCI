import {Container, Navbar, Nav} from "react-bootstrap";

function TopNavigationBar() {
    return (
        <div className={"topNavigationBar"}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="ml-auto" activeKey={window.location.href.replace(window.location.origin+"/","")}>
                        <Navbar.Brand href="#">Linkedin Audience Network</Navbar.Brand>
                        <Nav.Link href="#dashboards" >Dashboards</Nav.Link>
                        <Nav.Link href="#getstarted" >Get Started</Nav.Link>
                        <Nav.Link href="#versions">Versions</Nav.Link>
                        <Nav.Link href="#changelog">Change Logs</Nav.Link>
                        <Nav.Link href="#documents">Documents</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNavigationBar;
