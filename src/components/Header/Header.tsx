import * as S from "./styled";
import { Link} from "react-router-dom";
import Divider from "@mui/material/Divider";
import UserAvatar from "./Avatar";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Tooltip from "@mui/material/Tooltip";
import { logoutEv } from "auth/model";

const Header = () => {
  const handleLogout = () => {
    logoutEv();
  }

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
            <Link to="/info-pages">
              <S.Item>FAQ</S.Item>
            </Link>
          </S.ItemWrapper>
        </S.ItemListWrapper>

        <S.RightMenuWrapper>
          <UserAvatar/>
          <Tooltip title="Выйти">
            <Link to='/auth' onClick={() => handleLogout}>
              <LogoutOutlinedIcon 
                color="secondary" 
                sx={
                  {'&:hover': {
                  color: '#86c232',
                  borderRadius: '10px',
                  cursor: 'pointer'
                },}
                } />
            </Link>
            
          </Tooltip>
          
        </S.RightMenuWrapper>
        
        
      </S.HeaderWrapper>
      <Divider sx={{borderColor: '#86c232'}}/>
    </>
  );
};

export default Header;
