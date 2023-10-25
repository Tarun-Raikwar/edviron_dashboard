import { useState } from "react";
import "./assets/Comp3.css";
import { Chart } from "react-google-charts";

const Comp3 = () => {

    const [percent, setPercent] = useState(null);
    const [percent_vis, set_percent_vis] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);

    const bar_data = [
        {month: "Jan", percent: 100},
        {month: "Feb", percent: 90},
        {month: "Mar", percent: 70},
        {month: "Apr", percent: 70},
        {month: "May", percent: 50},
        {month: "Jun", percent: 60},
        {month: "Jul", percent: 80},
        {month: "Aug", percent: 40},
        {month: "Sept", percent: 30},
        {month: "Oct", percent: 20},
        {month: "Nov", percent: 10},
        {month: "Dec", percent: 5}
    ]

    const data = [
        ["Task", "Hours per Day"],
        ["Online", 63],
        ["Cash", 25],
        ["Cheque", 11],
    ];

    return (
        <div className="comp3">
            <div className="bar_container">
                <p className="section_type">Overview</p>
                <p className="section_desc">Monthly collection</p>
                <div className="bar">
                    {bar_data.map((index, num) => {
                        return <div 
                            className="curr_bar"
                            onMouseEnter={() => {
                                setPercent(index.percent);
                                const temp = percent_vis;
                                temp[num] = true;
                                set_percent_vis(temp)
                            }}    

                            onMouseLeave={() => {
                                setPercent(null);
                                const temp = percent_vis;
                                temp[num] = false;
                                set_percent_vis(temp)
                            }}
                        >
                            {(percent && percent_vis[num] ) && <p className="message">{percent}%</p>}
                            <div className="actual_bar_container">
                                <div className="actual_bar" style={{height: index.percent + '%'}}></div>
                            </div>
                            <p className="month">{index.month}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className="pie">
                <p className="section_type">Payment mode</p>
                <p className="section_desc">Split between Online, Cash and Cheque for collection till date</p>
                <Chart
                    chartType="PieChart"
                    data={data}
                    // options={options}
                    width={"100%"}
                    height={"180px"}
                />
            </div>
        </div>
    )
}

export default Comp3;