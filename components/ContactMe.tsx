import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  socials: Social[];
};

const ContactMe = ({ socials }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => (
    window.location.href = `mailto:piotrek@piotr.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  )
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          Coffee? Let&apos;s get {" "}
          <span className="decoration-[#6e2fd2]/50 underline">in touch.</span>
        </h4>

        <div className="flex items-center justify-center">
           {/* Social Icons */}
           {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="lightgray"
              bgColor="transparent"
              style={{width: '80px', height: '100px'}}
            
            />
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-[110px]"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#6e2fd2] py-5 md:px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
