import React from "react";

const Footer = () => {
  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer className="text-center mt-5">
      <p>
        <small>Copyright &copy; {getYear()}</small>
        <br /> Made with ❤️ by Rokib 🔥
      </p>
    </footer>
  );
};

export default Footer;
