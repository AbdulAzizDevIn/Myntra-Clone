import { useNavigate } from "react-router-dom";
import { megaDealsData } from "../../constants/data";

function MegaDeals(){
    const navigate = useNavigate();
    const megaBannerUrl = "https://i.ibb.co/gR879B7/mega-deal.png";
    return(
        <>
            <img style={{width:"100%"}} src={megaBannerUrl} alt="" />
            <div className="mega-deals-container">
                {
                    megaDealsData.map(data => (
                        <img key={data.id} onClick={()=>navigate("/catalogue")} className="mega-deals" src={data.url} alt="" />
                    ))
                }
            </div>
        </>
    )
}
export default MegaDeals;