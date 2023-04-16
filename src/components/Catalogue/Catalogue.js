import { Checkbox } from "@mui/material";
import { Radio } from "@mui/material"
import { pink } from "@mui/material/colors";
function Catalogue() {

    return (
        <div className="catalogue">
            <div className="catalogue-menu">
                <div className="gender">
                    <label htmlFor="gender" style={{ padding: "10px 5px", fontWeight: "bold" }}>Gender</label>
                    <div>
                        <Radio size="small"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <Radio size="small"
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                padding: "3px"
                            }}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

                <div className="categories">
                    <label htmlFor="categories" style={{ padding: "10px 5px", fontWeight: "bold" }}>Categories</label>
                    <div>
                    <Checkbox size="small"
                        defaultChecked
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                            padding:"3px"
                        }}
                    />
                    <label htmlFor="white">White</label>
                    </div>
                    <div>
                    <Checkbox size="small"
                        defaultChecked
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                            padding:"3px"
                        }}
                    />
                    <label htmlFor="folded-sleeves">Folded Sleeves</label>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default Catalogue;