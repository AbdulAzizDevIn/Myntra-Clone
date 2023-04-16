import { budgetBuyData } from "../../constants/data";

function BudgetBuys(){
    const budgetBannerUrl = "https://i.ibb.co/dt0D3nZ/Budget-buy.png"
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