import {Routes, Route} from "react-router-dom"
import { Home , Sign} from "./Layout_Noting"
export const Utmagan = () => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/sign_up" element={<Sign/>}></Route>
                <Route path="*" element={"404 not Found"}></Route>
            </Routes>
        </div>
    )
}