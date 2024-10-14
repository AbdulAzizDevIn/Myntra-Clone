import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccessPage() {
    const navigate = useNavigate();
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const searchQuery =  useSearchParams()[0];
   useEffect(()=>{
    if(searchQuery.get("reference")){
        setPaymentSuccessful(true)
    }
    else{
        navigate("/catalogue")
    }
   },[searchQuery,navigate])

    return (
        <>
            
            <div className="bag-header">
                <img src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png" alt="logo" />
                <div>
                    <p >BAG </p> -------------------- <p style={{ color: "#46bda7", textDecoration: "underline", textDecorationThickness: "2px" }}> PAYMENT</p>
                </div>
                <div>
                    <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="secure" />
                    <p>100% SECURE</p>
                </div>
            </div>

           
            {paymentSuccessful && (
                <div className="payment-successful">
                    {localStorage.removeItem("bagList")}
                    <img src="https://i.ibb.co/T4JXdGc/sucessfull.gif" alt="successful" />
                    <div>Thank you for your purchase</div>
                    <p style={{ marginBottom: 0 }}>Your Order ID is: {searchQuery.get("reference")}</p>
                    <p style={{ marginTop: 5 ,marginLeft:5,textAlign:"center" }}>We'll email you an order confirmation with details and tracking info</p>
                    <button onClick={() => navigate("/catalogue")}>Continue Shopping</button>
                </div>
            )}
        </>
    );
}

export default PaymentSuccessPage;

