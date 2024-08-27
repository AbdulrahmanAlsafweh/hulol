import { Link } from "react-router-dom";
export default function AboutUsNavbar(){
    return (
      //   <div className="w-full h-fit font-cairo bg-[url('/public/assets/bg.jpg')] flex flex-row ">

      <div
        dir="rtl"
        className="text-primary w-full    drawer   bg-no-repeat bg-cover bg-center relative bg-[url('/public/assets/bg.jpg')] font-cairo  h-[100vh]  md:bg-cover  "
      >
        <div className="w-full absolute bottom-0 h-[10%]  bg-primary z-10 opacity-70"></div>
        <div className="w-full absolute bottom-0 h-[20%]  bg-primary z-10 opacity-30"></div>{" "}
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="absolute inset-0 bg-black  opacity-40"></div>
        {/* <div className="absolute top-[35%]  md:top-[25%] right-3 md:right-[10%]">
        <p className="text-white text-[40px] md:text-[75px] relative">
          <span className="bg-primary rounded-lg w-[90px] h-[50px] md:w-[160px] md:h-[100px]  absolute top-2 md:top-5"></span>
          <span className="z-20 absolute text-nowrap">حلول ,,,حلتها لك</span>
        </p>
      </div> */}
        {/* <div className="absolute top-[50%] md:top-[45%] right-[20%] md:right-[30%] text-[40px] md:text-[75px]">
        <p>شريك يعتمد عليه</p>
      </div> */}
        <div className=" flex justify-between px-1    items-center h-fit w-[100vw]   z-10 relative">
          <ul className=" md:flex flex-row items-center hidden text-[28px]  gap-10 ">
            <li className="hover:text-white">
              <Link to="/">الصفحة الرئيسية</Link>
            </li>{" "}
            <li className="hover:text-white">
              {/* <Link to={"./OurVision"}>حول حلول</Link> */}
              <Link to="/aboutUs">حول حلول</Link>
              {/* <a href="./OurVision"> حول حلول</a> */}
            </li>{" "}
            <li className="hover:text-white">
              <Link to="/OurProducts">منتجاتنا</Link>
            </li>
          </ul>
          <label
            htmlFor="my-drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost z-10 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-10 w-10 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div>
            <a href="">
              <img src="/assets/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="drawer-side  z-20">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-primary   min-h-full w-1/2 flex items-center text-lg text-white font-cairo p-4">
            {/* Sidebar content here */}
            <li>
              <a>الرئيسية</a>
            </li>
            <li>
              <a>حول حلول</a>
            </li>{" "}
            <li>
              <a>منتجاتنا</a>
            </li>
          </ul>
          <img
            src="/assets/meat.png"
            className="object-cover mt-auto top-1/4 -right-10 absolute w-[150px] md:w-[300px] opacity-50 "
            alt=""
          />
        </div>
      </div>

      //   </div>
    );
}