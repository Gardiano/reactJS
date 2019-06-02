import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AdminMenu from './AdminMenu';

class Admin extends Component {
    constructor (_props){
        super(_props)
    }
    render(){
        return (
            <div>
            <h2>Admin</h2>
            <Route path = {'/'} component ={AdminMenu} />
            </div>
        )
    }
}
export default Admin;