import { pink } from "@mui/material/colors";
import { Checkbox } from "@mui/material";
function Checkboxes({handelCheckBox,brandName,check}) {
    
    return (
        <div>
            <Checkbox size="medium"
                checked={check}
                value={brandName}
                onClick={handelCheckBox}
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                    padding: "5px"
                }}
            />
            <label>{brandName}</label>
        </div>
    )
}
export default Checkboxes;