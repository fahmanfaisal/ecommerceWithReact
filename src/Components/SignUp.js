import {React , Routes} from 'react'
import { Route } from 'react-router'
import { Link, NavLink } from 'react-router-dom'


function SignUp() {
    return (
        <div>
            <div>
                <NavLink to="/user-register"><p className="font-semibold text-gray-800 color">Register A New Account</p></NavLink>
                <hr/>
            </div>
        </div>
    )
}

export default SignUp
