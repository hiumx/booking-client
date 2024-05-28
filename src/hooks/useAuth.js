import { useDispatch } from "react-redux";
import { getMyInfo } from "~/store/actions/user.action";

const { useEffect } = require("react");
const { useNavigate } = require("react-router-dom");
const { isTokenValid } = require("~/utils/auth");

const useAuth = () => {
    // const navigator = useNavigate();
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!isTokenValid(token)) {
            localStorage.removeItem("token");
            dispatch(getMyInfo());
            // navigator("/sign-in");
            // window.location.href = "/auth/sign-in"
        }
    }, [token]);
}

export default useAuth;