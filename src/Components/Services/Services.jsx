import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -500,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      type: "tween",
      staggerChildren: 0.5,
    },
  },
};

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I specialize in creating responsive and user-friendly websites tailored to your specific needs. From simple static websites to complex web applications, I've got you covered.",
    },
    {
      title: "Mobile App Development",
      description:
        "Need a mobile app for your business? I can develop native or cross-platform mobile applications that run smoothly on iOS and Android devices, providing a seamless user experience.",
    },
    {
      title: "UI/UX Design",
      description:
        "A visually appealing and intuitive user interface is crucial for engaging users. I can design modern and eye-catching UIs that enhance user experience and drive conversions.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Want to sell your products or services online? I can build robust e-commerce platforms with secure payment gateways, inventory management, and personalized shopping experiences.",
    },
  ];

  const textHighlightAnimation = {
    color: "#ffa500",
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <motion.div
      className="flex flex-col space-y-[3%] p-5 cursor-default"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="flex flex-row items-center justify-end"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.p
          className="w-1/3 pr-3 text-3xl text-right font-extralight"
          whileHover={textHighlightAnimation}
        >
          I focus on helping your brand grow and move forward
        </motion.p>
        <hr className="w-1/4 border-gray-500" />
      </motion.div>

      <motion.div
        className="flex gap-5"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.img
          className="object-cover h-32 rounded-full w-72 outline outline-[#ffa500]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "tween" },
          }}
          src="/people.webp"
          alt=""
        />
        <p className="text-8xl font-extralight">
          <motion.b className="font-bold" whileHover={textHighlightAnimation}>
            Unique
          </motion.b>{" "}
          Ideas
        </p>
      </motion.div>

      <motion.div
        className="flex flex-row-reverse gap-5"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.button
          className="h-32 rounded-full w-72 outline outline-[#ffa500] text-2xl"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ffa500",
            color: "#000",
            transition: { duration: 0.3, type: "tween" },
          }}
        >
          What I Do ?
        </motion.button>
        <p className="text-8xl font-extralight">
          <motion.b className="font-bold" whileHover={textHighlightAnimation}>
            For Your
          </motion.b>{" "}
          Business
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-5"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <h2 className="text-4xl font-extralight">
          <motion.b className="font-bold" whileHover={textHighlightAnimation}>
            Services
          </motion.b>{" "}
          Offered
        </h2>
        <motion.ul
          className="flex "
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          {services.map((service, index) => (
            <motion.li
              key={index}
              className="flex flex-col gap-5 border border-[#ffa500] px-5 py-3"
              whileHover={{
                // scale: 1.05,
                backgroundColor: "#d3d3d3",
                color: "#13132e",
                transition: { duration: 0.3, type: "tween" },
              }}
            >
              <h1 className="text-3xl font-bold h-1/4">{service.title} </h1>
              <p className="text-justify font-extralight h-2/4">
                {service.description}
              </p>
              <motion.button
                className="bg-[#ffa500] text-black px-5 py-3 rounded-sm w-full mb-5"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, type: "tween" },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.3, type: "tween" },
                }}
              >
                Learn More
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
