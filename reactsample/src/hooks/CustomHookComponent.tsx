import { userInfo } from 'os';
import {useEffect, useState} from 'react';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}
// custom hook
function useRestCall(url:string): {
    data:IUser[] | null,
    done:boolean
} {
    const [data, setData] = useState<IUser[]| null> (null);
    const [done, isDone] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            let response:IUser[] = await (await fetch(url)).json();
            setData(response);
            isDone(true);
        })();
    }, [url])

    return {
        data,
        done
    }
}

export default function CustomHookComponent() {
    let {data, done} = useRestCall("https://jsonplaceholder.typicode.com/users");
    if(!done) return <h1>Loading....</h1>
    else {
        return <div>
            {
            data?.map(user => {
                return <div key ={user.id}>
                    {user.name}, {user.email}
                </div>
            })
        }
        </div>
    }
}