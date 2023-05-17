import { useContext, useEffect, useState } from "react";
import bagContext from "../../context/bag.context";
import { useNavigate } from "react-router-dom";


function Bag() {
    const { bagList, setBagList } = useContext(bagContext);
    const navigate = useNavigate()

    const [totalMrp, setTotalMrp] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(()=>{
        const storageBagList = localStorage.getItem("bagList")
        if(storageBagList){
            setBagList(JSON.parse(storageBagList));
        }
        
    },[setBagList])

    useEffect(()=>{
        setTotalMrp(bagList.reduce((acc, item) => acc + Number(item.strickPrice), 0))
        setDiscount(bagList.reduce((acc,item)=> acc+ Number(item.strickPrice) - Number(item.finalPrice),0))
        setTotalAmount(bagList.reduce((acc,item)=> acc + Number(item.finalPrice),0))
    },[bagList])

    const removeFromBag = (itemId)=>{
        let updatedBagList = bagList.filter((item)=> item.id !== itemId)
        setBagList(updatedBagList);
        localStorage.setItem("bagList",JSON.stringify(updatedBagList))
    }
    return (
        <>
            <div className="bag-header">
                <img src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png" alt="logo" />
                <p>BAG <span> -------------------- </span> PAYMENT</p>
                <div>
                    <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="secure" />
                    <p>100% SECURE</p>
                </div>
            </div>
            {
                bagList.length > 0 ? (
                    <div className="bag-main">
                        <div>
                            <div className="address">
                                <div>
                                    <p>Deliver to: <span>Abdul Aziz,742140</span></p>
                                    <p>Chandpur,Kolla,Kandi</p>
                                </div>
                                <div>
                                    <button>CHANGE ADDRESS</button>
                                </div>
                            </div>

                            <div className="offer">
                                <div>Available Offers</div>
                                <p>10% Instant Discount on IndusInd Bank Debit Cards on a min spend Of Rs 2,500. TCA</p>
                            </div>

                            <div>
                                <img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp" alt="" /> Yay! <span>No convenience fee</span> on this order.
                            </div>

                            <div className="bag-card">
                                {bagList.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.image} alt={item.name} />
                                        <h2 style={{ color: "red" }}>{item.name}</h2>
                                        <p>{item.description}</p>
                                        <p>Size: {item.selectSize}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: {item.finalPrice}</p>
                                        <p>{item.strickPrice}</p>
                                        <p>Discount: {item.discount}%</p>
                                        <button onClick={()=>removeFromBag(item.id)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="total">
                            <div>PRICE DETAILS ({bagList.length} items)</div>
                            <div>
                                <p>Total MRP</p>
                                <p>{totalMrp}</p>
                            </div>
                            <div>
                                <p>Discount on MRP</p>
                                <p>{discount}</p>
                            </div>
                            <div>
                                <p>Convenience Fee <span>Know More</span></p>
                                <p>₹99 <span>FREE</span></p>
                            </div>
                            <div>
                                <p>TOTAL AMOUNT</p>
                                <p>₹{totalAmount}</p>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="bag-empty">
                        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="emptyBag" />
                        <p style={{ fontWeight: "bold", marginBottom: 0 }}>Hey, it feels so light!</p>
                        <p style={{ marginTop: 1, fontSize: 12 }}>There is nothing in your bag.Let's add some items.</p>
                        <button onClick={() => navigate("/catalogue")}>ADD ITEMS</button>
                    </div>
                )
            }

            <div className="bag-footer">
                <div >
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="" />
                    <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="" />
                </div>
                <div><a target="__blank" href="https://www.linkedin.com/in/aziz7477/">Need Help ? Contact Us</a></div>
            </div>

        </>

    )
}

export default Bag;