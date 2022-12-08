import {Layout, Row} from "antd";
import {Link, NavLink} from "react-router-dom";
import { Context } from "../../Context/Context";
import { useContext } from "react";
import logo2 from "../../assets/img/Logo_2_orginal.png";
import logo from "../../assets/img/logo.png"
const {Sider: SideBar} = Layout
export const Sider = () => {
    const {collapsed} = useContext(Context)
    return(
        <SideBar collapsed={collapsed} style={{minHeight: "100vh"}}>
            <Row justify={"center"}>
                <Link to="/">
                    {collapsed !== true? <img src={logo2} alt="" style={{width: "199px"}} />: <img src={logo} style={{width: "80px"}} alt="" /> }               
                </Link>
            </Row>
        </SideBar>
    )
}