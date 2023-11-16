import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import AccountItem from "./AccountItem";

import styles from './RandomAccount.module.scss'

import { getSuggested } from "~/services";

const cx= classNames.bind(styles)

function RandomAccounts() {
    const [suggestedUsers,setSuggetedUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getSuggested({})
            setSuggetedUsers([...suggestedUsers,...res.data])
        }
        fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return ( 
        <div className={cx('wrapper')}>
            {suggestedUsers.map(u => (
                <AccountItem
                    key={`page-account-item-${u.id}`}
                    data={u}
                />
            ))}
        </div>
     );
}

export default RandomAccounts;