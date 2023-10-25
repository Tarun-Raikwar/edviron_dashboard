import "./assets/Comp4.css";

const Comp4 = () => {

    const admin = [
        {name: "Prashant Kumar", role: "Super Admin"},
        {name: "Jasraj Singh Bhatia", role: "Admin"},
        {name: "Tarun Kheria", role: "Admin"},
        {name: "Aditya Mulay", role: "Management Staff"}
    ]

    const disbursal = [
        {date: "July 11, 2023", amount: "5,02,123", status: 0},
        {date: "July 10, 2023", amount: "5,02,123", status: 1},
        {date: "July 9, 2023", amount: "5,02,123", status: 1},
        {date: "July 8, 2023", amount: "5,02,123", status: 1},
    ]


    return(
        <div className="comp4">
            <div className="admin">
                <p>Admin</p>
                <table>
                    <tr className="table_head">
                        <td className="head">Name</td>
                        <td className="head">Role</td>
                    </tr>
                    {admin.map((person, index) => {
                        return <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.role}</td>
                        </tr>
                    })}
                </table>
            </div>
            <div className="disbursal">
                <p>Disbursals</p>
                <table>
                    <tr className="table_head">
                        <td className="head">Date</td>
                        <td className="head">Amount</td>
                        <td className="head">Status</td>
                    </tr>
                    {disbursal.map((disburs, index) => {
                        return <tr key={index}>
                            <td>{disburs.date}</td>
                            <td>{disburs.amount}</td>
                            <td className="status">
                                {disburs.status ? <img src={require("./assets/successful.png")} alt="" /> : <img src={require("./assets/pending.png")} alt="" />}
                                {disburs.status ? "Successful" : "Pending"}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    )
}

export default Comp4;