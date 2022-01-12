import {useState} from "react"

const BasicForm=()=> {
    return (
        <>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password"/>
            <button type="submit">Login</button>
        </div>
        </>
    )
}