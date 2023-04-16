import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
function MenuBar(){
    return (
        <div className="menu-bar">
            <div className='profile'>
                <PersonIcon style={{fontSize:"20px"}} />
                <div>Profile</div>

            </div>
            <div className="wishlist">
                <FavoriteIcon style={{fontSize:"20px"}}/>
                <div>Wishlist</div>
            </div>
            <div className='bag'>
               <ShoppingBagIcon style={{fontSize:"20px"}}/> 
               <div >Bag</div>
            </div>
            
            

        </div>
    )
}
export default MenuBar;