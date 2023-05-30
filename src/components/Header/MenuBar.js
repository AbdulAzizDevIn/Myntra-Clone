import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import bagContext from '../../context/bag.context';

import { signOut } from 'firebase/auth';
import { auth } from "../authentication/firebase";

function MenuBar(){
    const navigate = useNavigate();
    const {bagList} = useContext(bagContext);

    const [userName,setUserName] = useState("")

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName);
            }
            else{
                setUserName("")
            }
        })
    },[])
    const handelSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            
            localStorage.setItem("isAuthenticate",false)
            
        })
        .catch((err)=>{
            console.log("its not work");
        })
        
        
    }
    return (

        <div className="menu-bar">
            <div onClick={handelSignOut} className='profile'>
                <PersonOutlineOutlinedIcon style={{fontSize:"25px"}} />
                <div>{userName}</div>

            </div>
            <div className="wishlist" >
                <FavoriteBorderOutlinedIcon style={{fontSize:"25px"}}/>
                <div>Wishlist</div>
            </div>
            <div className='bag' onClick={()=>{navigate("/bag")}}>
               <ShoppingBagOutlinedIcon  style={{fontSize:"25px"}}/> 
                <div>Bag</div>
                {bagList.length >= 1 ? <div className='bag-count'>{bagList.length}</div> : null}          
            </div>
            
            
            

        </div>
    )
}
export default MenuBar;