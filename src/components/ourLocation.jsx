import { motion } from "framer-motion";

export default function LocationPage() {
  return (
    <div
      dir="rtl"
      className=" relative flex-col md:flex-row md:justify-center md:gap-32 pb-16 pt-10 font-cairo overflow-x-hidden overflow-visible   flex bg-white text-primary  px-8 justify-center  items-center mt-16 w-full h-fit"
    >
      <img
        src="assets/maps.png"
        alt=""
        className="absolute w-[100px] md:w-[150px] opacity-50 top-2 -right-10"
      />
      <div className="flex flex-row justify-center items-center mb-8 text-2xl  ">
        <motion.img
          className="w-[32px]"
          src="assets/maps-and-flags.png"
          alt=""
          initial={{ scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          viewport={{ once: true }} // Ensures the animation only runs once
        />
        <p className="font-bold md:text-[40px]">موقعنا</p>
      </div>
      <div className="   relative h-[450px]">
        <div className="h-[450px] md:w-[600px] top-3  left-4 md:h-[450px] w-full bg-primary rounded-lg absolute"></div>
        <div className="relative z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228792.25326048568!2d49.8277273910512!3d26.36277673809054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361d32276b3403%3A0xefd901ec7a5e5676!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2slb!4v1724653063940!5m2!1sen!2slb"
            className="w-full h-[450px] md:w-[600px] rounded-lg"
            style={{ border: "none", outline: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dammam Map"
          />
        </div>
      </div>
    </div>
  );
}
