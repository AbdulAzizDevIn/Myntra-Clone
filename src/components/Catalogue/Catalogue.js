
import { Radio } from "@mui/material"
import { pink } from "@mui/material/colors";

import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsContext from "../../context/products.context";
import Checkboxes from "./CheckBoxes";

import filterProductsContext from "../../context/filterProducts.context";
function Catalogue() {

    const { productList } = useContext(productsContext);
    const { filterProducts } = useContext(filterProductsContext)
    const [newFilterProds, setNewFilterProds] = useState(productList);

    useEffect(() => {
        setNewFilterProds(filterProducts);
    }, [filterProducts])

    const [gender, setGender] = useState("all");

    const handelGender = (event) => {
        const value = event.target.value;
        setGender(value);
        if (value === "all") {
            setNewFilterProds(productList);
        }
        else {
            const filteredData = productList.filter((item) => item.gender === value)
            setNewFilterProds(filteredData);

        }

    }

    const handelCheckBox = (e) => {
        const { checked, value } = e.target;
        if (checked) {
          const filteredData = productList.filter((item) => item.name === value);
          setNewFilterProds(filteredData);
        } else {
          setNewFilterProds(productList);
          setGender("all");
        }
      };
    

    const handelPriceFilter = (e) => {
        const value = e.target.value;
        if (value === "option1") {
            setNewFilterProds(productList);
        } else if (value === "option2") {
            const sortedProducts = [...newFilterProds].sort(
                (a, b) => a.finalPrice - b.finalPrice
            );
            setNewFilterProds(sortedProducts);
        } else if (value === "option3") {
            const sortedProducts = [...newFilterProds].sort(
                (a, b) => b.finalPrice - a.finalPrice
            );
            setNewFilterProds(sortedProducts);
        } else {
            const sortedProducts = [...newFilterProds].sort(
                (a, b) => b.discount - a.discount
            );
            setNewFilterProds(sortedProducts);
        }
    };

    const handelClearAll = () => {
        setNewFilterProds(productList);
        setGender("all");

    }

    useEffect(() => {
        setNewFilterProds(productList);

    }, [productList])



    return (
        <div className="catalogue">
            <div className="catalogue-menu">
                <div className="clear-filter">
                    <p>Filters</p>
                    <button onClick={handelClearAll}>CLEAR All</button>
                </div>
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

                    <select className="dropdown" onChange={handelPriceFilter}>
                        Sort by:
                        <option value="option1">Recommended</option>
                        <option value="option2">Price: Low To High</option>
                        <option value="option3">Price: High To Low</option>
                        <option value="option4">Better Discount</option>
                    </select>
                </div>
                <div className="all-card">
                    {
                        newFilterProds.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })
                    }
                </div>

            </div>
        </div>
    )
}
export default Catalogue;
