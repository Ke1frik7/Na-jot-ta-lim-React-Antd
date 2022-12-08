import { Row , Typography , Col } from "antd"
const {Title} = Typography
export const Hero = () => {
    return(
        <div>
            <Row style={{minHeight: "70vh"}} justify="center" align="middle">
                <Col style={{textAlign: "center"}}>
                    <Title level={1}>
                        Na'jot Ta'lim asosiy bo'lim
                    </Title>    
                </Col>
            </Row>
        </div>
    )
}
