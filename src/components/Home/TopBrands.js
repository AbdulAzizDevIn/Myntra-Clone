import { useNavigate } from "react-router-dom";
import { topBrandsData } from "../../constants/data";

function TopBrands(){
    const navigate = useNavigate();
    const topBrandsBannerUrl = "https://i.ibb.co/CtVdP1r/brands-banner.png";
    return(
        <>
            <img style={{width:"100%"}} src={topBrandsBannerUrl} alt="" />
            <div className="top-brands-container" >
                {
                    topBrandsData.map(data => (
                        <img key={data.id} onClick={()=>navigate("/catalogue")} className="top-brands" src={data.url} alt="" />
                    ))
                }
            </div>
        </>
    )
}
export default TopBrands;