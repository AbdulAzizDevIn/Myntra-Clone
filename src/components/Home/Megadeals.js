import { useContext,useState,useEffect } from "react";
import bannersContext from "../../context/banners.context";
function MegaDeals(){
    const megaBannerUrl = "https://i.ibb.co/gR879B7/mega-deal.png";
    const {banners} = useContext(bannersContext)
    const [megaDealsData,setMegaDealsData] =useState([])

    useEffect(() => {
        if (banners && banners[0] && banners[0].megaDealsBanners) {
            setMegaDealsData(banners[0].megaDealsBanners);
        }
    }, [banners]);
    return(
        <>
            <img style={{width:"100%"}} src={megaBannerUrl} alt="" />
            <div className="mega-deals-container">
                {
                    megaDealsData.map(data => (
                        <img key={data.id} className="mega-deals" src={data.url} alt="" />
                    ))
                }
            </div>
        </>
    )
}
export default MegaDeals;