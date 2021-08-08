import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import Button from "../../Components/Button/Button";
import BlueLink from "../../Components/BlueLink";
import InputElement from "../../Components/InputElement/InputElement";
import * as yup from "yup";
import { useFormik } from "formik";
import { Switch } from "@headlessui/react";
import { login } from "../../Components/Api/Auth";
import { FiUser } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
// import AppContext from "../../AppContext";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../Store";
import { loginAction, loginPasswordToggleAction } from "../../actions/auth.actions";
import { passwordToggle } from "../../selectors/auth.selectors";
// import { AppState, GROUP_PASSWORD_TOGGLE, LOGIN_ME } from "../../Store";

interface props {}
const Login: React.FC<props> = () => {
  // const [loginData, setLoginData] = useState({ email: "", password: "" });
  // const [touched, setTouched] = useState({ email: false, password: false });
  // const [submitting, setSubmitting] = useState(false);
  // let history = useHistory();
  // const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoginData({ ...loginData, [event.target.name]: event.target.value });
  // };
  // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  //   setTouched({ ...touched, [event.target.name]: true });
  // };
  // let emailError = "";
  // let passwordError = "";
  // if (!loginData.email) {
  //   emailError = "Email Field is required";
  // } else if (!loginData.email.endsWith("@gmail.com")) {
  //   emailError = "Please enter valid email adress";
  // }
  // if (!loginData.password) {
  //   passwordError = "Password is required";
  // } else if (loginData.password.length < 8) {
  //   passwordError = "Password shuld be of minimum 8 charecters";
  // }
  // return (
  //   <>
  //     <div className="relative left-0 w-1/2 ">
  //       <div className="flex flex-row justify-between">
  //         <div className="w-2/3 py-8 px-11  mx-auto">
  //           <h1 className="text-4xl text-gray-700 mb-4">
  //             Log In to <BlueLink>CORK</BlueLink>
  //           </h1>
  //           <div className="mb-12">
  //             <span>New Here? </span>
  //             <Link to={"/signup"}>
  //               <BlueLink>Create an account</BlueLink>
  //             </Link>
  //           </div>
  //           <div className="">
  //             <form
  //               action=""
  //               onSubmit={(e) => {
  //                 e.preventDefault();
  //                 if (!emailError || !passwordError) {
  //                   setSubmitting(true);
  //                   setTimeout(() => {
  //                     console.log(loginData);
  //                     history.push("./dashboard");
  //                     setSubmitting(false);
  //                   }, 5000);
  //                 }
  //               }}
  //             >
  //               <label
  //                 className="hidden uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                 htmlFor="email"
  //               >
  //                 Enter Email
  //               </label>
  //               <div>
  //                 <input
  //                   name="email"
  //                   id="email"
  //                   type="email"
  //                   placeholder="Email"
  //                   autoComplete="email"
  //                   value={loginData.email}
  //                   onBlur={handleBlur}
  //                   required
  //                   onChange={handleEvent}
  //                   className=" inline-block appearance-none bg-transparent  w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none my-4 border-b-2 border-gray-200"
  //                 ></input>
  //               </div>
  //               <div>
  //                 {touched.email && (
  //                   <span className="text-red-500">{emailError}</span>
  //                 )}
  //               </div>
  //               <label
  //                 className="hidden uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                 htmlFor="password"
  //               >
  //                 Enter Password
  //               </label>
  //               <input
  //                 className="appearance-none bg-transparent border-b-2 border-gray-200 w-full text-gray-800 mr-3 py-1 px-2 my-4 leading-tight focus:outline-none"
  //                 name="password"
  //                 id="password"
  //                 type="password"
  //                 placeholder="Password"
  //                 aria-label="password"
  //                 autoComplete="new password"
  //                 value={loginData.password}
  //                 onChange={handleEvent}
  //                 onBlur={handleBlur}
  //               ></input>
  //               <div>
  //                 {touched.password && (
  //                   <span className="text-red-500">{passwordError}</span>
  //                 )}
  //               </div>
  //               <div className="flex justify-between mt-4">
  //                 <div className="mt-2">
  //                   <span className="font-mono">show password </span>
  //                   <input
  //                     type="checkbox"
  //                     id="toggle-password"
  //                     className=""
  //                   ></input>
  //                 </div>
  //                 <div>
  //                   <Button theme={"text-white bg-blue-500"} type={"submit"}>
  //                     Log in
  //                   </Button>
  //                 </div>
  //                 {submitting && (
  //                   <ImSpinner2 className="w-7 h-7 mt-2 animate-spin"></ImSpinner2>
  //                 )}
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="text-center mt-8">
  //         <input type="checkbox" id="toggle-password" className=""></input>
  //         <span className="text-gray-700 font-extralight font-sans ml-1">
  //           Keep me logged in
  //         </span>
  //       </div>
  //       <span className="block mt-4 text-center">
  //         <BlueLink>Forget Password?</BlueLink>
  //       </span>
  //       <div className="text-center mt-16">
  //         <p>
  //           © 2020 All Rights Reserved. <BlueLink> CORK </BlueLink> product of
  //         </p>
  //         <p>
  //           Designreset.
  //           <BlueLink> Cookie Preferences Privacy </BlueLink>, and
  //           <BlueLink> Terms </BlueLink>
  //         </p>
  //       </div>
  //     </div>
  //   </>
  // );

  // const {setUser} = useContext(AppContext)

  const dispatch = useDispatch();
  const passwordToogle = useAppSelector(
    passwordToggle
  );
  // const [enabled, setEnabled] = useState(false);
  const switchButton = () => {
    dispatch(loginPasswordToggleAction(!passwordToogle));
  };

  // const [showHidePassword, setShowHidePassword] = useState(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      login(data).then((user) => {
        dispatch(loginAction(user));
        history.push("/dashboard");
      });
    },
  });

  return (
    
    <>
    {console.log("login rerender")}
      <div className="relative left-0 md:w-1/2 ">
        <div className="flex flex-row justify-between">
          <div className="md:w-3/4 py-8 px-11  mx-auto">
            <h1 className="text-4xl text-gray-700 mb-4">
              Log In to <BlueLink>CORK</BlueLink>
            </h1>
            <div className="mb-12">
              <span>New Here? </span>
              <Link to={"/signup"}>
                <BlueLink>Create an account</BlueLink>
              </Link>
            </div>
            <div className="">
              <form action="" onSubmit={formik.handleSubmit}>
                <InputElement
                  id="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  errors={formik.errors.email}
                  className={"border-b-2 border-gray-200 py-2 px-4"}
                  touched={formik.touched.email}
                  icon={<FiUser />}
                  {...formik.getFieldProps("email")}
                ></InputElement>

                <InputElement
                  id="password"
                  type={passwordToogle ? "text" : "password"}
                  placeholder={"Password"}
                  aria-label="password"
                  autoComplete="new password"
                  required
                  touched={formik.touched.password}
                  errors={formik.errors.password}
                  className={"border-b-2 border-gray-200  py-2 px-4"}
                  {...formik.getFieldProps("password")}
                  icon={<HiLockClosed />}
                ></InputElement>

                <div className="flex justify-between mt-4">
                  <div className="mt-2">
                    <span className="font-mono">show password </span>
                    {/* <input
                      type="checkbox"
                      id="toggle-password"
                      className=""
                    ></input> */}

                    <Switch
                      checked={passwordToogle}
                      onChange={switchButton}
                      className={`${
                        passwordToogle ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex items-center h-5 rounded-full w-10 `}
                    >
                      <span className="sr-only">Enable notifications</span>
                      <span
                        className={`${
                          passwordToogle ? "translate-x-6" : "translate-x-1"
                        } inline-block w-4 h-4 transform bg-blue-500 rounded-full`}
                      />
                    </Switch>
                  </div>
                  <span className="w-10">
                    {formik.isSubmitting && (
                      <ImSpinner2 className=" w-7 h-7 mt-2 animate-spin"></ImSpinner2>
                    )}
                  </span>
                  <div>
                    <Button theme={"primary"} type={"submit"}>
                      Log in
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <input type="checkbox" id="toggle-password" className=""></input>

          <span className="text-gray-700 font-extralight font-sans ml-1">
            Keep me logged in
          </span>
        </div>
        <span className="block mt-4 text-center">
          <Link to="/forgotPassword">
            <BlueLink>Forget Password?</BlueLink>
          </Link>
        </span>
        <div className="text-center mt-16 px-8 pb-8">
          <p>
            © 2020 All Rights Reserved. <BlueLink> CORK </BlueLink> product of
          </p>
          <p>
            Designreset.
            <BlueLink> Cookie Preferences Privacy </BlueLink>, and
            <BlueLink> Terms </BlueLink>
          </p>
        </div>
      </div>
    </>
  );
};
export default React.memo(Login);
