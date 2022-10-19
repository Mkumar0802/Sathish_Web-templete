import React, { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UrlLink } from "./Url";
import ScrollToTop from "./ScrolltoTop";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(3)
      .max(15)
      .required(),
    email: yup
      .string()
      .email("That doesn't look like a valid email")
      .required("This field is required."),
    number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10)
      .max(10)
      .required(),

    textarea: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter text only")
      .min(10)
      .max(40)
      .required(),
  })
  .required();

function Form() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [loadingInProgress, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendDataToAPI = async () => {
    setLoading(true);
    if (!name || !number || !email || !textarea) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    await axios.post(UrlLink, {
      name,
      number,
      email,
      textarea,
    });

    setLoading(false);
    // Swal.fire({
    //   icon: "success",
    //   title: "Our Message Has Been Sent!",
    //   text: "Our Team Will Contact You Shortly  ",
    //   showConfirmButton: false,
    //   timer: 2000,
    // });
    navigate("/tkpage");

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };

  return (
    <div className="relative bg-gray-900">
      <div
        class="
		md:bg-[url('https://res.cloudinary.com/dtlhsyzip/image/upload/v1665758593/imgpsh_fullsize_anim_z69seb.jpg')]  h-full w-full bg-cover bg-no-repeat  "
      >
        <div className="container py-20 mx-auto lg:py-24">
          {loadingInProgress ? (
            <div className="flex justify-center h-56 gap-4">
              <div className="grid content-center">
                <div
                  class="w-12 h-12 rounded-full animate-spin
                    border-x-8 border-solid border-red-500 border-t-transparent"
                ></div>
              </div>
            </div>
          ) : (
            <div className="relative p-10 text-gray-100 bg-gray-900 rounded-lg sm:p-12 md:p-16 ">
              <div tw="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-sky-500 sm:text-4xl ">
                  Organize an Event
                </h2>
                <div className="">
                  <form onSubmit={handleSubmit(sendDataToAPI)} class="mt-12">
                    <div className="grid md:gap-4 md:grid-cols-2 ">
                      <div class="mt-10  md:mt-5  relative">
                        <input
                          {...register("email")}
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          class="peer h-10 w-full bg-slate-700 border-b-2 border-sky-500 text-white placeholder-transparent focus:outline-none focus:border-sky-700"
                          placeholder="john@doe.com"
                        />
                        <p className="font-semibold text-red-500 font-Poppins">
                          {errors.email?.message}
                        </p>
                        <label
                          for="email"
                          class="absolute left-0 -top-3.5 text-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-600 peer-focus:text-sm"
                        >
                          Email address
                        </label>
                      </div>
                      <div class="mt-10  md:mt-5  relative">
                        <input
                          {...register("name")}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          class="peer h-10 w-full bg-slate-700 border-b-2 border-sky-500 text-white placeholder-transparent focus:outline-none focus:border-sky-700"
                          placeholder="Name"
                        />
                        <p className="font-semibold text-red-500">
                          {errors.name?.message}
                        </p>
                        <label
                          for="name"
                          class="absolute left-0 -top-3.5 text-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-600 peer-focus:text-sm"
                        >
                          Name
                        </label>
                      </div>
                      <div class="mt-10  md:mt-5  relative">
                        <input
                          {...register("number")}
                          onChange={(e) => setNumber(e.target.value)}
                          id="number"
                          type="text"
                          name="mobile"
                          class="peer h-10 w-full bg-slate-700 border-b-2 border-sky-500 text-white placeholder-transparent focus:outline-none focus:border-sky-700"
                          placeholder="Mobile Number"
                        />
                        <p className="font-semibold text-red-500 font-Poppins">
                          {errors.number?.message}
                        </p>
                        <label
                          for="number"
                          class="absolute left-0 -top-3.5 text-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-600 peer-focus:text-sm"
                        >
                          Mobile Number
                        </label>
                      </div>
                      <div class="mt-10  md:mt-5  relative">
                        <input
                          {...register("textarea")}
                          id="textarea"
                          onChange={(e) => setTextarea(e.target.value)}
                          type="text"
                          ame="textarea"
                          class="peer h-10 w-full bg-slate-700 border-b-2 border-sky-500 text-white placeholder-transparent focus:outline-none focus:border-sky-700"
                          placeholder="Text Message"
                        />
                        <p className="font-semibold text-red-500">
                          {errors.textarea?.message}
                        </p>
                        <label
                          for="textarea"
                          class="absolute left-0 -top-3.5 text-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-600 peer-focus:text-sm"
                        >
                          Text Message
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="sumbit"
                        className="block px-4 py-2 mt-20 font-semibold text-center text-white rounded cursor-pointer bg-rose-500 hover:bg-rose-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <ScrollToTop />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
