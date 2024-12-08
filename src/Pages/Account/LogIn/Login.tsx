import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,25}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,64})/;

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const [userFocus, setUserFocus] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [validName, setValidName] = useState<boolean>(false);
  const [validPwd, setValidPwd] = useState<boolean>(false);

  const [errMSg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(user, result);
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(pwd, result);
    setValidPwd(result)
  }, [pwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  async function HandleSubmit(e:any){
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className="login">
      <form className="form-login" onSubmit={HandleSubmit}>
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
            onChange={e=> setPwd(e.currentTarget.value)}
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

export default Login