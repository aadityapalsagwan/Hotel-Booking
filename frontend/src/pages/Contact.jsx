import { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setFormStatus("success");
      form.reset();
    } else {
      setFormStatus("error");
    }
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-lg mb-10 text-gray-600">
          Have questions or need support? Our team is here to assist you. Please fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <input type="hidden" name="access_key" value="81d747b1-20a2-4690-b8c0-f710709f0605" />

          {/* Name and Email Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-500 transition-all ease-in-out"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-500 transition-all ease-in-out"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-500 h-40 transition-all ease-in-out"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-md text-lg font-semibold shadow-md hover:bg-blue-500 transform hover:scale-105 transition-all ease-in-out duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Response Message */}
        {formStatus === "success" && (
          <p className="mt-4 text-green-600 font-medium">Message sent successfully!</p>
        )}
        {formStatus === "error" && (
          <p className="mt-4 text-red-600 font-medium">Something went wrong. Please try again.</p>
        )}

        <p className="mt-8 text-sm text-gray-600">
          Your request will be reviewed and our team will respond to you shortly.
        </p>
      </div>
    </section>
  );
};

export default Contact;
