import instance from "../configs/axios.config";

export const login = async (form, helpers, dispatch) => {
    try {
        const { data } = await instance.post('/usuario/acesso', form);
        dispatch({
            type: 'PROVIDE-USER',
            payload: data
        });
    } catch (error) {
        if (error.response.data.type) {
            helpers.setFieldError('cpf', 'CPF ou senha incorretos');
            helpers.setFieldError('password', 'CPF ou senha incorretos');
        }
    }
};

export const signup = (form) => {
    instance.post('/usuario/registro', form)
    .then((data) => {
        return data.data;
    })
    .catch((err) => {
        return err;
    });
};

export const logout = async () => {
    await instance.get('/usuario/logout');
}