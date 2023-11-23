import { createContext, useContext, useState } from 'react';

import { auth } from '~/services';

import { ModalContext } from '../ModalProvider';

export const LoginContext = createContext(null);

function LoginProvider({ children }) {
    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);

    const {handleCloseModal} = useContext(ModalContext);

    const fetchApi = async (email,password) => {
        setIsLoading(true);
        setIsError(false);
        const res = await auth.login(email,password);

        if(res) {
            setData(res.data)
            localStorage.setItem('token',res.meta.token);

            setTimeout(() => {
                setIsLoading(false)
                handleCloseModal()
            },2500)
        }else {
            setIsLoading(false);
            setIsError(true);
        }
    }
    const value = {
        data,
        isLoading,
        isError,
        fetchApi,
        setIsError
    };
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export default LoginProvider;
