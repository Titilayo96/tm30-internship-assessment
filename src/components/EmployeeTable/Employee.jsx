
import './EmployeeTable.css'
import React from 'react'


//You can be adding, remobing or updating the data here. It will be automatically rendered
const testEmployees = [
    {id:1, name: "Alex Brown", last_login: "2019-09-20 01:20:25", department: "Accounting", status: "Active", user: "alex_brown84", email: "Logan@company.com" },
    {id:2, name: "Fanny Epps", last_login: "Sept 22, 2022 22:10:50", department: "Development", status: "Inactive", user: "fanabelt_007", email: "Fanny@company.com" },
    {id:3, name: "Susie Carlson", last_login: "Sept 23, 2022 02:10:50", department: "Development", status: "Active", user: "", email: "tj@coy.co" },
    {id:4, name: "Hot Sauce", last_login: "August 22, 2022 22:10:50", department: "Human Resources", status: "Active", user: "sugar_baker_001", email: "hotsuace01@company.com" },
    {id:4, name: "Jacob Gibson", last_login: "Sept 23, 2022 02:10:50", department: "Sales", status: "Active", user: "jacob_gibson_001", email: "Jacob@company.com" },
]

const FormatDate=(props)=>{

    var date = new Date(props.date);
    const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
    });

    return formattedDate;
};

const TimeSince = (props) => {

    var date = new Date(props.dateVal).getTime();
    var now=new Date().getTime();    

    if (date>=now) {
        return 'Online'
    }

    var seconds = Math.floor((now - date) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }

    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }

    return interval + ' ' + intervalType;
};

const StyleColumn=(props)=>{
    if(props.status==='Active') return <div styles="color:green;background-color:blue"><h4>Active</h4></div>;
    else return <div styles="color:red">Inactive</div>;
};

class EmployeeList extends React.Component {
    render() {
        return (<div className="employee"><h4 className="title">Employees</h4>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Last login</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testEmployees.map(staff => <Employee {...staff} />)}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

class Employee extends React.Component {


    render() {
        return (
            <tr>
                <td>{this.props.name}<p>{this.props.email}</p></td>
                <td><FormatDate date={this.props.last_login}/><p><TimeSince key={this.props.id} dateVal={this.props.last_login}/></p></td>
                <td>{this.props.department}</td>
                <td styles={"background-color:green"}>{this.props.status}</td>
                <td>{this.props.user}</td>
            </tr>
        );
    }
}
export default EmployeeList