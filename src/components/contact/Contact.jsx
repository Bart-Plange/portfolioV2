import './contact.css'
import { useState } from "react";
import axios from "axios";
import Arrow from '/arrowrightup.svg'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateName = (name) => {
    // Name validation: only letters and spaces are allowed
   if (!/^[A-Za-z\s-]+$/.test(name)) {
  return `Name should only contain letters,\nspaces, and hyphens`;
}

    return "";
  };

  const validateEmail = (email) => {
    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Invalid email address";
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const nameError = validateName(value);
      setValidationErrors((prevErrors) => ({ ...prevErrors, name: nameError }));
    }
    if (name === "email") {
      const emailError = validateEmail(value);
      setValidationErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);

    setValidationErrors({
      name: nameError,
      email: emailError,
    });

    if (nameError || emailError) {
      return;
    }

     try {
      // Update the URL to point to your server endpoint
      await axios.post("http://localhost:3000/api/messages", formData);

      // Clear the form and validation errors on successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setValidationErrors({});

      // You can also show a success message to the user
       setSuccessMessage("Message sent successfully!"); 
       // Clear the success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <div className=" lg:mt-12 bg-blue-700 dark:bg-gray-900">
      <div className="container mx-auto md:h-4/5 flex flex-col md:flex-row md:space-x-6 py-24 md:p-8 p-4">
        <div className="md:w-1/3 md:pt-24 mt-12 text-white lg:px-16">
          <p className="text-4xl">Let's talk.</p>
          <p className="py-4 pb-12">
            If you have a project for me, or you want to say <span className='text-orange-500'>hi ...</span>
          </p>
          <p>bartplangedennis@gmail.com</p>
        </div>

        <div className="md:w-2/3 md:pt-24 md:px-4 pt-12">
          {/* Contact form */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="mb-4">
                <label htmlFor="name" className="text-white font-bold text-xl">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Dennis Bart-Plange"
                  required
                  className="text-white block w-full p-2 border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-orange-500 focus:bg-transparent"
                />
                {validationErrors.name && (
                  <p className="text-red-500">{validationErrors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-white font-bold text-xl">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="bartplangedennis@gmail.com"
                  required
                  className="text-white block w-full p-2 border-b border-gray-200 bg-transparent focus:outline-none focus:border-b-orange-500 focus:bg-transparent"
                />
                {validationErrors.email && (
                  <p className="text-red-500">{validationErrors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-4 mt-12">
              <label htmlFor="message" className="mb-4 text-white font-bold text-xl">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="eg: hi Dennis 🙋‍♂️, I want to discuss a project"
                rows="5"
                required
                className="text-white block w-full p-2 border border-gray-200 bg-transparent focus:outline-none focus:border-orange-500 lg:w-3/4"
              />
            </div>
            <div>
              <button
                type="submit"
                className="ContButton flex text-white py-2 relative"
              >
                Send Message
                <img src={Arrow} alt="arrow" className="w-4 ml-4 animate-bounce text-white"/>
              </button>
            </div>

            {successMessage && <p className="text-green-500">{successMessage}</p>} {/* Display success message */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
