import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://kafitis.intbel.ru/api/';

class UserService {
    getChessBoards() {
        return axios.get(API_URL + 'chessboards');
    }

    getUserOrders() {
        return axios.get(API_URL + 'orders', { headers: authHeader() });
    }

    getDeliveryMethods() {
        return axios.get(API_URL + 'deliveryMethods', { headers: authHeader() });
    }
}

export default new UserService();