export default function authHeader() {
    let accessToken = localStorage.getItem('access-token');

    if (accessToken) {
        return { Authorization: 'Bearer ' + accessToken };
    } else {
        return {};
    }
}