import type { User } from "~/types"
import { Role } from "~/enums"
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
