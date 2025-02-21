import logo from "Assets/CongDichTruyenLogo.jpg";
import { useState } from "react";

export default function Header() {
  function to_index_page() {
    window.location.href = "/";
  }

  return (
    <>
      <div className="">
        <div className="grid grid-cols-5 w-full">
          {/* this is the top */}
          <img
            src={logo}
            alt="logo"
            className="w-20 rounded-lg cursor-pointer hidden"
            onClick={to_index_page}
          />
          <p
            className="mt-5 font-robo text-2xl cursor-pointer col-span-4 text-center"
            onClick={to_index_page}
          >
            Cổng Dịch Truyện
          </p>
          <HamburgerMenu />
        </div>
      </div>
    </>
  );
}

function HamburgerMenu() {
  const [hamburger_menu_state, set_hamburger_menu_state] = useState(false);

  function toggle_hamburger_menu() {
    set_hamburger_menu_state(!hamburger_menu_state);
  }

  return (
    <>
      <div
        className="hamburger_menu mt-6 mr-3 ml-6 cursor-pointer"
        onClick={toggle_hamburger_menu}
      >
        <span
          className={`bg-black w-8 h-1 block mt-1 1st ${
            hamburger_menu_state ? `rotate-45 relative top-2` : ``
          }`}
        ></span>
        <span
          className={`bg-black w-8 h-1 block mt-1 2nd ${
            hamburger_menu_state ? `hidden` : ``
          }`}
        ></span>
        <span
          className={`bg-black w-8 h-1 block mt-1 3rd ${
            hamburger_menu_state ? `-rotate-45` : ``
          }`}
        ></span>
      </div>
      <div className={`${hamburger_menu_state ? `block` : `hidden`} w-full`}>
        <div className="w-full">
          <AccountBadge
            name="Test Name"
            email="lethanhhieu.waldy@gmail.com"
            userID="110023adajisdf"
          />
          <div className="border-b-2 border-slate-400 w-screen"></div>
          <JobBadge />
        </div>
      </div>
    </>
  );
}

function JobBadge() {
  const [job_state, set_job_state] = useState(false);

  function updateJobState() {
    set_job_state(!job_state);
  }

  return (
    <>
      <div className="w-screen bg-slate-100 pb-2">
        <div className="w-80 mx-auto grid grid-cols-10 grid-rows-3">
          <p className="col-span-9 col-start-1 row-start-2 text-base font-bold text-[#3B939B]">
            Công Việc
          </p>
          <div
            className="col-start-10 row-start-2 pt-2 rounded-full bg-slate-100 -ml-5 w-8 h-8 cursor-pointer"
            onClick={updateJobState}
          >
            <span
              className={`block bg-black w-5 h-1 relative top-1 left-3 ${
                job_state ? `-rotate-45` : `rotate-45`
              }`}
            ></span>
            <span
              className={`block bg-black w-5 h-1 -rotate-45 ${
                job_state ? `rotate-45` : `-rotate-45`
              }`}
            ></span>
          </div>
        </div>
        <div className={`${job_state ? `block` : `hidden`}`}>
          <JobFunction />
        </div>
      </div>
    </>
  );
}

function JobFunction() {
  return (
    <>
      <div className="">
        <div className="grid-cols-10 border-2 border-[#2F8189] w-80 mx-auto cursor-pointer mb-2 rounded-xl h-8 leading-7">
          <p className="ml-2">Việc Làm Đã Đăng</p>
        </div>
        <div className="grid-cols-10 border-2 border-[#2F8189] w-80 mx-auto cursor-pointer mb-2 rounded-xl h-8 leading-7">
          <p className="ml-2">Việc Làm Đã Ứng Tuyển</p>
        </div>
        <div className="grid-cols-10 border-2 border-[#2F8189] w-80 mx-auto cursor-pointer mb-2 rounded-xl h-8 leading-7">
          <p className="ml-2">Tìm Việc Làm</p>
        </div>
      </div>
    </>
  );
}

interface AccountProps {
  name: string;
  userID: string;
  email: string;
}

function AccountBadge({ name, userID, email }: AccountProps) {
  const [account_badge_state, set_account_badge_state] = useState(false);

  function updateAccountBadgeState() {
    set_account_badge_state(!account_badge_state);
  }

  return (
    <>
      <div className="w-screen pt-2 bg-slate-100 mt-2 pb-2">
        <div className="w-80 font-roboto grid grid-rows-3 grid-cols-10 rounded place-items-start mx-auto ">
          <p className="col-span-9 col-start-1 text-lg font-bold text-[#3B939B] ml-2">
            {name}
          </p>
          <p className="col-span-9 col-start-1 text-base flex ml-2 text-slate-600">
            Mã tài khoản: <p className="text-base ml-1 text-black">{userID}</p>
          </p>
          <p className="col-span-9 col-start-1 text-sm text-slate-600 ml-2">
            {email}
          </p>
          <div
            className="col-start-10 row-start-2 rounded-full bg-slate-100 pt-2 -ml-5 w-8 h-8 cursor-pointer"
            onClick={updateAccountBadgeState}
          >
            <span
              className={`block bg-black w-5 h-1 relative top-1 left-3 ${
                account_badge_state ? `-rotate-45` : `rotate-45`
              }`}
            ></span>
            <span
              className={`block bg-black w-5 h-1 -rotate-45 ${
                account_badge_state ? `rotate-45` : `-rotate-45`
              }`}
            ></span>
          </div>
        </div>
        <div className={`${account_badge_state ? `block` : `hidden`}`}>
          <AccountFunction />
        </div>
      </div>
    </>
  );
}

function AccountFunction() {
  return (
    <>
      <div className="">
        <div className="grid-cols-10 border-2 border-[#2F8189] w-80 mx-auto cursor-pointer mb-2 rounded-xl h-8 leading-7">
          <p className="ml-2">Đổi Thông Tin</p>
        </div>
        <div className="grid-cols-10 border-2 border-[#2F8189] w-80 mx-auto cursor-pointer mb-2 rounded-xl h-8 leading-7">
          <p className="ml-2">Đổi Mật Khẩu</p>
        </div>
        <div className="grid-cols-10 border-2 border-[#2F8189] w-80 mx-auto cursor-pointer mb-2 rounded-xl h-8 leading-7">
          <p className="ml-2">Đăng Xuất</p>
        </div>
      </div>
    </>
  );
}
