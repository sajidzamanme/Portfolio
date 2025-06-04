import { useState } from "react";

const ContactBar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(formData);
  };

  return (
    <div className="w-full h-[30rem] flex flex-row items-center px-5">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                   text-black gap-8 py-8"
      >
        <h1 className="text-2xl font-semibold border-b-2 border-black px-1 py-1">
          Contact
        </h1>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center justify-start gap-3"
        >
          <input
            type="text"
            value={formData.name}
            className="h-[3rem] w-full border px-4"
            placeholder="Enter your name"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <input
            type="email"
            value={formData.email}
            className="h-[3rem] w-full border px-4"
            placeholder="Enter your email"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <textarea
            name="message"
            value={formData.message}
            id="message"
            className="h-[8rem] w-full border px-4 py-2.5"
            placeholder="Enter your message"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, message: e.target.value }));
            }}
          ></textarea>
          <button
            type="submit"
            className="text-lg text-white font-semibold bg-black p-3 mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactBar;
