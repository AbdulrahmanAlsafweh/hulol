

export default function ContactUs(){
    return (
      <div
        className="flex font-cairo flex-col md:mt-32 md:h-[300px] mt-16 relative  "
        dir="rtl"
      >
        <div className="w-full h-fit md:h-32 flex md:justify-start md:pr-10 justify-center items-center text-black bg-primary ">
          <p className="py-5 font-bold md:text-[30px] text-xl">
            تواصل معنا وخلك <span className="text-white">أقرب </span>
          </p>
        </div>
        <div className="flex md:-top-10 md:ml-16 md:left-0 md:pt-10 md:bg-white shadow-md shadow-gray-500 md:w-1/2 md:absolute">
          <div className="shadow-md flex w-full flex-col gap-5 p-5  ">
            <div className="flex gap-5 flex-row ">
              <input
                type="text"
                name=""
                className=" bg-white border-gray-400     border rounded-lg pr-1 w-full"
                placeholder="الاسم"
                id=""
              />
              <input
                type="text"
                name=""
                id=""
                className="shadow-md  border-gray-400   bg-white  border rounded-lg pr-1 w-full"
                placeholder="بريد الكتروني"
              />
            </div>
            <div className="flex gap-5 flex-row ">
              <div className=" flex  ">
                <input
                  type="text"
                  name=""
                  className="shadow-md w-full border-l-0 rounded-l-none placeholder:text-start text-end    border-gray-400   bg-white  border rounded-lg pr-1 "
                  placeholder="هاتف"
                  id=""
                />
                <span className="rounded-l-md px-2 border-gray-400   bg-white  border-r-0 border items-center">
                  <p className="mt-1 h-full w-full" dir="ltr">
                    +966
                  </p>
                </span>
              </div>
              <input
                type="text"
                name=""
                id=""
                className="shadow-md  border-gray-400   bg-white  border rounded-lg pr-1 w-full"
                placeholder="موضوع"
              />
            </div>
            <div>
              <textarea
                name=""
                className="shadow-md  border-gray-400   bg-white  border rounded-lg pr-1 w-full"
                placeholder="الرسالة"
                id=""
              ></textarea>
            </div>{" "}
            <button className="bg-primary rounded-lg md:hover:scale-105  hover:scale-110 delay-75 transition-all text-white font-semibold shadow-md shadow-gray-300 px-3 py-2">
              ارسال
            </button>
          </div>

          <div></div>
        </div>
      </div>
    );
}