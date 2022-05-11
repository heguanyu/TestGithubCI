import {Component} from "react";
import TopNavigationBar from "./TopNavigationBar";
import {Container, Row, Col} from "react-bootstrap"
import {LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, Label} from 'recharts'

const mockDatapoints = [
    {
        version: "0.0.1-alpha",
        cpu: 500,
        memory: 13,
        binary: 560,
        OTA: 3.6
    },
    {
        version: "0.0.2-alpha",
        cpu: 700,
        memory: 12,
        binary: 740,
        OTA: 3.8
    },
    {
        version: "0.0.3-alpha",
        cpu: 400,
        memory: 17,
        binary: 490,
        OTA: 4.8
    }
]

class Dashboards extends Component{
    render() {
        return (<>
            <TopNavigationBar></TopNavigationBar>
            <Container>
                <Row>
                    <Col>
                        <LineChart
                            width={400}
                            height={400}
                            data={mockDatapoints}
                            margin={{ top: 50, right: 20, left: 10, bottom: 35 }}
                        >
                            <XAxis dataKey="version">
                                <Label value="CPU Usage(example)" offset={0} position="bottom" />
                            </XAxis>
                            <YAxis dataKey={"cpu"}></YAxis>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="cpu" stroke="#ff7300" yAxisId={0} />
                        </LineChart>
                    </Col>
                    <Col>

                        <LineChart
                            width={400}
                            height={400}
                            data={mockDatapoints}
                            margin={{ top: 50, right: 20, left: 10, bottom: 35 }}
                        >
                            <XAxis dataKey="version">
                                <Label value="Max Memory Usage(example)" offset={0} position="bottom" />
                            </XAxis>
                            <YAxis dataKey={"memory"}></YAxis>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="memory" stroke="#ff7300" yAxisId={0} />
                        </LineChart>
                    </Col>
                </Row>
                <Row style={{marginTop: "30px"}}>
                    <Col>

                        <LineChart
                            width={400}
                            height={400}
                            data={mockDatapoints}
                            margin={{ top: 50, right: 20, left: 10, bottom: 35 }}
                        >
                            <XAxis dataKey="version">
                                <Label value="Binary size(example)" offset={0} position="bottom" />
                            </XAxis>
                            <YAxis dataKey={"binary"}></YAxis>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="binary" stroke="#ff7300" yAxisId={0} />
                        </LineChart>
                    </Col>
                    <Col>

                        <LineChart
                            width={400}
                            height={400}
                            data={mockDatapoints}
                            margin={{ top: 50, right: 20, left: 10, bottom: 35 }}
                        >
                            <XAxis dataKey="version">
                                <Label value="OTA size(example)" offset={0} position="bottom" />
                            </XAxis>
                            <YAxis dataKey={"OTA"}></YAxis>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="OTA" stroke="#ff7300" yAxisId={0} />
                        </LineChart>
                    </Col>
                </Row>
            </Container>
        </>)
    }
};

export default Dashboards;