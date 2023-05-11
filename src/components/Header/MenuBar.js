import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';

function MenuBar(){
    const navigate = useNavigate();
    return (
        <div className="menu-bar">
            <div className='profile'>
                <PersonOutlineOutlinedIcon style={{fontSize:"20px"}} />
                <div>Profile</div>

            </div>
            <div className="wishlist">
                <FavoriteBorderOutlinedIcon style={{fontSize:"20px"}}/>
                <div>Wishlist</div>
            </div>
            <div className='bag' onClick={()=>{navigate("/bag")}}>
               <ShoppingBagOutlinedIcon  style={{fontSize:"20px"}}/> 
                <div>Bag</div>                
            </div>
            
            

        </div>
    )
}
export default MenuBar;