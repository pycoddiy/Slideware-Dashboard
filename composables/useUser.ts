import type { User } from "~/types"
import { Role } from "~/enums"

// Composable that defines the current user
export const useCurrentUser = () => {
    return useState<User>('current-user', () => {
        return {
            id: 0,
            email: "name@example.com",
            name: "<Last name>, <First name>",
            avatar: '',
            role: Role.USER,
            dashboards: [],
            documents: [],
        }
})}

// Composable to verify if anyone has logged in
export const useIsLoggedIn = () => {
    return useState('is-logged-in', () => { return false })
}

// Composable to verify if the current user is ADMIN
export const useIsAdmin = () => {
    return useIsLoggedIn() && useCurrentUser().value.role === Role.ADMIN
}

export const useCurrentUserAvatar = () => {
    let avatar = useCurrentUser().value.avatar;
    if (!avatar?.length) {
        avatar = 'files/avatars/default_avatar.png';
    }
    return avatar; 
}