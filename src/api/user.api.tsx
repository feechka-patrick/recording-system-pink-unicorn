import { $host } from "."

export const registration = async (email : string, password : string) => {
    const response = await $host.post('auth/registration', {email, password, role: 'user'})
    return response;
}

export const login = async (email : string, password : string) => {
    const response = await $host.post('/auth/login', {email, password})
    return response;
}

export const changeEmail = async (email : string, new_email : string, password : string) => {
    const response = await $host.post('/users/changeEmail', {email, new_email, password})
    return response;
}

export const deleteUser = async (email : string, password : string) => {
    const response = await $host.post('/users/deleteUser', {email, password})
    return response;
}

export const decodeToken = async (token : string) => {
    const response = await $host.post('/auth/decodeToken', {token})
    return response
}
