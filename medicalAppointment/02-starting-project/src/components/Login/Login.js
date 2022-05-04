import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
const INITIAL_STATE = {
  value: "",
  isValid: false,
};
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT_EMAIL") {
    return {
      value: action.payload,
      isValid: action.payload.includes("@"),
    };
  }
  if (action.type === "INPUT_EMAIL_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return INITIAL_STATE;
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT_PASSWORD") {
    return {
      value: action.payload,
      isValid: action.payload.trim().length > 6,
    };
  }
  if (action.type === "INPUT_PASSWORD_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return INITIAL_STATE;
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const context = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, INITIAL_STATE);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    INITIAL_STATE
  );

  const emailRef = useRef();
  const passwordRef = useRef();

  const { isValid: passwordIsValid } = passwordState;
  const { isValid: emailIsValid } = emailState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("clean up!");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT_PASSWORD",
      payload: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      context.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailRef.current.active();
    } else if (!passwordIsValid) {
      passwordRef.current.active();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isValid={emailIsValid}
          label="E-Mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          isValid={passwordIsValid}
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
