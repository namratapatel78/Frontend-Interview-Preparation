import { useContext, useReducer, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import apiCall from "../../api/axios";
import Input from "../../components/Input/Input";
import Modal from "../../components/Modal/Modal";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import apiConstants from "../../constants/apiConstants";
import { LOGIN_FORM } from "../../constants/form";
import MainContext from "../../context/main-context";
import "./Login.scss";

const Login = () => {
  const context = useContext(MainContext);

  const loginReducer = (state, action) => {
    // console.log(state[0].isValid, action);
    let fieldsCopy = [...state];
    fieldsCopy.forEach((field) => {
      if (action.type === "VALIDATE") {
        debugger;
        if (!field.value || !field.regex.test(field.value)) {
          if (field.value && !field.regex.test(field.value)) {
            field.errMessage = `Enter valid ${field.placeholder}`;
          }
          setIsFormValid(false);
          field.isValid = false;
        } else {
          field.isValid = true;
        }
      } else {
        if (action.type === field.name) {
          field.value = action.value.trim();
          if (field.regex.test(field.value)) {
            field.isValid = true;
          }
        }
      }
    });
    console.log(fieldsCopy);
    return fieldsCopy;
  };

  const [isFormValid, setIsFormValid] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loginState, dispatchLogin] = useReducer(loginReducer, LOGIN_FORM);

  const history = useHistory();

  const setModal = () => {
    setModalContent(null);
  };

  const changeHandler = (type, event) => {
    dispatchLogin({ type: type, value: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatchLogin({ type: "VALIDATE" });

    setIsFormValid(true);
    // vaildate form // sometimes getting called before dispatch
    // check for solution
    let fieldsCopy = [...loginState];
    fieldsCopy.forEach((field) => {
      if (!field.isValid) {
        setIsFormValid(true);
        // isValid = false;
      }
    });

    if (isFormValid) {
      login();
    }
  };

  const resetForm = () => {
    let fieldsCopy = [...loginState];
    fieldsCopy.forEach((field) => {
      field.value = "";
      field.isValid = false;
    });
    dispatchLogin(fieldsCopy);
  };

  const login = () => {
    const payload = {
      loginSource: "Email",
      logonId: loginState[0].value,
      password: loginState[1].value,
    };

    apiCall.postRequest(
      apiConstants.auth.login,
      (response, type) => {
        if (type === "success") {
          resetForm();
          window.localStorage.setItem(
            "access_token",
            response.data.responseObject.oauth2AccessToken.access_token
          );
          localStorage.setItem(
            "refresh_token",
            response.data.responseObject.oauth2AccessToken.refresh_token
          );
          history.push("/dashboard");
        } else {
          setModalContent({
            message: response.data.apiResponseStatus.message,
          });
        }
      },
      payload
    );

    context.onLogin();
  };

  return (
    <div className='login'>
      <div className='external-heading'>Welcome!</div>
      {modalContent && (
        <Modal
          onConfirm={setModal}
          title={modalContent.title}
          message={modalContent.message}
        />
      )}
      <SocialLogin />
      <div className='sign-in-text'>or Sign in with email</div>
      <form onSubmit={submitHandler}>
        {loginState.map((field) => {
          return (
            <div className='field' key={"login" + field.name}>
              <Input
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={changeHandler.bind(this, field.name)}
                errMessage={field.errMessage}
                visibleError={!field.isValid}
              />
            </div>
          );
        })}
        <div className='account text-center forgot-password-link'>
          <NavLink to='/external/forgot-password' className='forgot-password'>
            <div className='primary-color'>Forgot Password</div>
          </NavLink>
        </div>
        <div className='button-block'>
          <button type='submit' className='sign-in-button-block'>
            Sign In
          </button>
        </div>
        <div className='account text-center sign-up-wrapper'>
          Don't have an account?
          <NavLink to='/external/signup' className='sign-up-link'>
            <div className='primary-color'>Sign up</div>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
