import {atom, selector, selectorFamily} from 'recoil';
import {IUser} from './interface';

export const userList = atom<IUser[]>({
  key: 'userList',
  default: [],
});

export const selectId = atom({
  key: 'selectId',
  default: 1,
});

export const currentUserState = atom<IUser>({
  key: 'currentUser',
  default: undefined,
});

// export const userListState = selector({
//   key: 'userListState',
//   get: async ({get}) => {
//     const response = await getUserList();
//     return response;
//   },
// });

export const nowUser = atom<IUser>({
  key: 'nowUser',
  default: undefined,
});

export const getSelectUser = selectorFamily({
  key: 'selectOne',
  get: (id: number) => async () => {
    const user = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .catch(err => console.log('An error occurred', err));
    return user;
  },
});

export const selectingUser = selector({
  key: 'selectingUser',
  get: async ({get}) => {
    const id = get(selectId);
    const user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    ).then(res => res.json());
    return user;
  },
});
