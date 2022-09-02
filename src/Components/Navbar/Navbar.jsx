// import React from 'react'
// import Styles from "../Styles/Search.module.css"
// import { Movie_Search, SingleMovie } from '../Redux/Action/Action'
// import { useDispatch, useSelector } from 'react-redux'
// import { useCallback } from 'react'
// import { useState } from 'react'
// import{Link} from "react-router-dom"


// const SearchBar = () => {
//     const dispatch = useDispatch()
//     const movies = useSelector((store)=>store.movies.movie)
//     const singleMovie = useSelector((store)=>store.movies.single)
//     console.log('singleMovie', singleMovie);
//     const [values, setValue] = useState("")
//     console.log('movies', movies);
//     function debouncing(argument) {
//         let timer
//         return function (...args) {
//             if (timer) clearTimeout(timer)
//             timer = setTimeout(function () {
//                 timer = null
//                 argument.apply(this, args)
//             }, 1000)
//         }
//     }
//     const handleSubmit = async () => {
//         dispatch(Movie_Search(values))

//     }
//     const handleChange = (e) => {
//         const { value } = e.target
//         setValue(value)
//         dispatch(Movie_Search(value))

//     }
//     const deb = useCallback(debouncing(handleChange))

   
    
//     return (
//         <div className={Styles.SearchContainer}>
//             <input type="text" onChange={deb} className={Styles.SearchBox} />
//             <button className={Styles.SearchIcone} onClick={handleSubmit}><i className={Styles.SearchIcone} class="fa-solid fa-magnifying-glass"></i></button>
//             <br />
//             <div className={Styles.Movie}>
        
//                 {
//                    movies &&  movies.map((ele)=>{
//                     return (
//                        <Link to={"/detailspage"}>
                       
//                        <button className={Styles.MovieBox} onClick={()=>dispatch(SingleMovie(ele))}>
//                             <div className={Styles.Movies_Contents}> <img src={ele.Poster} className={Styles.Movies_Contents_Img}alt="" /></div>
//                             <div className={Styles.Movies_Contents} > {ele.Title}</div>
//                             <div className={Styles.Movies_Contents} > {ele.Type}</div>
//                             <div className={Styles.Movies_Contents} > {ele.Year}</div>
//                        </button>
                       
//                        </Link>
//                     )
//                 })

                
//                 }
              
//                 {
//                     !movies && <><div   className={Styles.MovieBoxError}>Movie Not Available 404 </div></>
//                 }
//             </div>
//         </div>
//     )
// }
// export default SearchBar









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
                    textAlign: "center",
                    padding:"20px",
                    height:"20px",
                    width:"100%",
                 }}>{e.name}</div>
                
            ))}</div>
        

</div>



    </div>



  )


  

}
