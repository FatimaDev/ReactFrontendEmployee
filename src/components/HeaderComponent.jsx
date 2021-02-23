import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://spring.io/" className="navbar-brand"> YAYA Group Management</a></div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/employees">Employees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/add-employee/_add">Add Employee</a>
        </li>
        </ul>

                </nav>

                </header>
            </div>
        );
    }
}

export default HeaderComponent;