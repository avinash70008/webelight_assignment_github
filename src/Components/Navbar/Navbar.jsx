
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useState } from 'react'
// import{Link} from "react-router-dom"
import "./Navbar.css";
import { User_Search, SINGLE_USER } from '../../Redux/Search/action'


export const Navbar = () => {

    const dispatch = useDispatch()
    const users = useSelector((store)=>store.users.data)
    console.log("users from navbar",users)
    const singleUser = useSelector((store)=>store.user)
    console.log('singleUse', singleUser);
    const [values, setValue] = useState("")
   const [logo,setLogo] = useState("https://i.pinimg.com/originals/4f/88/32/4f8832629be791976d4407576798050f.jpg")




    console.log('usersfromcomp', users);
    function debouncing(argument) {
        let timer
        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(function () {
                timer = null
                argument.apply(this, args)
            }, 1000)
        }
    }
    const handleSubmit = async () => {
        dispatch(User_Search(values))

    }
    const handleChange = (e) => {
        const { value } = e.target
        setValue(value)
        dispatch(User_Search(value))

    }
    const deb = useCallback(debouncing(handleChange))











  
  return (
   
    
   
    <div> 

    <div id='navbar'>
        <div id='logo'>
            <a href='/'>
                <img src='https://avatars.githubusercontent.com/u/9919?s=70&v=4' alt='Git_Logo' />
            </a>
        </div>
        <div id='search'>
            <input type="text" onChange={deb}  id="search-input" placeholder = "search or Jump to..." />
            <button onClick={handleSubmit}></button>
        </div>
        <div id='option'>
            <ul id='list'>
                <a href=''><li>Pull request</li></a>
                <a href=''><li>Issues</li></a>
                <a href=''><li>Marketplace</li></a>
                <a href=''><li>Explore</li></a>

            </ul>
        </div>
     
        <div id='profile'>
           <img className='profile-img' src={"logo"} alt='profile-logo'/>
           
        </div>
       
    </div>
<div id='showCase'>

            <div>{users.map((e)=>(
               
                 <div style={{
                    // justifyContent:"space-evenly",
                    padding:"50px",
                    // height:"50px",
                    width:"50%",
                    border:"1px solid black",
                    marginLeft:"30%",
                    marginTop:"30px"
                 }}>
                    <div key={e.id}>
                <div><img style={{
                    height:"70px",
                   
                   justifyItems:"start"
                }} src= {e.owner.avatar_url}/>
                 <span style={{
                  marginLeft:"40px"
                 }}>{e.full_name}</span>
                 </div>
                 </div>
                 </div>
                
            ))}</div>
        

</div>



    </div>



  )


  

}
