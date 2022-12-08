import {Layout, Row, Col, Dropdown, Menu} from "antd"
import { Link , NavLink} from "react-router-dom"
import { Context } from "../../Context/Context"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MenuFoldOutlined , MenuUnfoldOutlined, LogoutOutlined} from "@ant-design/icons"
const {Header: AntdHeader} = Layout
export const Header = () => {
    const {collapsed, setCollapsed} = useContext(Context)
    const navigator = useNavigate()
    function handleClick(){
        setCollapsed(!collapsed)
    }
    const handleChangeClick = (event) => {
        if(event.key === "logaout"){
            window.localStorage.removeItem("erkin")
            navigator("/sign_up")
        }
    }
    const menu = (
        <Menu onClick={handleChangeClick} items={[
            {
                key: "logaout",
                label: "Akkauntdan chiqish",
                icon: <LogoutOutlined/>
            }
        ]}></Menu>
    )
    return(
        <AntdHeader>
            <Row justify={"space-between"}>
                <Col>
                    <Link to="/" onClick={handleClick} style={{fontSize: "19px"}}>
                    {collapsed !== true?   <MenuFoldOutlined/> : <MenuUnfoldOutlined /> }
                     </Link>
                </Col>
                <Col style={{width: "50%"}}>
                    <ul className="nav__ul" style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
                        <li className="list__item">
                            <NavLink>Asosiy sahifa</NavLink>
                        </li>
                        <li className="list__item">
                            <NavLink>Profilga kirish</NavLink>
                        </li>
                        <li className="list__item">
                            <Dropdown overlay={menu} placement="bottom">
                            <NavLink>Chiqish</NavLink>
                            </Dropdown>
                        </li>
                    </ul>
                </Col>
            </Row>           
        </AntdHeader>
    )
}