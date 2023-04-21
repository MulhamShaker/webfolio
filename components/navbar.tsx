import Link from "next/link";

const Navbar = () => {
    return (

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <h4 className="before:content-['M'] before:text-blue-800/25 after:content-['ulham'] after:text-white/50 text-3xl font-bold font-serif mt-2"></h4>
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    <div className=" md:block sm:block sm:w-[30%] md:w-auto">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 sm:text-blue-600 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Work</a>
        </li>
        {/* <li>
          <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>


    );
}

export default Navbar;