
import * as S from './styled';
import { Container } from 'components/Container/styled';import TextField from '@mui/material/TextField';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Link, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginEv } from 'auth/model';

const Logup = ({
  switchLogin
}:
{
  switchLogin: (val: boolean) => void 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  return (
    <Container>
      <S.AuthWrapper>
        <S.AuthBox>
            <S.WhiteTitle>Регистрация</S.WhiteTitle>

            <TextField
                required
                id="standard-required"
                label="Email"
                defaultValue=""
                variant="standard"
                sx={{
                  marginTop: '30px',
                }}
              />


            <FormControl sx={{ marginTop: '30px'}} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
              />
            </FormControl>

            <Button
                onClick={() => loginEv({email: 'dsd', password: 'dsdd'})}
                sx={{ marginTop: 'auto', marginBottom: '10px'}}
                 color="primary" variant="contained">Зарегистрироваться</Button>
            
            <Link 
                onClick={() => switchLogin(true)}
                sx={{ marginLeft: 'auto', marginTop: '15px', cursor: 'pointer'}} 
                color="primary" variant="body2">
                  Уже есть аккаунт? Вход
            </Link>
        </S.AuthBox>
      </S.AuthWrapper>
    </Container>
  );
};

export default Logup;
