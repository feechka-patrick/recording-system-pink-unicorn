
export interface UserData {
    id: string,
    name: string,
    email: string,
}

export interface UserAuthData { //registration
    name: string,
    email: string,
    password: string,
}

export interface UserLoginData { //login
    email: string,
    password: string,
}
