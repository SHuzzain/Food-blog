import React from "react";
import SearchNav from "./SearchNav";
import { MenuNav } from "./MenuNav";
import { useSelector } from "react-redux";
import { HeaderNavMenu, HeaderNavSearch } from "../../feature/HeaderNavData";

function HeaderPopUp() {
  const headerSearch = useSelector(HeaderNavSearch);
  const headerMenu = useSelector(HeaderNavMenu);
  return (
    <>
      <SearchNav status={headerSearch} />
      <MenuNav status={headerMenu} />
    </>
  );
}

export default HeaderPopUp;
