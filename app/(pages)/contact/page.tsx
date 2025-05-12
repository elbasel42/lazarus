import { WhatsappIcon } from "@icons";
import { Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <main>
      <h1 className="font-bold text-5xl text-center pt-20">Contact Us.</h1>
      <a
        href="https://wa.me/01114565006"
        className="flex items-center justify-center gap-2 mt-10 text-2xl"
      >
        <WhatsappIcon className="w-9 h-9" />
        <span>Whatsapp</span>
      </a>
      <p className="text-center text-sm mt-2">+201114565006</p>
      <a
        className="flex items-center justify-center gap-2 mt-10 text-2xl"
        href="mailto:abdelrahman.elbasel42@gmail.com"
      >
        <Mail className="w-9 h-9 text-amber-300"/>
        <span>Email</span>
      </a>
      <p className="text-center text-sm mt-2">
        Abdelrahman.elbasel42@gmail.com
      </p>
    </main>
  );
};

export default ContactPage;
