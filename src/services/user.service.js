import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://kafitis.intbel.ru/api/';

class UserService {

   async getUserOrders() {
        let response = await axios.get(API_URL + 'orders', { headers: authHeader() });
        return response.data;
    }
}

export default new UserService();