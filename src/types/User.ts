export interface User {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
}

export interface Users {
    users: User[];
}

export interface UserState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}