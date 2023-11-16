import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({page = 1, perpage = 5}) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page:perpage,
            },
        });
        // console.log(res)
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getFollowing= async (page=1) => {
    try {
        const res = await httpRequest.get('users/followings', {
            params: {
                page,
            },
        });
        // console.log(res)
        return res;
    } catch (error) {
        console.log(error);
    }
};
