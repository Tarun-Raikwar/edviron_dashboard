import "./assets/Page.css";
import Menu from "../Menu/Menu.jsx";
import Dashboard from "../Dashboard/Dashboard";

const Page = () => {
    return (
        <div className="page">
            <Menu />
            <Dashboard />
        </div>
    )
}

export default Page;