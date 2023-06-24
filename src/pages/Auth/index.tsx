import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Login';
import Logup from './Logup';
import { useStore } from 'effector-react';
import { $auth } from 'auth/model';

const Auth = () => {

  const [searchParams, _ ] = useSearchParams();
  const auth = useStore($auth);

  const [isLogin, setisLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    if (auth) navigate('/');
    
  }, [auth])
  console.log(auth);
  
  return (
      isLogin ? <Login switchLogin={setisLogin}/>
    : <Logup switchLogin={setisLogin}/>
  );
};

export default Auth;
