import { Layouts } from "../Layout"
import {Sider} from "../Sider"
import { Header } from "../Header"
import { Hero } from "../Hero"
export const Home = () => {
    return(
        <Layouts>
            <Sider/>
            <Layouts>
                <Header/>
                <Hero/>
            </Layouts>
        </Layouts>
    )
}