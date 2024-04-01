import { useContext, useEffect, useState } from "react";
import bannersContext from "../../context/banners.context";
function BudgetBuys(){
    const budgetBannerUrl = "https://i.ibb.co/dt0D3nZ/Budget-buy.png"

    const {banners} = useContext(bannersContext)
    const [budgetBuyData,setBudgetBuyData] =useState([])

    useEffect(() => {
        if (banners && banners[3] && banners[3].budgetBuyBanners) {
            setBudgetBuyData(banners[3].budgetBuyBanners);
        }
    }, [banners]);
    return(
        <>
            <img style={{width:"100%"}} src={budgetBannerUrl} alt="" />
            <div className="budget-buy-container">
            {
                budgetBuyData.map(data =>(
                    <img key={data.id} className="budget-buy" src={data.url} alt="" />
                ))
            }
            </div>
           
        </>
        
        
    )

}
export default BudgetBuys;