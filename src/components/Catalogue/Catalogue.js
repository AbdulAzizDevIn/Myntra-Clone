import { Checkbox } from "@mui/material";
import { Radio } from "@mui/material"
import { pink } from "@mui/material/colors";

import { useState } from "react";
import ProductCard from "./ProductCard";
function Catalogue() {

    const [gender, setGender] = useState("all");
    const handelGender = (event) => {
        setGender(event.target.value);
    }

    return (
        <div className="catalogue">
            <div className="catalogue-menu">
                <div className="gender">
                    <label htmlFor="gender" style={{ padding: "10px 5px", fontWeight: "bold" }}>Gender</label>
                    <div>
                        <Radio size="small" value="all"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                            checked={gender === "all"}
                            onClick={handelGender}
                        />
                        <label htmlFor="men">All</label>
                    </div>
                    <div>
                        <Radio size="small" value="men"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                            checked={gender === "men"}
                            onClick={handelGender}
                        />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div>
                        <Radio size="small" value="women"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                            checked={gender === "women"}
                            onClick={handelGender}
                        />
                        <label htmlFor="women">Women</label>
                    </div>
                </div>

                <div className="categories">
                    <label htmlFor="categories" style={{ padding: "10px 5px", fontWeight: "bold" }}>Brands</label>
                    <div>
                        <Checkbox size="small"
                            
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="white">HERE&NOW</label>
                    </div>
                    <div>
                        <Checkbox size="small"
                            
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="folded-sleeves">HIGHLANDER</label>
                    </div>
                    <div>
                        <Checkbox size="small"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="white">Roadster</label>
                    </div>
                    <div>
                        <Checkbox size="small"
                            
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="white">Dennis Lingo</label>
                    </div>
                    <div>
                        <Checkbox size="small"
                            
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="white">WROGN</label>
                    </div>
                    <div>
                        <Checkbox size="small"
                            
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="white">Mast & Harbour</label>
                    </div>
                    <div>
                        <Checkbox size="small"
                            
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="white">SASSAFRAS</label>
                    </div>
                    <div>
                        <Checkbox size="small"
                            
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="white">Kook N Keech</label>
                    </div>
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
                    <ProductCard/>
                </div>

            </div>
        </div>
    )
}
export default Catalogue;