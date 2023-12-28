import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.5,
    },
  },
};

export default function Contact() {
  const contactInfo = [
    {
      label: "Email",
      value: "diabhicham987@gmail.com",
      link: "mailto:diabhicham987@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Hicham Diab",
      link: "",
    },
    {
      label: "GitHub",
      value: "HicH987",
      link: "",
    },
  ];
  const inputStyle = "text-gray-500 bg-[#101026] border rounded-lg px-5 py-2";

  return (
    <motion.main
      className="flex justify-between items-center py-44 px-[10vw]"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-9xl">
          Let’s work <br /> together
        </h1>
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-semibold">Get in touch</h2>
          <ul className="flex flex-col gap-5 text-xl">
            {contactInfo.map((info, index) => (
              <li className="flex flex-col max-w-fit" key={index}>
                <label className="font-bold">{info.label}</label>
                <a className="font-extralight" href={info.link}>
                  {info.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form
        className="flex flex-col w-1/3 gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        
        <input className={inputStyle} type="text" placeholder="Name" />
        <input className={inputStyle} type="email" placeholder="Email" />
        <textarea className={inputStyle} placeholder="Message"></textarea>
        <motion.button
          className="font-bold rounded-lg bg-[#ffa500] text-[#13132e] px-5 py-2"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "tween" },
          }}
          whileTap={{
            scale: 0.99,
            transition: { duration: 0.3, type: "tween" },
          }}
        >
          Send
        </motion.button>
      </form>
    </motion.main>
  );
}
