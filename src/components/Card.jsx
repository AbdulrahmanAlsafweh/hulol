import { motion } from "framer-motion";

export default function Card(props){
    console.log(props.image)
    return (
      <motion.div
        dir="rtl"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-[200px] md:w-[250px]   select-none relative bg-white flex flex-col shadow-lg font-cairo h-[300px] overflow-hidden  shadow-black justify-start "
      >
        <div className="flex flex-row  pt-2 pr-2 items-center gap-2">
          <img src={props.image} className="w-[40px] object-fill" alt="" />
          <p className="text-primary font-semibold">{props.title}</p>
        </div>
        <div>
          <p className="text-center pt-2 pr-2 pl-2 text-black mt-10">
            {props.content}
          </p>
        </div>
        <div className="absolute md:-bottom-[160px] -bottom-[125px]">
          <img src="/assets/card wave.svg" width={500} alt="" className="" />
        </div>
      </motion.div>
    );
}