import { getAuth } from 'firebase/auth'
import React, {useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AccountInformation from '../../Components/AccountInformation'
import AddressBook from '../../Components/AddressBook'
import MegaMenu from '../../Components/MegaMenu'
import MyOrders from '../../Components/MyOrders'

const UserDashboard = () => {

    const [email, setEmail] = useState('')

    const [auth, setAuth] = useState('')

    let navigate = useNavigate();
   
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/userdashboard')
        }

        if (!authToken) {
            navigate('/')
        }
        // const authentication = getAuth();
        setAuth(getAuth());
        if(auth !=''){
            setEmail(auth?.currentUser?.email)
        }
    }, [auth])


    const [active,setActive] = useState(0)
    

    function logout() {
        sessionStorage.removeItem('Auth Token')
        navigate('/')
    }

    return (
        

        <div>
            
        <div className="p-2" style={{backgroundColor: '#11A0DB'}}>
            <MegaMenu/>
        </div>
        <div className="container px-10 mx-auto p-4 ">
        <h2 className="text-xl md:text-2xl font-semibold pl-4">User Dashboard</h2>
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 p-4">
                <div className="border-2 border-gray-300 rounded md:max-h-96">
                    <div className="bg-gray-200 h-5 rounded-tl rounded-tr">
                    </div>
                    <div className="md:flex md:flex-col px-4 py-6">
                        <p onClick={() => setActive(0)} className={`cursor-pointer color ${active==0 ? "font-bold" : "font-normal"}`}>Accounts</p>
                        <p onClick={() => setActive(1)} className={`cursor-pointer color ${active==1 ? "font-bold" : "font-normal"}`}>My Orders</p>
                        <p onClick={() => setActive(2)} className={`cursor-pointer color ${active==2 ? "font-bold" : "font-normal"}`}>Address Book</p>
                        <p className="color">Account Information</p>
                        <p className="color">My product Reviews</p>
                        <p className="color">My support Tickets</p>
                        <p className="color">PickaBoo Ckub</p>
                        <p className="color">Bkash Agreements</p>
                        <div style={{backgroundColor:'#11A0DB'}}  className="rounded mt-2">
                        <p className="text-md font-semibold px-2 py-2 text-white cursor-pointer" onClick={logout}>LogOut</p>
                        </div>
                    </div>
                </div>



                <div className="changeable md:col-span-3">

                {
                    active == 0 && <AccountInformation email={email} />
                }

                {
                    active == 1 && <MyOrders/>
                }

                {
                    active == 2 && <AddressBook email={email}/>
                }

                </div>
            </div>
        </div>

        </div>

    </div>    
    )
}

export default UserDashboard
