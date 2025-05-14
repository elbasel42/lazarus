import { twMerge } from "tailwind-merge";
import { WhatsappIcon, MailIcon } from "@icons";
import { buttonStyle } from "@styles/button";

const whatsappHref = "https://wa.me/+201114565006";
const emailHref = "mailto:abdelrahman.elbasel42@gmail.com";

const ContactPage = () => {
  return (
    <main className={mainStyle}>
      <h1 className={h1Style}>Contact Us.</h1>
      <a href={whatsappHref} className={twMerge(buttonStyle, aStyle)}>
        <div className={divStyle}>
          <WhatsappIcon className={whatsappIconStyle} />
          <span className={spanStyle}>Whatsapp</span>
        </div>
        <p className={pStyle}>+201114565006</p>
      </a>
      <a className={twMerge(buttonStyle, aStyle)} href={emailHref}>
        <div className={divStyle}>
          <MailIcon className={mailIconStyle} />
          <span className={spanStyle}>Email</span>
        </div>
        <p className={pStyle}>Abdelrahman.elbasel42@gmail.com</p>
      </a>
    </main>
  );
};

export default ContactPage;

// ! styles
const mainStyle = "bg-logo";
const h1Style = "font-bold text-5xl text-center pt-20 flex flex-col gap-2";
// * ----------------------------------------------------------------------------------
const aStyle =
  "flex flex-col items-center justify-center gap-2 mt-10 text-2xl bg-black/80 w-[80vw] md:w-[50vw] lg px-4 py-8 rounded-2xl mx-auto";
// * ----------------------------------------------------------------------------------
const divStyle = "flex items-center justify-center gap-2";
const spanStyle = "text-2l md:text-4xl lg:text-6xl";
const pStyle = "text-center text-lg md:text-2xl lg:text-4xl mt-2";
// * ----------------------------------------------------------------------------------
const whatsappIconStyle = "w-10 h-10 md:w-20 md:h-20";
const mailIconStyle = "w-8 h-8 md:w-20 md:h-20 text-green-300";
// * ----------------------------------------------------------------------------------
