import "./assets/Dashboard.css"
import Comp1 from "../Comp1/Comp1";
import Comp2 from "../Comp2/Comp2";
import Comp3 from "../Comp3/Comp3";
import Comp4 from "../Comp4/Comp4";

const Dashboard = () => {
    return  (
        <div className="dashboard">
            <p className="title">DAV Public School, Bhilai</p>
            <Comp1 />
            <Comp2 />
            <Comp3 />
            <Comp4 />
        </div>
    )
}

export default Dashboard;