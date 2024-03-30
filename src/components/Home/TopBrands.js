
import bannersContext from "../../context/banners.context";
import { useContext,useState,useEffect } from "react";
function TopBrands(){
    const topBrandsBannerUrl = "https://i.ibb.co/CtVdP1r/brands-banner.png";
    const {banners} = useContext(bannersContext)
    const [topBrandsData,setTopBrandsData] =useState([])

    useEffect(() => {
        if (banners && banners[1] && banners[1].topBrandsBanners) {
            setTopBrandsData(banners[1].topBrandsBanners);
        }
    }, [banners]);
    return(
        <>
            <img style={{width:"100%"}} src={topBrandsBannerUrl} alt="" />
            <div className="top-brands-container" >
                {
                    topBrandsData.map(data => (
                        <img key={data.id} className="top-brands" src={data.url} alt="" />
                    ))
                }
            </div>
        </>
    )
}
export default TopBrands;