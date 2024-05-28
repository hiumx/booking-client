import { jwtDecode } from 'jwt-decode';

export const isTokenValid = token => {
    if (!token) return false;

    const tokenDecoded = jwtDecode(token);
    console.log(tokenDecoded);
    const currentTime = Date.now() / 1000;
    console.log(currentTime);

    return tokenDecoded.exp >= currentTime;
}