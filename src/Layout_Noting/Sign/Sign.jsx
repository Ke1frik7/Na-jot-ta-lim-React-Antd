import axios from "axios"
import {Row, Form, Input, Button, Col, Typography} from "antd"
import {UserOutlined, MailOutlined, LockOutlined} from "@ant-design/icons"
import { Context } from "../../Context/Context"
import { useContext } from "react"
import { useNavigate } from "react-router"
const {Title} = Typography
const {Item} = Form
export const Sign = () => {
    const navigator = useNavigate()
    const error = new Error
    error.name = "Axios hatolik"
    const {setToken} = useContext(Context)
    let array = ["a", "b", "c", "d", "e", "f", "j", "h", "j", "k", "e", "m", "n", "p", "o", "q", "r", "s", "t", "u", "v", "x", "h", "y", "z"]
    async function handleSub(event){
        const expert = await axios({
            method: "POST",
            url: "https://reqres.in/api/users",
            data: event,
            headers: {
                "Content-type": "application/json"
            }
        }).catch((error) => {
            if(error){
                throw(error)
            }
        }) 
        const response = await expert.data
        console.log(response)
        let random = ""
        for(let i = 0; i<array.length; i++){
         random += array[parseInt(Math.random() * i )]
        }
        setToken(random)
        navigator("/")
    }
    return(
        <Row style={{minHeight: "100vh", flexDirection: "column"}} justify={"center"} align="middle" >
            <Col style={{textAlign: "center"}}>
                <Title level={2}>Ruyhatta o'ting</Title>
                <Form onFinish={handleSub} layout="vertical">
                    <Item name={"name"} required label="Ismingizni kiriting" htmlFor="name" rules={[
                        {
                            type: "text", 
                            message: "Ismingizni kiriting"
                        },
                        {
                            required: true,
                            message: "Iltimos ruyhattan o'tish uchun ismingizni kiriting"
                        }
                    ]} hasFeedback >
                        <Input  prefix={<UserOutlined/>} id="name" name="name" placeholder="Ismingizni kiriting"></Input>
                    </Item>
                    <Item name={"email"} required label="Email" htmlFor="email" rules={[
                        {
                            type: "email",
                            message: "Emailingizni kiriting"   
                        },
                        {
                            required: true,
                            message: "Iltimos ruyhattan o'tish uchun emailingizni kiriting"
                        }
                    ]} hasFeedback>
                        <Input prefix={<MailOutlined/>} id="email" placeholder="Emailingizni kiriting" name="email"></Input>
                    </Item>
                    <Item name={"password"} required label="Password yarating" rules={[
                        {
                            type: "password",
                            message: "Yangi parol yarating"
                        },
                        {
                            required: true,
                            message: "Ruyhattan o'tishingiz uchun parol yaratishingiz kerak "
                        }
                    ]}>
                        <Input.Password name="password" prefix={<LockOutlined/>} placeholder="Parol yarating"></Input.Password>
                    </Item>
                    <Row justify={"center"}>
                        <Button type="primary" htmlType="submit">Junatish</Button>
                    </Row>
                </Form>                
            </Col>
        </Row>
    )
}