import "./assets/Comp2.css";

const Comp2 = () => {
    return (
        <div className="comp2">
            <div className="comp21">
                <p className="comp_type">Students</p>
                <p className="desc">1,049</p>
            </div>
            <div className="comp21">
                <p className="comp_type">Sections</p>
                <p className="desc">18 <span>in 12 classes</span></p>
            </div>
            <div className="comp21">
                <p className="comp_type">Collection this month</p>
                <p className="desc">₹90.56L</p>
            </div>
            <div className="comp21">
                <p className="comp_type">Fine collected till date</p>
                <p className="desc">₹11.20L</p>
            </div>
        </div>
    )
}

export default Comp2;