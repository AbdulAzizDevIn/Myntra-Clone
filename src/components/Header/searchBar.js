import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';

import { InputBase,Button } from "@mui/material";

let searchBtnStyle = {
    color:"grey",
    backgroundColor:"#f5f5f6",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding:"7px",
    paddingBottom:"8px"
    
}

const SearchContainer = styled(InputBase)`
    
    width:520px;
    border: 0.5px solid #f5f5f6;
    background: #f5f5f6;
    border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
    font-size: 14px;
    height: 45px;
    padding: 12px;
    color:#696e79;

`

function search(){
    return(
        <>
        <Button style={searchBtnStyle}>
            <SearchIcon style={{fontSize:30}}/>
        </Button>
        <SearchContainer placeholder="Search for products"/>
        </>
    )

}
export default search;