import { Typography, Row } from "antd"
const {Title} = Typography
export const Hero = () => {
    return(
        <main>
            <div className="container">
            <section className="Hero">
                <div className="hero__title">
                    <Row justify={"center"} style={{minHeight: "50vh"}} align="middle">
                    <Title level={1} >
                        Na'jot ta'lim
                    </Title>    
                    </Row>
                </div>
            </section>
            </div>
        </main>
    )
}