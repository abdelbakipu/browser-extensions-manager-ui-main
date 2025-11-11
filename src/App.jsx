import logo from "./assets/images/logo.svg"
import Dark from "./assets/images/icon-sun.svg"
import Light from "./assets/images/icon-moon.svg"
import "./style.css"
import data from "../data.json";
import Switch from "@mui/material/Switch";
import {useState} from "react";

function App() {

    const [items, setItems] = useState(data);
    const [filter, setFilter] = useState("all");
    const [theme, setTheme] = useState("dark");
    
    function remove(id){
        const update = items.filter((_,index) => index !== id);
        setItems(update);
    }
    function toggleActive(id){
        const update = items.map((item,i) =>
        i === id ? {...item, isActive : !item.isActive} : item
        );
        setItems(update);
    }
    const filteredItems = items.filter((item) => {
        if (filter === "active") return item.isActive;
        if (filter === "inactive") return !item.isActive;
        return true;
    });
    
  return (
      <div className={`container ${theme}`}>
        <div className="logo">
          <img src={logo} alt="logo" height={40}/>
          <button className="theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <img src={(theme === "dark"? Dark : Light)} alt="light mode"/>
          </button>
        </div>

        <div className="topbar">
            <div className="title">Extensions List</div>
            <div className="buttons">
                <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
                <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Active</button>
                <button onClick={() => setFilter("inactive")} className={filter === "inactive" ? "active" : ""}>Inactive</button>
            </div>
        </div>

        <div className="cards">
            {filteredItems.map((item, i) => (
                <div className="card" key={i}>
                    <div className="top">
                        <img src={item.logo} alt="logo"/>
                        <div className="text">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <button onClick={() => remove(i)}>Remove</button>
                        <Switch checked={item.isActive} onChange={() => toggleActive(i)} />
                    </div>
                </div>
            ))}
        </div>
      </div>
  )
}

export default App;