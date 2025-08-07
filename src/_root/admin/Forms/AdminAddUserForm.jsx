import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import FilterButton from '../../../components/DropdownFilter';
import Datepicker from '../../../components/Datepicker';
import { addUser } from "../../../func/APICalls";

const AdminAddUserForm = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        userType: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.firstName || !user.lastName || !user.email) return;
    const newUser = await addUser(user);
    if(newUser){
        setUser({ 
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            userType: ""
        });
        toast.success("User added successfully!");
    };
        
    }
    


  return (
    <>
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Add User</h1>
            </div>

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Filter button */}
            
            <FilterButton align="right" />
            {/* Datepicker built with flatpickr */}
            <Datepicker align="right" />
            {/* Add view button */}
            <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="max-xs:sr-only">Add View</span>
            </button>                
            </div>

        </div>

        <form className="form" onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-full sm:col-span-6 xl:col-span-6">
                    <label
                    className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                    htmlFor="username"
                    >
                    First Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    className="appearance-none border shadow-md rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                    placeholder="First Name"
                    required
                    />
                </div>
                <div className="col-span-full sm:col-span-6 xl:col-span-6">
                    <label
                    className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                    htmlFor="username"
                    >
                    Last Name
                    </label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    className="appearance-none border shadow-md rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                    placeholder="Last Name"
                    required
                    />
                </div>
                <div className="col-span-full sm:col-span-6 xl:col-span-6">
                    <label
                    className="block text-gray-700 text-sm dark:text-white font-bold mb-2"
                    htmlFor="username"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="appearance-none border shadow-md rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                    placeholder="Email Address"
                    required
                    />
                </div>
                <div className="col-span-full sm:col-span-6 xl:col-span-6">
                    <label
                    className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                    htmlFor="username"
                    >
                    Phone Number
                    </label>
                    <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    className="appearance-none border shadow-md rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                    placeholder="Phone Number"
                    required
                    />
                </div>
                <div className="col-span-full sm:col-span-6 xl:col-span-6">
                    <label
                    className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                    htmlFor="username"
                    >
                    Address
                    </label>
                    <input
                    type="text"
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    className="appearance-none border shadow-md rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                    placeholder="address"
                    required
                    />
                </div>
                <div className="col-span-full sm:col-span-6 xl:col-span-6">
                    <label
                    className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
                    htmlFor="username"
                    >
                    User Type
                    </label>
                    <input
                    type="text"
                    id="userType"
                    name="userType"
                    value={user.userType}
                    onChange={handleChange}
                    className="appearance-none border shadow-md rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                    placeholder="User Type"
                    required
                    />
                </div>
                <div className="col-span-full sm:col-span-6 xl:col-span-2">
                    <button className='bg-violet-500 text-white px-[15px] py-[5px] text-[20px] w-full rounded' type="submit">Save</button>
                </div>
            </div>
        </form>
    </>
  )
}
export default AdminAddUserForm