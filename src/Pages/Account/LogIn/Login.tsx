import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { APP_DISPATCH } from "../../../Settings/store/store";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../../Settings/store/features/authentication/userSlice";
import { userRole } from "../../../Settings/store/features/authentication/types";
import Loading from "../../../Components/Loading";
import { setAuthedState } from "../../../Settings/store/features/authentication/authedSlice";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,25}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,64})/;

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch<APP_DISPATCH>();
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");


  const [errMSg, setErrMsg] = useState<string>("");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [])


  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  async function HandleSubmit(e: any) {
    e.preventDefault();
    if (user === 'admin') {
      if (pwd === '123qwe') {
        dispatch(setAuthedState(true))
        dispatch(setLoggedUser(true, 'admin', 'Mohammed', userRole.DOCTOR))
        localStorage.setItem('activeUser', JSON.stringify({
          isLoggedIN:true,
          userName:user,
          ProfileName:'mohamed',
          role: userRole.DOCTOR
        }));
        navigate('/')
      }
      else {
        setErrMsg('Password is not valid')
      }
    }
    else {
      setErrMsg('Username is not valid')
    }

  }

  return (
    <>
      {
        (isLoading && <Loading overlap/>) || (
          <div className="login">
            <form className="form-login" onSubmit={HandleSubmit}>

              {errMSg && (
                <div className="alert alert-danger d-flex align-items-center gap-2 mb-0" role="alert">
                  <i className="fa fa-warning" aria-hidden="true"></i>
                  <div>
                    {errMSg}
                  </div>
                </div>
              )}
              <div className="input-icon">
                <img src={require('../../../assets/images/icons/user.svg').default} alt="" />

                <input
                  ref={userRef}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  autoComplete="off"
                  onChange={e => setUser(e.currentTarget.value)}
                  value={user}
                />
              </div>
              <div className="input-icon">
                <img src={require('../../../assets/images/icons/lock.svg').default} alt="" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={e => setPwd(e.currentTarget.value)}
                  value={pwd}
                />
              </div>

              <button className="btn btn-secondary btn-login">
                LOGIN
              </button>
            </form>
          </div>
        )
      }
    </>
  )
}

export default Login