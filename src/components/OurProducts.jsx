
export default function OurProducts(){
    return (
      <div className="w-screen h-fit font-cairo" dir="rtl">
        <div className="w-screen h-fit flex md:flex-row md:px-32">
          <div className="flex flex-col text-white">
            <p className="md:text-2xl">اللحوم</p>
            <p className="text-center ">
              تقدم حلول مجموعة من أجنحة الدجاج اللذيذة والمقرمشة التي تتميز
              بمذاق فريد لا يُقاوم. أجنحة الدجاج لدينا مُحضرة بعناية فائقة من
              أفضل أنواع الدجاج الطازج والمغلفة بتوابل مختارة بعناية لتناسب
              الذوق السعودي.
            </p>
          </div>
          {/* <div className="flex justify-center items-center"> */}
                {/* <div className="w-[240px] h-[240px] bg-white bg-opacity-50 rounded-full"> */}
                        {/* <img src="/assets/steak.jpg" alt="" /> */}
                {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
}