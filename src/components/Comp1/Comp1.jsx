import "./assets/Comp1.css"
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';


const Comp1 = () => {
    return (
        <div className="comp1">
            <div className="comp11">
                <img src={require("./assets/Group.png")} alt="" />
                <div className="side_info">
                    <p className="p1">Collecttion till date</p>
                    <p className="p2">₹5.34Cr</p>
                    <p className="p3"><span style={{color: "green"}}>↑ 10% </span>in last 20 days</p>
                </div>
            </div>
            <div className="comp11 middle">
                <img src={require("./assets/Group1.png")} alt="" />
                <div className="side_info">
                    <p className="p1">Balance</p>
                    <p className="p2">₹2.4L</p>
                </div>
            </div>
            <div className="comp11">
                <img src={require("./assets/Ellipse.png")} alt="" />
                <div className="side_info">
                    <p className="p1">Defaulters</p>
                    <p className="p2">11<span className="p3">/1049 students</span></p>
                    <p className="p3"><span style={{color: "green"}}>↓ 11%</span> in last 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default Comp1;