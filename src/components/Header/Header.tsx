import * as S from "./styled";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import UserAvatar from "./Avatar";


const Header = () => {


  return (
    <>
      <S.HeaderWrapper>
        <S.ItemListWrapper>
          <S.ItemWrapper>
            <Link to="/">
              <S.Item>Главное</S.Item>
            </Link>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <Link to="/calendar">
              <S.Item>Календарь</S.Item>
            </Link>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <Link to="/faq">
              <S.Item>FAQ</S.Item>
            </Link>
          </S.ItemWrapper>
        </S.ItemListWrapper>

        <S.AvatarWrapper>
          <UserAvatar/>
        </S.AvatarWrapper>
        
      </S.HeaderWrapper>
      <Divider />
    </>
  );
};

export default Header;
