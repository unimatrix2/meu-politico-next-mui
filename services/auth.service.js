import instance from "../configs/axios.config";
import AppError from "../errors/AppError";

export const login = async (form) => {
    try {
        const data = await instance.post('/usuario/acesso', form);
        return data.data;
    } catch (error) {
        throw new AppError(error.data);
    }
};

export const signup = (form) => {
    instance.post('usuario/registro', form)
    .then((data) => {
        return data.data;
    })
    .catch((err) => {
        return err;
    });
};