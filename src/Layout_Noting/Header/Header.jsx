import "./Header.css"
import { Layout, Row, Col, Dropdown, Menu} from "antd"
import {Link, NavLink} from "react-router-dom"
import {UserOutlined, HomeOutlined, ManOutlined} from "@ant-design/icons"
import logo from "../../assets/img/logo.png"
const {Header} = Layout
export const Headers = () => {
    const menu = (
        <Menu items={[
            {
                key: "dropdown",
                label: <Link className="users"to={"/users_of_najot_ta'lim"}>Bizning hodimlar</Link>,
                icon: <UserOutlined/>
            },
            {
                key: "dropdown",
                label: <Link  className="users" to={"/Filiallar"}> Filiallar</Link>,
                icon: <HomeOutlined/>
            },
        ]} ></Menu>
    )
    const aboutMenu = (
        <Menu items={[
            {
                key: "aboutDropdown",
                label: <Link to={"/general" }>Asoschi</Link>,
                icon: <ManOutlined/>
            }
        ]}></Menu>
    )
    return(
        <Header>
            <div className="container">
            <Row justify={"space-between"}>
            <Col>
            <Link to="/" >
            <img src={logo} alt="" style={{width:"90px"}} />
            </Link>
            </Col>
            <Col style={{width: "60%"}}>
            <ul className="nav__ul">
                <li className="list__item">
                    <Dropdown overlay={menu} placement="bottom">
                    <NavLink to={"/"} overlay={menu}>Bosh sahifa</NavLink>
                    </Dropdown>
                </li>
                <li className="list__item">
                    <Dropdown overlay={aboutMenu}>
                    <NavLink to={"/about"}>Biz haqimizda</NavLink>
                    </Dropdown>
                </li>
                <li className="list__item">
                    <a href="tel:+998991457766">Raqamlar</a>
                </li>
                <li className="list__item">
                    <NavLink to={"/sign_up"}>Ruyhattan o'tish</NavLink>
                </li>
            </ul>
            </Col>
            </Row>
            </div>
        </Header>
    )
}