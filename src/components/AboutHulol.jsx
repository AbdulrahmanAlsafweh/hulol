import { motion } from "framer-motion";

export default function AboutHulol() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="w-full flex flex-col relative h-fit font-cairo" dir="rtl">
      {/* First Part */}
      <motion.div
        className="flex relative md:px-32 items-center gap-5 min-h-[350px] flex-col md:min-h-screen md:flex-row bg-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariant}
      >
        <div className="hidden md:block z-10 absolute -top-[60px] md:-top-[100px] left-1/2 rounded-full -translate-x-1/2 transform">
          <div className="bg-white md:w-[200px] w-[100px] rounded-full h-[100px] md:h-[200px] bg-opacity-50 flex justify-center items-center">
            <div className="bg-white h-[80px] w-[80px] md:w-[150px] rounded-full md:h-[150px] flex justify-center items-center">
              <img src="/assets/logo.png" alt="Logo" />
            </div>
          </div>
        </div>
        <img
          src="assets/sight.png"
          className="absolute md:w-[200px] md:top-0 opacity-50 w-[100px] right-0"
          alt=""
        />
        <div className="md:w-1/2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[120px] md:w-[250px] md:h-[250px] flex justify-center items-center mt-10 h-[120px] rounded-full bg-white bg-opacity-50"
          >
            <div className="w-[100px] md:w-[200px] md:h-[200px] flex justify-center items-center h-[100px] rounded-full bg-white">
              <p className="text-primary font-semibold md:text-[50px] text-2xl">
                رؤيتنا
              </p>
            </div>
          </motion.div>
        </div>
        <p className="text-white text-sm mx-4 md:text-2xl md:w-1/2 text-center">
          أن نكون المورد الأول للمطاعم في المملكة العربية السعودية، ونلعب دورًا
          رياديًا في تطوير قطاع المطاعم في المملكة.
        </p>
      </motion.div>

      {/* Second part */}
      <motion.div
        className="flex relative md:px-32 items-center gap-5 min-h-[350px] flex-col md:min-h-screen md:flex-row bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariant}
      >
        <img
          src="assets/mission.png"
          className="absolute md:w-[200px] md:top-0 opacity-50 w-[100px] left-0"
          alt=""
        />
        <div className="md:w-1/2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[120px] md:w-[250px] md:h-[250px] flex justify-center items-center mt-10 h-[120px] rounded-full bg-primary bg-opacity-50"
          >
            <div className="w-[100px] md:w-[200px] md:h-[200px] flex justify-center items-center h-[100px] rounded-full bg-primary">
              <p className="text-white font-semibold md:text-[50px] text-2xl">
                أهدافنا
              </p>
            </div>
          </motion.div>
        </div>
        <p className="text-primary mx-4 md:text-2xl md:w-1/2 leading-6 md:leading-8 text-sm text-center">
          نهدف في حلول لان نبني جسر من الثقة بيننا نحن و شركائنا و ذلك عن طريق
          الحفاظ على جودة عالمية ثابتة تسمح لنا بالتوسع و الانتشار للدخول لأسواق
          جديده و زيادة نطاق خدماتنا في المنطقة و تقديم جميع الحلول اللازمة
          لنكون دائما الخيار الأمثل .
        </p>
      </motion.div>

      {/* Third Part */}
      <motion.div
        className="flex relative md:px-32 items-center gap-5 min-h-[350px] flex-col md:min-h-screen md:flex-row bg-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariant}
      >
        <img
          src="assets/milestones.png"
          className="absolute md:w-[200px] bottom-0 opacity-50 w-[100px] right-0"
          alt=""
        />
        <div className="md:w-1/2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[120px] md:w-[250px] md:h-[250px] flex justify-center items-center mt-10 h-[120px] rounded-full bg-white bg-opacity-50"
          >
            <div className="w-[100px] md:w-[200px] md:h-[200px] flex justify-center items-center h-[100px] rounded-full bg-white">
              <p className="text-primary font-semibold md:text-[50px] text-2xl">
                مهمتنا
              </p>
            </div>
          </motion.div>
        </div>
        <p className="text-white text-sm mx-4 md:text-2xl md:w-1/2 md:leading-9 leading-6 text-center">
          في "حلول"، نسعى لتقديم حلول تموين غذائي متكاملة عبر توفير لحوم، دواجن،
          و صوصات عالية الجودة وفق المعايير العالمية مما يحقق دعما لعملائنا في
          طريقهم لتقديم منتجات ممتازة تساعدهم على النجاح، مع الحفاظ على أسعار
          تنافسية و تطوير علاقات طويلة الأمد مبنية على الثقة والابتكار.
        </p>
      </motion.div>
    </div>
  );
}
