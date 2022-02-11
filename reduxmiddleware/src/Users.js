import {fetchUsers} from './redux/thunk/thunkapi';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function Users() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    let {loading, error, users} = state;

    useEffect(() => {
        dispatch(fetchUsers());
    },[]);

    return <div>
        {
            loading? <h1>Loading....</h1>:
            users.map(user => <h1 key={user.id}>{user.name}</h1>)
        }
    </div>
}