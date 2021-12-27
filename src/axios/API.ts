import { instance } from "./AxiosInstance";

export const getApiData = async(url:string,param?:string)=>{
    let response
    try {
        response = await instance({
            method:"GET",
            url: `${url}`,
            params:param,
            transformResponse:[(responseData)=>{
                return JSON.parse(responseData)
            }]
        })
    } catch (error) {
        return error
    }    
    return response;
}

