import {React , Routes} from 'react'
import { Route } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

function RegisterAccount() {
    return (
        <div>
            <div>
                <NavLink to="/user-login"><p className="pl-1 font-semibold text-gray-800 color">Register Account</p></NavLink>
            </div>
        </div>
    )
}

export default RegisterAccount
