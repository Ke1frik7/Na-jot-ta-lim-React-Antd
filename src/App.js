import "./App.css"
import {Utgan} from "./Utgan";
import { Utmagan } from "./Utmagan";
import {useState, useEffect} from "react"
import { Context } from "./Context/Context";
function App() {
  let parses = window.localStorage.getItem("erkin")
  const [token, setToken] = useState(parses !== null? JSON.parse(parses): null)
  const [collapsed, setCollapsed] = useState(false)
  useEffect(() => {
    if(token !== null){
      window.localStorage.setItem("erkin", JSON.stringify(token))
    }
  }, [token])
  return (
    <div className="App">
      <Context.Provider value={{token, setToken, collapsed, setCollapsed}}>
      {token !== null ? <Utgan/>: <Utmagan/>}
      </Context.Provider>      
    </div>
  );
}
export default App;
