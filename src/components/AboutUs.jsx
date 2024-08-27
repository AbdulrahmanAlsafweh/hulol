import { motion } from "framer-motion";
export default function AboutUsPage() {
  return (
    <div className="w-full bg-primary overflow-hidden  items-center gap-10 h-screen px-10 flex flex-col md:flex-row font-cairo relative text-primary">
      {/* the floating image  */}
      <div className="absolute -bottom-10  right-20 rotate-[260deg]">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src="/assets/chicken-leg.png"
          className="object-cover w-[150px] md:w-[300px] opacity-50 "
          alt=""
        />
      </div>

      {/* The floating image  */}
      <div className="absolute top-10 -left-28 ">
        {/* <img
          src="/assets/meat.png"
          className="object-cover w-[150px] md:w-[300px] opacity-50 "
          alt=""
        /> */}
        <motion.img
          className=" object-cover w-[150px] md:w-[300px] opacity-50"
          src="assets/meat.png"
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* The left section of page which contain the gif */}
      <div className="w-1/2 hidden md:flex justify-center items-center">
        <img src="/assets/tanmya.png" className="w-3/4" alt="" />
      </div>

      {/* The right section of page which contain about us  */}

      <div className="md:w-[800px] md:h-fit md:my-auto  mt-10 w-full flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center z-10"
        >
          <div className="bg-white    shadow-lg shadow-black flex rounded-lg md:w-[60%] my-auto h-fit    flex-col justify-center items-center px-8 pt-8 pb-16">
            <p className=" text-xl md:text-[32px] relative ">
              من نحن ؟
              {/* <span className="before:content-[''] before:absolute before:bottom-0 before:right-1/2 before:w-full  before:h-px before:bg-primary before:transform before:-translate-y-1/2"></span> */}
            </p>
            <p className="md:pt-3 pt-1 md:text-[21px]">حلها ما يطول مع حلول</p>
            <p className=" text-black text-wrap text-center text-opacity-60 md:text-[21px] px-2 leading-6 md:leading-8 pt-5 md:pt-10">
              حلول شركة سعودية مقرها الدمام، متخصصة في توفير لحوم ودواجن جاهزة و
              صوصات مغلفة حراريا عالية الجودة وفقاً لأحدث معايير الإنتاج. نلتزم
              بتقديم منتجات وخدمات متميزة بأسعار تنافسية لتلبية احتياجات المنشآت
              والقطاعات المختلفة.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/2 w-[300px] z-10 flex md:hidden justify-center items-center">
        <img src="/assets/tanmya.png" className="md:w-3/4" alt="" />
      </div>
    </div>
  );
}
