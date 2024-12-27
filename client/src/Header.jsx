import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";

export default function Header() {
  const {user} = useContext(UserContext);
  return (
    <header >
      <div className="flex justify-between">
      <Link to={'/'} className="flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
    {/* Outer Circle */}
    <circle cx="32" cy="32" r="30" fill="#FF8080" stroke="#000" strokeWidth="2" />

    {/* Sun */}
    <circle cx="20" cy="20" r="6" fill="#FFD700" />
    <line x1="20" y1="10" x2="20" y2="2" stroke="#FFD700" strokeWidth="2" />
    <line x1="20" y1="30" x2="20" y2="38" stroke="#FFD700" strokeWidth="2" />
    <line x1="10" y1="20" x2="2" y2="20" stroke="#FFD700" strokeWidth="2" />
    <line x1="30" y1="20" x2="38" y2="20" stroke="#FFD700" strokeWidth="2" />

    {/* Palm Tree Trunk */}
    <rect x="28" y="28" width="6" height="16" rx="2" fill="#8B4513" />

    {/* Palm Leaves */}
    <path d="M31 28 C20 15, 10 20, 31 20" fill="none" stroke="#006400" strokeWidth="3" />
    <path d="M31 28 C42 15, 52 20, 31 20" fill="none" stroke="#006400" strokeWidth="3" />
    <path d="M31 28 C22 30, 15 35, 31 35" fill="none" stroke="#006400" strokeWidth="3" />
    <path d="M31 28 C40 30, 48 35, 31 35" fill="none" stroke="#006400" strokeWidth="3" />

    {/* Waves */}
    <path
      d="M10 50 C15 45, 25 45, 30 50 S45 55, 50 50"
      fill="none"
      stroke="#1E90FF"
      strokeWidth="2"
    />
    <path
      d="M12 54 C17 49, 27 49, 32 54 S47 59, 52 54"
      fill="none"
      stroke="#1E90FF"
      strokeWidth="2"
    />
  </svg>

        <span className="font-bold text-xl"> staycation</span>
      </Link>
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      <Link to={user?'/account':'/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
        {!!user && (
          <div>
            {user.name}
          </div>
          
        )}
      </Link>
      </div>
      <div className="w-full">
      <hr style={{ border: "1px solid #ccc", marginTop:"30px" }} />
    </div>
    </header>
  );
}