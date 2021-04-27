import React, { useState } from "react"
import Button from "../Components/Button/Button"
import Input from "../Components/Input/Input"
import "./home.css"
import Axios from "../axios/Axios"


const placeholders = {
    Name: "Enter your name",
    phoneNumber: "Enter your phone number",
}


const Login = ({ children }) => {
    return (
        <div className="container">
            <h2>LogIn</h2>
            <div className="wraper">
                <div className="form">
                    <Input placeholder={placeholders.phoneNumber} handleInputEvent={(val) => val} />
                    <Button type="LogIn" />
                </div>
                {children}
            </div>
        </div>
    )
}

const Register = ({ children, handleError }) => {
    const [data, setData] = useState(null)
    const [name, setName ] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    
    const onRegister = async () => {
        const { data } = await Axios.post("/user", { name, phoneNumber })
        if (data.error) {
            return handleError(data.error)
        }
        
        setData(data)
    }

    return (
        <div className="container">
            <h2>Register</h2>
            <div className="wraper">
                <div className="form">
                    <Input placeholder={placeholders.Name} handleInputEvent={(val) => setName(val)} />
                    <Input placeholder={placeholders.phoneNumber} handleInputEvent={(val) => setPhoneNumber(val)} />
                    <Button handleClickEvent={onRegister} type="Create" />
                </div>
                {children}
            </div>
        </div>
    )
}

const Home = () => {
    const [homeStat, setHomeStat] = useState(false)
    const [info, setInfo] = useState("Info")


    return (
        <div>
            {homeStat ?
                <Login>
                    <div>{info}</div>
                    <hr />
                    <div className="navigation">
                        <Button type="LogIn" handleClickEvent={() => setHomeStat(true)}/>
                        <div className="vertical__line"></div>
                        <Button type="Register" handleClickEvent={() => setHomeStat(false)} />
                    </div>
                </Login> :
                <Register handleError={val => setInfo(val)}>
                    <div>{info}</div>
                    <hr />
                    <div className="navigation">
                        <Button type="LogIn" handleClickEvent={() => setHomeStat(true)} />
                        <div className="vertical__line"></div>
                        <Button type="Register" handleClickEvent={() => setHomeStat(false)} />
                    </div>
                </Register>
            }
        </div>
    )
}

export default Home