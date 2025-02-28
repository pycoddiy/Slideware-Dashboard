import type { User } from "~/types"
import { Role } from "~/enums"

// Composable that defines the current user
export const useCUser = () => {
    const cUser = useState<User>('cuser', () => {
        return {
            id: 0,
            email: "name@example.com",
            name: "<Last name>, <First name>",
            avatar: '',
            role: Role.USER,
            dashboards: [],
            documents: [],
        }
    })
    
    const setCUser = (user: User): void => {
        cUser.value = user
    }

    return { cUser, setCUser }
}

// Composable to verify if anyone has logged in
export const useIsLoggedIn = () => {
    return useState('is-logged-in', () => { return false })
}

// Composable to verify if the current user is ADMIN
export const useIsAdmin = () => {
    const { cUser } = useCUser()
    return useIsLoggedIn() && cUser.value.role === Role.ADMIN
}
