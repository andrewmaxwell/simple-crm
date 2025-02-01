/* eslint-disable no-use-before-define */

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
}

export interface Note {
    id: number;
    text: string;
    timestamp: Date;
    user: User;
}
