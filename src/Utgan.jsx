import { Home } from "./Good"
import { Sign } from "./Layout_Noting"
import {Routes, Route} from "react-router-dom"
export const Utgan = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>     
            <Route path="/sign_up" element={<Sign/>}></Route>
            <Route path="*" element={"404 not Found"}></Route>
        </Routes>
    )
}