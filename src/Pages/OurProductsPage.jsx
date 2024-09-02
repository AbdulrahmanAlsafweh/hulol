import { motion } from "framer-motion";
import OurProductsNavbar from "../components/OurProductNavbar";

export default function OurProducts() {
  return (
    <>
      <OurProductsNavbar />
      <div className="w-screen h-fit font-cairo" dir="rtl">
        {/* chicken section */}
        <div className="w-screen h-screen flex flex-col bg-primary px-5 md:px-32 md:flex-row sticky top-0 ">
          <div className="flex w-full md:w-1/2 gap-5 mt-10 md:my-auto flex-col  text-white">
            <div className="flex flex-row items-center">
              {/* chicken icon */}
              <motion.img
                src="/assets/chicken.png"
                className="w-[80px] md:w-[100px]"
                alt="Chicken"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <p className="text-3xl md:text-[50px] font-bold">دواجن</p>
            </div>
            <p className="text-start mr-5 md:mr-[100px] text-sm md:text-lg font-semibold">
              تقدم حلول مجموعة من أجنحة الدجاج اللذيذة والمقرمشة التي تتميز
              بمذاق فريد لا يُقاوم. أجنحة الدجاج لدينا مُحضرة بعناية فائقة من
              أفضل أنواع الدجاج الطازج والمغلفة بتوابل مختارة بعناية لتناسب
              الذوق السعودي.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 md:my-auto  mt-16  justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white justify-center items-center flex bg-opacity-50 rounded-[40%]"
            >
              <img
                src="/assets/duajen.jpg"
                className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover rounded-[40%]"
                alt="Chicken Dish"
              />
            </motion.div>
          </div>
        </div>

        {/* meat section */}
        <div className="w-screen h-screen flex flex-col bg-white px-5 md:px-32 md:flex-row sticky top-0">
          <div className="flex w-full md:w-1/2 gap-5 mt-10 md:my-auto flex-col text-primary">
            <div className="flex items-center flex-row">
              {/* meat icon */}
              <motion.img
                src="/assets/butchering.png"
                className="w-[80px] md:w-[100px]"
                alt="Meat"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <p className="text-3xl md:text-[50px] font-bold">لحوم</p>
            </div>
            <p className="text-start mr-5 md:mr-[100px] text-sm md:text-lg font-semibold">
              تقدم حلول مجموعة من أجنحة الدجاج اللذيذة والمقرمشة التي تتميز
              بمذاق فريد لا يُقاوم. أجنحة الدجاج لدينا مُحضرة بعناية فائقة من
              أفضل أنواع الدجاج الطازج والمغلفة بتوابل مختارة بعناية لتناسب
              الذوق السعودي.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 md:my-auto mt-16 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary justify-center items-center flex bg-opacity-50 rounded-[40%]"
            >
              <img
                src="/assets/steak.jpg"
                className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover rounded-[40%]"
                alt="Steak"
              />
            </motion.div>
          </div>
        </div>

        {/* sauces section */}
        <div className="w-screen h-screen flex flex-col bg-primary px-5 md:px-32 md:flex-row sticky top-0">
          <div className="flex w-full md:w-1/2 gap-5 mt-10 md:my-auto flex-col text-white">
            <div className="flex items-center flex-row">
              {/* sauce icon */}
              <motion.img
                src="/assets/mustard.png"
                className="w-[80px] md:w-[100px]"
                alt="Sauce"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <p className="text-3xl md:text-[50px] font-bold">صوصات</p>
            </div>
            <p className="text-start mr-5 md:mr-[100px] text-sm md:text-lg font-semibold">
              تقدم حلول مجموعة من أجنحة الدجاج اللذيذة والمقرمشة التي تتميز
              بمذاق فريد لا يُقاوم. أجنحة الدجاج لدينا مُحضرة بعناية فائقة من
              أفضل أنواع الدجاج الطازج والمغلفة بتوابل مختارة بعناية لتناسب
              الذوق السعودي.
            </p>
          </div>
          <div className="flex w-full mt-16 md:my-auto md:w-1/2 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white justify-center items-center flex bg-opacity-50 rounded-[40%]"
            >
              <img
                src="/assets/sauces.png"
                className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover rounded-[40%]"
                alt="Sauces"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { motion } from "framer-motion";
// import OurProductsNavbar from "../components/OurProductNavbar";

// export default function OurProducts() {
//   return (
//     <>
//       <OurProductsNavbar />
//       <div className="w-full h-fit font-cairo" dir="rtl">
//         {/* Meat section */}
//         <div className="w-full h-auto flex flex-col md:flex-row bg-primary md:px-8 lg:px-32 py-8">
//           <div className="flex flex-col md:w-1/2 gap-5 my-auto text-white px-4">
//             <div className="flex items-center">
//               {/* Chicken icon */}
//               <motion.img
//                 src="/assets/chicken.png"
//                 className="w-24 md:w-32"
//                 alt="Chicken"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               />
//               <p className="text-2xl md:text-4xl lg:text-5xl font-bold ml-4">دواجن</p>
//             </div>
//             <p className="text-lg font-semibold">
//               تقدم حلول مجموعة من أجنحة الدجاج اللذيذة والمقرمشة التي تتميز بمذاق فريد لا يُقاوم.
//               أجنحة الدجاج لدينا مُحضرة بعناية فائقة من أفضل أنواع الدجاج الطازج والمغلفة بتوابل مختارة بعناية لتناسب الذوق السعودي.
//             </p>
//           </div>
//           <div className="flex md:w-1/2 justify-center items-center px-4">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white bg-opacity-50 rounded-[40%] flex justify-center items-center"
//             >
//               <img
//                 src="/assets/duajen.jpg"
//                 className="w-full h-full object-cover rounded-[40%]"
//                 alt="Chicken Dish"
//               />
//             </motion.div>
//           </div>
//         </div>

//         {/* Meat section */}
//         <div className="w-full h-auto flex flex-col md:flex-row bg-white md:px-8 lg:px-32 py-8">
//           <div className="flex flex-col md:w-1/2 gap-5 my-auto text-primary px-4">
//             <div className="flex items-center">
//               {/* Meat icon */}
//               <motion.img
//                 src="/assets/butchering.png"
//                 className="w-24 md:w-32"
//                 alt="Meat"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               />
//               <p className="text-2xl md:text-4xl lg:text-5xl font-bold ml-4">لحوم</p>
//             </div>
//             <p className="text-lg font-semibold">
//               تقدم حلول مجموعة من أجنحة الدجاج اللذيذة والمقرمشة التي تتميز بمذاق فريد لا يُقاوم.
//               أجنحة الدجاج لدينا مُحضرة بعناية فائقة من أفضل أنواع الدجاج الطازج والمغلفة بتوابل مختارة بعناية لتناسب الذوق السعودي.
//             </p>
//           </div>
//           <div className="flex md:w-1/2 justify-center items-center px-4">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-primary bg-opacity-50 rounded-[40%] flex justify-center items-center"
//             >
//               <img
//                 src="/assets/steak.jpg"
//                 className="w-full h-full object-cover rounded-[40%]"
//                 alt="Steak"
//               />
//             </motion.div>
//           </div>
//         </div>

//         {/* Sauces section */}
//         <div className="w-full h-auto flex flex-col md:flex-row bg-primary md:px-8 lg:px-32 py-8">
//           <div className="flex flex-col md:w-1/2 gap-5 my-auto text-white px-4">
//             <div className="flex items-center">
//               {/* Sauce icon */}
//               <motion.img
//                 src="/assets/mustard.png"
//                 className="w-24 md:w-32"
//                 alt="Sauce"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               />
//               <p className="text-2xl md:text-4xl lg:text-5xl font-bold ml-4">صوصات</p>
//             </div>
//             <p className="text-lg font-semibold">
//               تقدم حلول مجموعة من أجنحة الدجاج اللذيذة والمقرمشة التي تتميز بمذاق فريد لا يُقاوم.
//               أجنحة الدجاج لدينا مُحضرة بعناية فائقة من أفضل أنواع الدجاج الطازج والمغلفة بتوابل مختارة بعناية لتناسب الذوق السعودي.
//             </p>
//           </div>
//           <div className="flex md:w-1/2 justify-center items-center px-4">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white bg-opacity-50 rounded-[40%] flex justify-center items-center"
//             >
//               <img
//                 src="/assets/sauces.png"
//                 className="w-full h-full object-cover rounded-[40%]"
//                 alt="Sauces"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
