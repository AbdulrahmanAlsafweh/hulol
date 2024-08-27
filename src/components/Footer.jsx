

export default function FooterPage(){
    return (
      <div
        dir="rtl"
        className="w-full h-fit pt-[3rem] font-cairo sm:text-lg md:text-xl  bg-primary  mt-32 flex flex-col"
      >
        {/* The section of socidal media  */}
        <div className="flex flex-row before justify-center items-center">
          <div class="flex-grow h-px bg-white  ml-5"></div>
          <a href="">
            <img
              src="/assets/instagram.png"
              className="w-[32px]  md:w-[50px] hover:scale-105 delay-75 transition-all ml-5"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="/assets/x.png"
              className="w-[32px] md:w-[50px] hover:scale-105 delay-75 transition-all  "
              alt=""
            />
          </a>
          <div class="flex-grow h-px  mr-5 bg-white"></div>
        </div>

        <div className="flex ">
          <div className="flex w-fit mx-auto justify-center flex-col items-center">
            <div>
              <a
                href=""
                className="flex justify-start md:gap-2 items-center gap-1 mt-5"
              >
                <img
                  src="/assets/phone-call.png"
                  className="w-[21px] md:w-[32px]"
                  alt=""
                />
                <p dir="ltr" className="text-white hover:text-gray-200">
                  +966 55 410 0950
                </p>
              </a>
            </div>
            <div className="flex  justify-start md:gap-2  ml-auto items-center gap-1 mt-5 text-white">
              <img
                src="assets/location-pin.png"
                className="w-[21px] md:w-[32px]"
                alt=""
              />
              <p className="hover:text-gray-200">الدمام</p>
            </div>
          </div>
          <div className="flex justify-center  mx-auto gap-2 items-center flex-col text-white  mt-5  ">
            <a
              href=""
              className="hover:scale-110 hover:text-gray-200 delay-75 transition-all"
            >
              {" "}
              الصفحة الرئيسية
            </a>
            <a
              href=""
              className="ml-auto hover:scale-110 hover:text-gray-200 delay-75 transition-all"
            >
              حول حلول
            </a>

            <a
              href=""
              className="ml-auto hover:scale-110 hover:text-gray-200 delay-75 transition-all"
            >
              منتجاتنا
            </a>
          </div>
        </div>
        <div
          className="flex justify-center pt-[3rem] pb-2 text-white items-end"
          dir="ltr"
        >
          <p className="md:text-sm">©2024 CopyRight Hulol SA</p>
        </div>
      </div>
    );
}