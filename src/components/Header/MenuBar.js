import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import bagContext from '../../context/bag.context';

function MenuBar(){
    const navigate = useNavigate();
    const {bagList} = useContext(bagContext);
    return (

        <div className="menu-bar">
            <div className='profile'>
                <PersonOutlineOutlinedIcon style={{fontSize:"25px"}} />
                <div>Profile</div>

            </div>
            <div className="wishlist" onClick={()=>{navigate("/wishlist")}}>
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