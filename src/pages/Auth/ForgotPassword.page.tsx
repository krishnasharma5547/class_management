import { useFormik } from "formik";
import React from "react";
import InputElement from "../../Components/InputElement/InputElement";
import * as yup from "yup";
import Button from "../../Components/Button/Button";
import BlueLink from "../../Components/BlueLink";
import { FiUser } from "react-icons/fi";
interface props {}
const ForgotPassword: React.FC<props> = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
    }),
    onSubmit: (data) => {
      console.log();
    },
  });

  return (
    <>
      <div className="relative left-0 md:w-1/2 py-12 ">
        <div className="flex flex-col justify-between">
          <div className="md:w-3/4 py-8 px-11  mx-auto text-center">
            <h1 className="text-4xl text-gray-600 font-normal font-sans tracking-wide">
              Password Recovery
            </h1>
            <p className="mt-2">
              Enter your email and instructions will sent to you!
            </p>

            <InputElement
              placeholder={"Email"}
              type={"email"}
              aria-label="email"
              autoComplete="new email"
              required
              touched={formik.touched.email}
              errors={formik.errors.email}
              className={"border-b-2 border-gray-200  py-2 px-2 mt-8"}
              {...formik.getFieldProps("email")}
              icon={<FiUser />}
            ></InputElement>
          </div>
          <div className="w-3/5 mx-auto">
            <Button type="submit" theme={"primary"}>
              Reset
            </Button>
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
      </div>
    </>
  );
};

export default React.memo(ForgotPassword);
