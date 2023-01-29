import { useSelector } from "react-redux"

export const useUsername = () => {
    const username = useSelector(state => state.user.username);
    return username;
}