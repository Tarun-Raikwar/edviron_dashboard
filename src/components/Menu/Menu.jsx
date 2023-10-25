import { useState } from "react";
import "./assets/Menu.css";

const Menu = () => {

    const [expand, setExpand] = useState(true);

    return (
        <div className="menu">
            <div className="top">
                <div className="setting" 
                    onClick={() => setExpand(!expand)}
                >
                    <img src={require("../../assets/setting.png")} alt="" />
                    {expand && <p>Edviron</p>}
                </div>
                <ul>
                    <li
                        className="sideEle"
                        style={{backgroundColor: "#5932EA", color: "white"}}
                    >
                        <img src={require("../../assets/Listmenu.png")} alt="" />
                        <div className="info">
                            {expand && <p className="type">Dashboard</p>}
                        </div>
                    </li>
                    <li
                        className="sideEle"
                    >
                        <img src={require("../../assets/3d-square.png")} alt="" />
                        <div className="info">
                            {expand && <p className="type">Fee Managment</p>}
                        </div>
                    </li>
                    <li
                        className="sideEle"
                    >
                        <img src={require("../../assets/user-square.png")} alt="" />
                        <div className="info">
                            {expand && <p className="type">Students</p>}
                        </div>
                    </li>
                    <li
                        className="sideEle"
                    >
                        <img src={require("../../assets/wallet-money.png")} alt="" />
                        <div className="info">
                            {expand && <p className="type">Disbursal</p>}
                        </div>
                    </li>
                    <li
                        className="sideEle"
                    >
                        <img src={require("../../assets/discount-shape.png")} alt="" />
                        <div className="info">
                            {expand && <p className="type">Promote</p>}
                        </div>
                    </li>
                    <li
                        className="sideEle"
                    >
                        <img src={require("../../assets/message-question.png")} alt="" />
                        <div className="info">
                            {expand && <p className="type">Help</p>}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="profile">
                <img src={require("../../assets/Ellipse.png")} alt="" />
                <div className="info">
                    {expand && <p className="name">Prashant Kumat </p>}
                    {expand && <p className="post">Super Admin</p>}
                </div>
            </div>
        </div>
    )
}

export default Menu;