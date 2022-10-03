import {IUser} from './interface';

export async function getUserList() {
  const list: IUser[] = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  ).then(res => res.json());
  return list;
}
