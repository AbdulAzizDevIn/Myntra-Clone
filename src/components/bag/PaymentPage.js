import { useContext, useState, useEffect } from "react";
import bagContext from "../../context/bag.context";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
    const navigate = useNavigate();
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    const { bagList } = useContext(bagContext);

    const [totalMrp, setTotalMrp] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalMrp(bagList.reduce((acc, item) => acc + Number(item.strickPrice * item.quantity), 0))
        setDiscount(bagList.reduce((acc, item) => acc + Number(item.strickPrice * item.quantity) - Number(item.finalPrice * item.quantity), 0))
        setTotalAmount(bagList.reduce((acc, item) => acc + Number(item.finalPrice * item.quantity), 0))
    }, [bagList])



    const handleSubmit = (event) => {
        event.preventDefault();
        setCardNumber('');
        setExpiryDate('');
        setCVV('');
        setPaymentSuccessful(true);

    };
    const generateRandomNumber = () => {
        const min = 10000000;
        const max = 99999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


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

            {
                paymentSuccessful ? (
                    <div className="payment-successful">

                        <img src="https://i.ibb.co/T4JXdGc/sucessfull.gif" alt="successful" />
                        <div>Thank you for your purchase</div>
                        <p style={{ marginBottom: 0 }}>Your oder ID is: {generateRandomNumber()}</p>
                        <p style={{ marginTop: 5 }}>We'll email  you an oder confirmation with details and tracking info</p>
                        <button onClick={() => navigate("/catalogue")}>Continue Shopping</button>
                    </div>
                ) : (
                    (
                        <div className="checkout">
                            <div className="payment-container">
                                <h3 className="payment-heading">Enter your payment details</h3>
                                <h5 style={{ paddingLeft: 5 }}>CREDIT/DEBIT CARD</h5>

                                <form onSubmit={handleSubmit}>

                                    <input
                                        type="number"
                                        id="cardNumber"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        placeholder="Card number"
                                        maxLength={16}
                                        required
                                    />

                                    <input
                                        type="text"
                                        id="cardholderName"
                                        value={cardholderName}
                                        onChange={(e) => setCardholderName(e.target.value)}
                                        placeholder="Name on card"
                                        required
                                    />


                                    <input
                                        type="text"
                                        id="expiryDate"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        placeholder="MM/YY"
                                        required
                                    />

                                    <input
                                        type="number"
                                        id="cvv"
                                        value={cvv}
                                        onChange={(e) => setCVV(e.target.value)}
                                        placeholder="CVV"
                                        required
                                    />

                                    <input type="submit" value="Pay Now" className="submit-btn" />
                                </form>
                            </div>
                            <div className="total">
                                <div style={{ fontWeight: "bold" }}>PRICE DETAILS ({bagList.length} items)</div>
                                <div id="total-all">
                                    <p>Total MRP</p>
                                    <p>₹{totalMrp}</p>
                                </div>
                                <div id="total-all">
                                    <p>Discount on MRP</p>
                                    <p style={{ color: "green" }}>-₹{discount}</p>
                                </div>
                                <div id="total-all">
                                    <p>Convenience Fee</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p style={{ textDecoration: "line-through" }}>₹99 </p>
                                        <span style={{ color: "green" }}> FREE</span>
                                    </div>
                                </div>
                                <div id="total-all" style={{ borderTop: "1px solid rgb(211, 211, 211)" }}>
                                    <p style={{ fontWeight: "bold" }}>Total Amount</p>
                                    <p style={{ fontWeight: "bold" }}>₹{totalAmount}</p>
                                </div>

                            </div>
                        </div>
                    )
                )
            }


        </>
    )
}

export default PaymentPage;