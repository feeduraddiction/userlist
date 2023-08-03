import axios from 'axios';
import { User } from '../../types';

export const getUsers = async () => {
	return await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
};
