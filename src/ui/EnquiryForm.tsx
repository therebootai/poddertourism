"use client";
import { useActionState } from "react";

export default function EnquiryForm() {
  const handleSubmit = (prevState: object, formData: FormData) => {
    const name = formData.get("name");
    const mobile = formData.get("mobile");
    const tourPackage = formData.get("services");
    const location = formData.get("location");
    const message = formData.get("message");

    const whatsappMessage = `Name: ${name}\nMobile: ${mobile}\nTour Package: ${tourPackage}\nLocation: ${location}\nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=917384859939&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=917384859939&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    return { ...prevState };
  };

  const [, formAction] = useActionState(handleSubmit, {});

  return (
    <form action={formAction} className="flex flex-col gap-6 w-full">
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="h-[4rem] w-full px-2 border-2  border-dashed rounded-md outline-none bg-white border-site-primary"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Mobile Number"
          name="mobile"
          minLength={10}
          maxLength={10}
          required
          pattern="[0-9]{10}"
          className="h-[4rem] w-full px-2 border-2  border-dashed rounded-md outline-none bg-white border-site-primary"
        />
      </div>
      <div>
        <select
          name="services"
          className="h-[4rem] w-full px-2 border-2  border-dashed rounded-md outline-none bg-white border-site-primary"
        >
          <option value="" defaultChecked>
            Choose Tour Package
          </option>
          <option value="Darjeeling">Darjeeling</option>
          <option value="Dooars">Dooars</option>
          <option value="North Sikkim">North Sikkim</option>
          <option value="South Sikkim">South Sikkim</option>
          <option value="North East">North East</option>
          <option value="Nepal">Nepal</option>
          <option value="Bhutan">Bhutan</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Location"
          name="location"
          className="h-[4rem] w-full px-2 border-2  border-dashed rounded-md outline-none bg-white border-site-primary"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Message"
          name="message"
          className="h-[4rem] w-full px-2 border-2  border-dashed rounded-md outline-none bg-white border-site-primary"
        />
      </div>
      <button className="w-full h-[4rem] flex justify-center items-center bg-site-primary text-xl text-white rounded-md ">
        Message
      </button>
    </form>
  );
}
