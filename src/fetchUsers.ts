import axios from "axios";
import {Users} from "./types/User";

export const fetchUsers = async () => {
    try {
        const response = await axios.get<Users>('https://dummyjson.com/users')

        let result = response.data.users;

        for(let item of result){
            item.name = `${item.firstName} ${item.lastName}`
        }
        return result
    } catch (err) {
        console.log(err)
        return undefined
    }
}