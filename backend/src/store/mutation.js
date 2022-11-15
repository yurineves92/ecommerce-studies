export function setUser(state, user) {
    state.user.data = user;
}

export function setToken(state, token) {
    state.user.token = token;
    if(token){
        sessionStorage.setItem('token', token);
    } else {
        sessionStorage.removeItem('token');
    }
}