import React from "react";
import TopBar from "../../Components/TopBar";
import BrandImage from "../../images/logo.svg";
import Sidebar from "../../Components/Sidebar/Sidebar";
import InputElement from "../../Components/InputElement/InputElement";
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
interface props {}
const UserAccountSetting: React.FC<props> = () => {
  // const {user} = useContext(AppContext)

  const user = useAppSelector(meSelector)
  const formik = useFormik({
    initialValues: {
      First_Name: "",
      Middle_Name: "",
      Last_Name: "",
      role: "",
      title: "",
      location: "",
      phone: "",
    },
    validationSchema: yup.object().shape({
      First_Name: yup.string().min(2).required(),
      Middle_Name: yup.string().min(2).required(),
      Last_Name: yup.string().min(2).required(),
      role: yup.string().min(4).required(),
      title: yup.string().min(4).required(),
      location: yup.string().min(3).required(),
      phone: yup.number().required().min(10),
    }),
    onSubmit: (data) => {},
  });

  return (
    <>
      <TopBar img={BrandImage} brandName={"CRACO"} />
      <div className="flex mt-12">
        <Sidebar />
        <form className="flex flex-col   py-4 px-4 w-full md:ml-60 bg-gray-200 ">
          <div className="bg-white px-4 py-4 shadow-lg">
            <h1 className="text-lg text-gray-700">GENERAL INFORMATION</h1>
            <div className="flex flex-col md:flex-row py-4">
              <img
                src={user!.profile_pic_url}
                alt=""
                className="w-20 h-20 ml-8 rounded border-r-2 border-black my-auto"
              />
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="flex md:flex-row flex-col  px-8 mt-4 justify-between items-center flex-wrap">
                  <InputElement
                    id="First_Name"
                    type="text"
                    placeholder={user!.first_name}
                    autoComplete="firstName"
                    required
                    label={"First Name"}
                    labelClass={"ml-5"}
                    errors={formik.errors.First_Name}
                    errorClasses="w-44 max-w-xl"
                    className={
                      "border border-gray-500 py-2 px-4 rounded-lg md:mx-4 flex-1"
                    }
                    touched={formik.touched.First_Name}
                    {...formik.getFieldProps("First_Name")}
                  ></InputElement>
                  <InputElement
                    id="Middle_Name"
                    type="text"
                    placeholder={user!.middle_name}
                    autoComplete="Middle_Name"
                    required
                    label={"Middle Name"}
                    labelClass={"ml-5"}
                    errors={formik.errors.Middle_Name}
                    errorClasses="w-44 max-w-xl"
                    className={
                      "border border-gray-500 py-2 px-4 rounded-lg md:mx-4  flex-1"
                    }
                    touched={formik.touched.Middle_Name}
                    {...formik.getFieldProps("Middle_Name")}
                    // value={user.middle_name}
                  ></InputElement>
                  <InputElement
                    id="Last_Name"
                    type="text"
                    autoComplete="Last_Name"
                    required
                    label={"Last Name"}
                    labelClass={"ml-5"}
                    placeholder={user!.last_name}
                    errors={formik.errors.Last_Name}
                    errorClasses="w-44 max-w-xl"
                    className={
                      "border border-gray-500 py-2 px-4  rounded-lg md:mx-4  flex-1"
                    }
                    touched={formik.touched.Last_Name}
                    {...formik.getFieldProps("Last_Name")}
                    // value={user.last_name}
                  ></InputElement>
                  <InputElement
                    placeholder={
                      user!.roles ? user!.roles : "Software developer"
                    }
                    type="text"
                    id="role"
                    autoComplete="new-role"
                    touched={formik.touched.role}
                    errorClasses="w-44 max-w-xl"
                    errors={formik.errors.role}
                    {...formik.getFieldProps("role")}
                    label={"Profession"}
                    labelClass={"ml-5"}
                    required
                    className={
                      "border border-gray-500 py-2 px-4 rounded-lg md:mx-4 "
                    }
                  />
                </div>
              </form>
            </div>
          </div>

          <div className=" px-8 mt-4 justify-between items-center bg-white py-4 shadow-lg">
            <h1 className="text-lg text-gray-700 mb-8">ABOUT</h1>
            <label htmlFor="about" className="text-gray-400 m-1">
              Bio
            </label>
            <textarea
              name="about"
              id="about"
              className="resize-x  border border-gray-600 rounded-md w-full h-64 p-2 mt-1 tracking-wide"
              value="I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs

                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies."
            ></textarea>
          </div>

          <div className="relative px-8 mt-4 justify-between items-center bg-white py-4 shadow-lg z-0">
            <h1 className="text-lg text-gray-700 mb-8">WORK PLATFORMS</h1>
            <div>
              <Button
                type="button"
                theme={"secondary"}
                className="absolute right-4"
              >
                Add
              </Button>
            </div>
            <InputElement
              placeholder={user!.roles ? user!.roles : "Software developer"}
              type="text"
              id="title"
              autoComplete="new-title"
              touched={formik.touched.title}
              errors={formik.errors.title}
              {...formik.getFieldProps("title")}
              label={"Platforms Title"}
              labelClass={"ml-5 mt-20"}
              required
              className={"border border-gray-500 py-2 px-4 rounded-lg"}
            />

            <label htmlFor="description" className="text-gray-400 m-1">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="resize-x  border border-gray-600 rounded-md w-full h-64 p-2 mt-1 tracking-wide"
              value="Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur."
            ></textarea>
          </div>

          <div className="relative px-8 mt-4 justify-between items-center bg-white py-4 shadow-lg">
            <h1 className="text-lg text-gray-700 mb-8">CONTACT</h1>
            <div className="flex flex-col md:flex-row flex-wrap w-full">
              <div className="flex-1 px-2">
                <InputElement
                  placeholder={user!.roles ? user!.roles : "Software developer"}
                  type="text"
                  id="location"
                  autoComplete="new-location"
                  touched={formik.touched.location}
                  errors={formik.errors.location}
                  {...formik.getFieldProps("location")}
                  label={"Location"}
                  labelClass={"ml-5"}
                  required
                  className={
                    "border border-gray-500 py-2 px-4 rounded-lg flex-1"
                  }
                />
              </div>
              <div className="flex-1 px-2">
                <InputElement
                  placeholder={"9859485898"}
                  type="text"
                  id="phone"
                  autoComplete="new-phone"
                  touched={formik.touched.phone}
                  errors={formik.errors.phone}
                  {...formik.getFieldProps("phone")}
                  label={"Phone"}
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
            <Button type="reset" theme={"secondary"} className={"shadow-xl bg-blue-700 hover:bg-blue-800"}>
              Reset All
            </Button>
            <Button type="submit" theme={"outline"} className={"bg-green-600 shadow-lg hover:bg-green-700 text-white"}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default React.memo(UserAccountSetting);
