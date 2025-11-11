import logo from "./assets/images/logo.svg"
import sunLogo from "./assets/images/icon-sun.svg"
import "./style.css"
import data from "../data.json";
import Switch from "@mui/material/Switch";

function App() {
  return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" height={40}/>
          <button className="theme">
            <img src={sunLogo} alt="light mode"/>
          </button>
        </div>

        <div className="topbar">
            <div className="title">Extensions List</div>
            <div className="buttons">
                <button>All</button>
                <button>Active</button>
                <button>Inactive</button>
            </div>
        </div>

        <div className="cards">
            {data.map((item, i) => (
                <div className="card" key={i}>
                    <div className="top">
                        <img src={item.logo} alt="logo"/>
                        <div className="text">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <button>Remove</button>
                        <Switch className="switch"/>
                    </div>
                </div>
            ))}
        </div>
          
      </div>
  )
}

export default App;