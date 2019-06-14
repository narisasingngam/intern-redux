export function login(userName: string): Promise<boolean> {
    if (!userName) {
        return Promise.reject('username empty')
    }
    return Promise.resolve(userName === 'Mint');
}