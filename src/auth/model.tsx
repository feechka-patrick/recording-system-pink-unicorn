import {createStore, sample, createEvent, createEffect} from 'effector'
import { UserAuthData, UserData, UserLoginData,} from "./types";
import { useNavigate } from 'react-router-dom';

export const $auth = createStore<boolean>(false);
export const $user = createStore<UserData | null>(null);

export const loginEv = createEvent<UserLoginData>();
export const logoutEv = createEvent();
export const registrationEv = createEvent<UserAuthData>();

export const loginEf = createEffect(( data: UserLoginData) => {
  return {id: '1', name: 'Ann T', email: 'ann@t'} as UserData;
})

export const registrationEf = createEffect(( data: UserAuthData) => {
    return {id: '1', name: 'Ann T', email: 'ann@t'} as UserData;
  })

// LOGIN

sample({
    clock: loginEv,
    target: loginEf,
})

sample({
    clock: loginEf.doneData,
    target: $user,
})

sample({
    clock: loginEf.doneData,
    fn: () => true,
    target: $auth,
})

// REGISTRATION

sample({
  clock: registrationEv,
  target: registrationEf,
})

sample({
  clock: registrationEf.doneData,
  target: $user,
})

sample({
  clock: registrationEf.doneData,
  fn: () => true,
  target: $auth,
})

// REDIRECT WHEN AUTH


sample({
  clock: $auth,
  source: { auth : $auth },
  filter: ({auth}) => auth,
  fn: () => { }
})

// LOGOUT

sample({
  clock: logoutEv,
  fn : () => false,
  target: $auth,
})