import Card from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";
export default function HelpPage(){

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };


    return (
      <div
        className="h-fit w-full flex    flex-col pt-16 justify-center font-cairo "
        dir="rtl"
      >
        <div className="flex self-start md:mx-auto mb-32 justify-center md:w-1/2 w-3/2 mx-5 flex-col items-center">
          <p className="text-primary text-center md:text-2xl font-bold ">
            حلول للشراكة المثالية ؛ كيف نجعل نجاحك واقع
          </p>
          <p className="text-black opacity-65 px-auto leading-5  md:leading-10 font-bold text-sm text-center md:text-lg ">
            في حلول، نلتزم بأن نكون شريكك الذي يسهم في تحقيق النجاح والتميز .
            نقدم لك مجموعة من الخدمات والحلول المصممة خصيصاً
            <span className="bg-primary text-white px-1">
              لتلبية احتياجاتك،
            </span>
            مع التركيز على الجودة والابتكار
          </p>
        </div>
        <div className="w-full  md:h-[150px] py-5 relative flex items-center bg-primary">
          <p className=" text-[1.2rem] md:pr-10 mr-2 font-bold md:text-[30px] text-black">
            اكتشف كيف يمكننا دعم نجاحك من خلال
          </p>
          <div className="absolute top-10 right-[40%]">
            <img
              src="/assets/arrow.png"
              className="rotate-180 w-[350px]"
              alt=""
            />
          </div>
          <div className=" absolute left-0 md:left-10">
            <motion.img
              style={{ scale }}
              src="/assets/soy-sauce.png"
              className=" opacity-30 md:opacity-50 w-[100px] md:w-[250px] mx-auto"
              alt=""
            />
          </div>
        </div>
        <div
          className="flex flex-row flex-wrap justify-center gap-10 mt-32"
          dir="rtl"
        >
          <motion.div
            className="flex flex-row   flex-wrap justify-center gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card
                title={"دعم فني متواصل"}
                content={
                  "فريق كامل متخصص جاهز لتقديم الدعم والإجابة على أي استفسارات ، لضمان تجربة سلسة وناجحة"
                }
                image={"/assets/live-chat.png"}
              />
            </motion.div>

            <motion.div variants={item}>
              <Card
                title={"حلول مخصصة"}
                content={
                  "نعمل معك لتلبية احتياجاتك الخاصة ، مع تقديم استشارات و خطط لتناسب متطلباتك الغذائية "
                }
                image={"/assets/present.png"}
              />
            </motion.div>

            <motion.div variants={item}>
              <Card
                title={"خدمة توصيل سريعة "}
                content={
                  " نقدم لك توصيل سريع و أمن ، لضمان وصول منتجاتك بأفضل حالة  "
                }
                image={"/assets/fast-delivery.png"}
              />
            </motion.div>

            <motion.div variants={item}>
              <Card
                title={"منتجات عالية الجودة"}
                content={
                  "نضمن لك الحصول على أفضل المنتجات بمواصفات تتوافق مع أعلى معايير الجودة  "
                }
                image={"/assets/quality.png"}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
}