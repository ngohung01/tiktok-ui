import * as request from '~/ultils/request';

export const search= async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        // console.log(res)
        return res;
    } catch (error) {
        console.log(error);
    }
};
