import axios from 'axios'

const axiosPots = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API
})

export {axiosPots}