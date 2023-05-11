import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsContext from "../../context/products.context";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import Footer from "../Home/Footer";

function ProductPage() {
    const { id } = useParams();
    const { productList } = useContext(productsContext);
    const [currentProduct, setCurrentProduct] = useState(null);
    useEffect(() => {
        setCurrentProduct(productList.find((product) => product.id === id))
    }, [id, productList]);

    const [selectSize, setSelectSize] = useState(null)
    const handelSizeClick = (size) => {
        setSelectSize(size)
    }

    return (
        <>
            <div className="product-page">
                <div className="product-img">
                    {
                        currentProduct?.otherImages.map((image) => (
                            <img src={image} alt={currentProduct?.name} />
                        ))
                    }
                </div>
                <div className="product-details">
                    <div style={{ fontWeight: "bold" }}>{currentProduct?.name}</div>

                    <p className="des">{currentProduct?.description}</p>

                    <div >
                        <span style={{ fontWeight: "bold" }}>₹{currentProduct?.finalPrice}  </span>
                        <span style={{ fontSize: 14 }}> MRP </span>
                        <span style={{ textDecoration: "line-through" }}>₹{currentProduct?.strickPrice}</span>
                        <span style={{ color: "#d61b60" }}> ({currentProduct?.discount}% OFF)</span>
                    </div>

                    <p style={{ fontSize: 11, color: "green", fontWeight: "bold", marginTop: 8 }}>inclusive of all taxes</p>

                    <div>
                        <div style={{ fontWeight: "bold", fontSize: 13 }}>SELECT SIZE</div>
                        <div className="size-button">
                            {currentProduct?.productSize.split(",").map((size) => (
                                <button
                                    className={selectSize === size ? "selected" : ""}
                                    onClick={() => handelSizeClick(size)}>{size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bag-wish-button">
                        <button><ShoppingBagOutlinedIcon /> ADD TO BAG</button>
                        <button style={{ background: "white", color: "black", border: "1px solid grey" }}>
                            <FavoriteBorderOutlinedIcon style={{ color: "#fd3e6c" }} />
                            WISHLIST</button>
                    </div>

                    <div style={{ paddingTop: 20 }}>
                        <div style={{ fontSize: 13, fontWeight: "bold", display: "flex", alignItems: "center" }}>
                            DELIVERY OPTIONS
                            <LocalShippingOutlinedIcon style={{ paddingLeft: 8 }} />
                        </div>
                    </div>

                    <div className="delivery">
                        <div><img src="https://i.ibb.co/THzw1MR/fastdl.png" alt="fast" /> Get it by Thu</div>
                        <div><img src="https://i.ibb.co/pw3LqCP/cash.png" alt="cash" /> Pay on delivery available</div>
                        <div><img src="https://i.ibb.co/WvPhQ1K/return.png" alt="return" /> Easy 14 days return & exchange available</div>
                    </div>

                    <div className="offers">
                        <p>100% Original Products</p>
                        <div style={{ paddingTop: 10 }}>BEST OFFERS<SellOutlinedIcon style={{ fontSize: 15 }} /></div>
                        <p>This product is already at its best price</p>
                        <div>Up To Rs 500 Cashback on CRED pay transactions.</div>
                        <ul>
                            <li>Min Spend Rs 1,000. Available only on Android Devices.</li>
                        </ul>
                        <p style={{ fontWeight: "bold", fontSize: 10, color: "#fd3e6c" }}>Terms & Condition</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )

}

export default ProductPage;