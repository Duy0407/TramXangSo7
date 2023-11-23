export interface IAuth{
    success: string,
    token_type: string,
    userId: string,
}

export interface IAuthLogin{
    email: string,
    password: string,
    remember?: boolean,
}