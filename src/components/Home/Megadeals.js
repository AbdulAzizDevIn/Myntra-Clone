import { megaDealsData } from "../../constants/data";

function MegaDeals(){
    const megaBannerUrl = "https://i.ibb.co/gR879B7/mega-deal.png";
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