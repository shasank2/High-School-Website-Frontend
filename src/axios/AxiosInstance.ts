import axios from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API
const AUTH_KEY = process.env.NEXT_PUBLIC_AUTHORIZATION

const API_ROOT = `${DOMAIN}/api/v1`

export const instance = axios.create(
    {
        baseURL: API_ROOT,
        headers:{
            'Authorization': `${AUTH_KEY}`
        }
    }
)