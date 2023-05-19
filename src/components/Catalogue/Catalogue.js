
import { Radio } from "@mui/material"
import { pink } from "@mui/material/colors";

import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsContext from "../../context/products.context";
import Checkboxes from "./CheckBoxes";
function Catalogue() {
    const { productList } = useContext(productsContext);

    const [filterProducts, setFilterProducts] = useState(productList);

    const [gender, setGender] = useState("all");
    const handelGender = (event) => {
        const value = event.target.value;
        setGender(value)
        if (value === "all") {
            setFilterProducts(productList);
        }
        else {
            const filteredData = productList.filter((item) => item.gender === value)
            setFilterProducts(filteredData);
            setGender(value)
        }

    }

    const handelCheckBox = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setFilterProducts(productList.filter((item) => item.name === value))
        }
        else if(!checked){
            setFilterProducts(productList);
        }
    }

    useEffect(() => {
        setFilterProducts(productList)
    }, [productList])



    return (
        <div className="catalogue">
            <div className="catalogue-menu">
                <div className="gender">
                    <label htmlFor="gender" style={{ padding: "10px 5px", fontWeight: "bold" }}>Gender</label>
                    <div>
                        <Radio size="medium" value="all"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "5px"
                            }}
                            checked={gender === "all"}
                            onClick={handelGender}
                        />
                        <label htmlFor="men">All</label>
                    </div>
                    <div>
                        <Radio size="medium" value="M"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "5px"
                            }}
                            checked={gender === "M"}
                            onClick={handelGender}
                        />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div>
                        <Radio size="medium" value="F"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "5px"
                            }}
                            checked={gender === "F"}
                            onClick={handelGender}
                        />
                        <label htmlFor="women">Women</label>
                    </div>
                </div>

                <div className="categories">
                    <label htmlFor="categories" style={{ padding: "10px 5px", fontWeight: "bold" }}>Brands</label>
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="HERE&NOW" />
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="HIGHLANDER" />
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="Roadster" />
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="Dennis Lingo" />
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="WROGN" />
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="Mast & Harbour" />
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="SASSAFRAS" />
                    <Checkboxes handelCheckBox={handelCheckBox} brandName="Kook N Keech" />
                </div>
            </div>


            <div className="display-products">
                <div className="dropdown-container">

                    <select className="dropdown" >
                        Sort by:
                        <option value="option1">Recommended</option>
                        <option value="option2">Whats New</option>
                        <option value="option3">Popularity</option>
                        <option value="option3">Better Discount</option>
                        <option value="option3">Price: High To Low</option>
                        <option value="option3">Price: Low To High</option>
                        <option value="option3">Customer Rating</option>
                    </select>
                </div>
                <div className="all-card">
                    {
                        filterProducts.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })
                    }
                </div>

            </div>
        </div>
    )
}
export default Catalogue;
