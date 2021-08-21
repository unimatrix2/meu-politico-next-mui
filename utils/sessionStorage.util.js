export const get = () => sessionStorage.getItem('token');

export const set = (value) => sessionStorage.setItem('token', value);