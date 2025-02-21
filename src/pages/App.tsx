import Header from "src/components/header/Header";

export default function App() {
  return (
    <>
      <div className="">
        <Header />
        <div className="">
          {/* body */}
          <MainViewBadge />
        </div>
      </div>
    </>
  );
}

function MainViewBadge(){
  return(
    <>
      <div className="w-screen bg-[#C9FBFF] h-60 mt-2">
        <SearchBar />
      </div>
    </>
  );
}

function SearchBar(){
  return(
    <>
      <div className="w-72 mx-auto pt-32">
        <input type="search" name="search" id="search" className="w-72 bg-slate-50 rounded-lg border-black border-2 h-9" />
        
      </div>
    </>
  );
}