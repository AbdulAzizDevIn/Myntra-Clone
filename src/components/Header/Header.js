import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
//components
import SearchBar from "../Header/searchBar";
import MenuBar from "./MenuBar";

const StyledHeader = styled(AppBar)`
  background: #ffffff;
  padding-top: 5px;
  height: 88px;
  padding-left: 0px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    height: 70px;
    padding-top: 0px;
  }
`;
const StyledToolbar = styled(Toolbar)`
  @media (max-width: 768px) {
    padding:0px;
  }
`;

export default function Header() {
  const logo =
    "https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png";
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <StyledHeader>
        <StyledToolbar>
          <div className="logo">
            <img onClick={handleClickLogo} src={logo} alt="logo" />
          </div>
          <div className="category">
            <span
              onClick={() => {
                navigate("/catalogue");
              }}
            >
              MEN
            </span>
            <span
              onClick={() => {
                navigate("/catalogue");
              }}
            >
              WOMEN
            </span>
          </div>
          <div className="search-container">
            <SearchBar />
          </div>
          <div>
            <MenuBar />
          </div>
        </StyledToolbar>
      </StyledHeader>
      <Outlet></Outlet>
    </>
  );
}
