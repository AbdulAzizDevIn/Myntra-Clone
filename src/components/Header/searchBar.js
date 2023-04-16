import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';

import { InputBase,Button } from "@mui/material";

let searchBtnStyle = {
    color:"grey",
    backgroundColor:"#f5f5f6",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingRight:0,
    paddingLeft:0,
    paddingTop:5,
    
}

const SearchContainer = styled(InputBase)`
    
    width:400px;
    border: 0.5px solid #f5f5f6;
    background: #f5f5f6;
    border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
    font-size: 14px;
    height: 35px;
    padding: 10px;
    color:#696e79;

`

function search(){
    return(
        <>
        <Button style={searchBtnStyle}>
            <SearchIcon/>
        </Button>
        <SearchContainer placeholder="Search for products"/>
        </>
    )

}
export default search;