import { Switch } from "@headlessui/react";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import BlueLink from "../Components/BlueLink";
import Button from "../Components/Button/Button";
import InputElement from "../Components/InputElement/InputElement";

const Signup: React.FC = () => {
    const [enabled, setEnabled] = useState(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
    },

    validationSchema: yup.object().shape({
      userName: yup.string().min(2).required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        history.push("./login");
      }, 2000);
    },
  });
  return (
    <div className="md:w-1/2 absolute left-0">
      <div className="flex flex-row justify-between">
        <div className="md:w-3/4 py-8 px-11  mx-auto">
          <div>
            <h1 className="text-4xl text-gray-700 mb-4">
              Get started with a free acount
            </h1>
            Already have an account?
            <Link to="/login">
              <BlueLink> Login</BlueLink>
            </Link>
          </div>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="mt-8">
              <InputElement
                id="userName"
                autoComplete="new-userName"
                type="text"
                required
                errors={formik.errors.userName}
                touched={formik.touched.userName}
                className={"border-b-2 border-gray-200"}
                placeholder={"UserName"}
                {...formik.getFieldProps("userName")}
              ></InputElement>
              <InputElement
                id="email"
                autoComplete="new-email"
                type="email"
                errors={formik.errors.email}
                touched={formik.touched.email}
                className={"border-b-2 border-gray-200"}
                placeholder={"Email"}
                required
                {...formik.getFieldProps("email")}
              ></InputElement>
              <InputElement
                id="password"
                autoComplete="password"
                type={enabled ? "text" : "password"}
                errors={formik.errors.password}
                touched={formik.touched.password}
                className={"border-b-2 border-gray-200"}
                placeholder={"Password"}
                required
                {...formik.getFieldProps("password")}
              ></InputElement>
              <div className="mt-4">
                <input type="checkbox" />{" "}
                <span className="ml-2">
                  I agree to the
                  <BlueLink> terms and conditions </BlueLink>
                </span>
              </div>

              <div className="flex justify-between mt-8">
                <div className="mt-2">
                  <span className="font-mono">show password </span>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                      enabled ? "bg-blue-600" : "bg-gray-200"
                    } relative inline-flex items-center h-5 rounded-full w-10`}
                  >
                    <span className="sr-only"></span>
                    <span
                      className={`${
                        enabled ? "translate-x-6" : "translate-x-1"
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
                    Get Started!
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
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
  );
};
export default React.memo(Signup);
