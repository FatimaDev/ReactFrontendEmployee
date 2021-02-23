import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
               id: this.props.match.params.id,
               employee : {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
           this.setState({employee: res.data});
        });
    }
    render() {
        return (
            <div>
                <br></br>
                <br></br>
               <div className="card col-md-6 offset-md-3 bg-dark  text-white">
                   <br/>
                   <h3 className="text-center"> Employee Details</h3>
                   <div className="card-body ">
                       <div className="row ml-3">
                       <label class="card-title">First Name:</label>
                           <div className="ml-2"> {this.state.employee.firstName}</div>
                       </div>
                       <div className="row ml-3">
                           <label> Last Name: </label>
                           <div className="ml-2">{this.state.employee.lastName}</div>
                       </div>
                       <div className="row ml-3">
                           <label> Email Id: </label>
                           <div className="ml-2">{this.state.employee.emailId}</div>
                       </div>
                   </div>
                </div>           
            </div>
        );
    }
}

export default ViewEmployeeComponent;