import logo from "Assets/CongDichTruyenLogo.jpg";

export default function App() {
  return (
    <>
      <div className="">
        <div className="flex">
          {/* this is the top */}
          <img src={logo} alt="logo" className="w-20 rounded-lg" />
          <p>Cổng Dịch Truyện</p>
          <div className="">
            <span className="background"></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </div>
      </div>
    </>
  );
}
