import React from "react";
import TopBar from "../../Components/TopBar";
import BrandImage from "../../images/logo.svg";
import Sidebar from "../../Components/Sidebar/Sidebar";
import InputElement from "../../Components/InputElement/InputElement";
import { handleError } from "../../Components/Card/Card";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../../Components/Button/Button";
// import AppContext from "../../AppContext";
// import { useSelector } from "react-redux";
// import { useReducer } from "react";
// import { AppState } from "../../Store";
// import { User } from "../../Models/User";
import { useAppSelector } from "../../Store";
import { meSelector } from "../../selectors/auth.selectors";
import { updateProfile } from "../../Components/Api/Auth";
import { User } from "../../Models/User";
// import { meFetchAction } from "../../actions/auth.actions";
interface props {}
const UserAccountSetting: React.FC<props> = () => {
  // const {user} = useContext(AppContext)
  const user = useAppSelector(meSelector);
  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name,
      middle_name: user?.middle_name,
      last_name: user?.last_name,
      profile_pic_url: user?.profile_pic_url,
      phone_number: user?.phone_number,
      email: user?.email,
      // phone_number: user?.phone_number,
      // email: user?.email,
      // bio: user!.bio,
      // id: 0,
    },
    validationSchema: yup.object().shape({
      First_Name: yup.string().min(2).required(),
      Middle_Name: yup.string().min(2).required(),
      Last_Name: yup.string().min(2).required(),
      phone_number: yup.string().required().min(10),
      email: yup.string().email().required(),
    }),

    onSubmit: (user) => {
      updateProfile(user as User).then(() => {
        console.log(user);
      });
    },
  });

  return (
    <>
      <TopBar img={BrandImage} brandName={"CRACO"} />
      <div className="flex mt-12">
        <Sidebar />
        <form
          className="flex flex-col   py-4 px-4 w-full md:ml-60 bg-gray-200 pb-20 "
          onSubmit={formik.handleSubmit}
        >
          <div className="bg-white px-4 py-4 shadow-lg">
            <h1 className="text-lg text-gray-700">GENERAL INFORMATION</h1>
            <div className="flex flex-col py-4">
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={user!.profile_pic_url}
                    alt=""
                    onError={handleError}
                    className="w-20 h-20 ml-8 rounded border-r-2 border-black my-auto"
                  />
                  <InputElement
                    id="profile_pic_url"
                    type="text"
                    placeholder={user!.profile_pic_url}
                    autoComplete="profile_pic_url"
                    required
                    label={"Image Url"}
                    labelClass={"ml-5 mt-4"}
                    errors={formik.errors.profile_pic_url}
                    errorClasses="mb-6"
                    className={
                      "border border-gray-500 py-2 px-4 rounded-lg md:mx-4 flex-1"
                    }
                    touched={formik.touched.profile_pic_url}
                    {...formik.getFieldProps("profile_pic_url")}
                  ></InputElement>
                </div>
                <div className="flex md:flex-row flex-col  px-8 mt-4 justify-center items-center flex-wrap">
                  <InputElement
                    id="first_name"
                    type="text"
                    placeholder={user!.first_name}
                    autoComplete="firstName"
                    required
                    label={"First_name"}
                    labelClass={"ml-5"}
                    errors={formik.errors.first_name}
                    errorClasses="w-44 max-w-xl mb-6"
                    className={
                      "border border-gray-500 py-2 px-4 rounded-lg md:mx-4 flex-1"
                    }
                    touched={formik.touched.first_name}
                    {...formik.getFieldProps("first_name")}
                  ></InputElement>
                  <InputElement
                    id="middle_name"
                    type="text"
                    placeholder={user!.middle_name}
                    autoComplete="middle_name"
                    required
                    label={"Middle Name"}
                    labelClass={"ml-5"}
                    errors={formik.errors.middle_name}
                    errorClasses="w-44 max-w-xl  mb-6"
                    className={
                      "border border-gray-500 py-2 px-4 rounded-lg md:mx-4  flex-1"
                    }
                    touched={formik.touched.middle_name}
                    {...formik.getFieldProps("middle_name")}
                    // value={user.middle_name}
                  ></InputElement>
                  <InputElement
                    id="last_name"
                    type="text"
                    autoComplete="last_name"
                    required
                    label={"Last Name"}
                    labelClass={"ml-5"}
                    placeholder={user!.last_name}
                    errors={formik.errors.last_name}
                    errorClasses="w-44 max-w-xl  mb-6"
                    className={
                      "border border-gray-500 py-2 px-4  rounded-lg md:mx-4  flex-1"
                    }
                    touched={formik.touched.last_name}
                    {...formik.getFieldProps("last_name")}
                    // value={user.last_name}
                  ></InputElement>

                  {/* <InputElement
                  id="birth_date"
                    type="number"
                    min="1"
                    max="31"
                    autoComplete="birth_date"
                    required
                    label={"birth_date"}
                    labelClass={"ml-5"}
                    placeholder={user!.birth_date}
                    errors={formik.errors.birth_date}
                    errorClasses="w-44 max-w-xl  mb-6"
                    className={
                      "border border-gray-500 py-2 px-4  rounded-lg md:mx-4  flex-1"
                    }
                    touched={formik.touched.birth_date}
                    {...formik.getFieldProps("birth_date")}
                  ></InputElement>
                  <InputElement
                  id="birth_month"
                    type="number"
                    min="1"
                    max="12"
                    autoComplete="birth_month"
                    required
                    label={"birth_month"}
                    labelClass={"ml-5"}
                    placeholder={user!.birth_month}
                    errors={formik.errors.birth_month}
                    errorClasses="w-44 max-w-xl  mb-6"
                    className={
                      "border border-gray-500 py-2 px-4  rounded-lg md:mx-4  flex-1"
                    }
                    touched={formik.touched.birth_month}
                    {...formik.getFieldProps("birth_month")}
                  ></InputElement>
                  <InputElement
                  id="birth_year"
                    type="number"
                    min="1"
                    max="31"
                    autoComplete="birth_year"
                    required
                    label={"birth_year"}
                    labelClass={"ml-5"}
                    placeholder={user!.birth_year}
                    errors={formik.errors.birth_year}
                    errorClasses="w-44 max-w-xl  mb-6"
                    className={
                      "border border-gray-500 py-2 px-4  rounded-lg md:mx-4  flex-1"
                    }
                    touched={formik.touched.birth_year}
                    {...formik.getFieldProps("birth_year")}
                  ></InputElement> */}
                </div>
              </form>
            </div>
          </div>

          {/* <div className=" px-8 mt-4 justify-between items-center bg-white py-4 shadow-lg"> */}
          {/* <h1 className="text-lg text-gray-700 mb-8">ABOUT</h1>
            <label htmlFor="about" className="text-gray-400 m-1">
              Bio
            </label>
            <textarea
              // name="bio"
              id="bio"
              className="resize-x  border border-gray-600 rounded-md w-full h-32 p-2 mt-1 tracking-wide"
              // value={user?.bio}
              {...formik.getFieldProps("bio")}
            ></textarea>
            <div className="my-4">
              <label htmlFor="gender">Gender: </label>
              <select id="gender" className="mx-2 bg-gray-300  py-2">
                <option value="male">
                  male
                </option>
                <option value="female" className="mx-4 py-4">
                  female
                </option>
              </select>
            </div> */}
          {/* </div> */}

          <div className="relative px-8 mt-4 justify-between items-center bg-white py-4 shadow-lg">
            <h1 className="text-lg text-gray-700 mb-8">CONTACT</h1>
            <div className="flex flex-col md:flex-row flex-wrap w-full">
              <div className="flex-1 px-2">
                <InputElement
                  placeholder={user!.email ? user!.email : undefined}
                  type="email"
                  id="email"
                  autoComplete="new-email"
                  touched={formik.touched.email}
                  errors={formik.errors.email}
                  {...formik.getFieldProps("email")}
                  label={"Email"}
                  labelClass={"ml-5"}
                  required
                  className={
                    "border border-gray-500 py-2 px-4 rounded-lg flex-1"
                  }
                />
              </div>
              <div className="flex-1 px-2">
                <InputElement
                  placeholder={user?.phone_number}
                  type="text"
                  id="phone_number"
                  autoComplete="new-phone_number"
                  touched={formik.touched.phone_number}
                  errors={formik.errors.phone_number}
                  {...formik.getFieldProps("phone_number")}
                  label={"phone_number"}
                  labelClass={"ml-5 w-full"}
                  required
                  className={
                    "border border-gray-500 py-2 px-4 rounded-lg  flex-1"
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-profileBottomBar rounded-t-md md:left-64 h-16 fixed bottom-0 items-center flex justify-between px-4 right-4">
            <Button
              type="reset"
              theme={"secondary"}
              className={"shadow-xl bg-blue-700 hover:bg-blue-800"}
            >
              Reset All
            </Button>
            <Button
              type="submit"
              theme={"outline"}
              className={"bg-green-600 shadow-lg hover:bg-green-700 text-white"}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default React.memo(UserAccountSetting);
