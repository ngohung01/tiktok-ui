import * as requestHttps from '~/utils/httpRequest'

const login = async (email,password) => {
    try {
        const res = await requestHttps.post('auth/login',{
            email,
            password
        })
        // console.log(res)
        return res;
    } catch (error) {
        console.log('ErrorLogin: ', error)
    }
}

export {login}