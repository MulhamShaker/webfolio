import Head from "next/head";
// import styles from '../styles/info.module.scss'

const myInfo = () => {
    return (
        <>
            <Head>
                <title>My Portfolio | Contact</title>
            </Head>

            <form className="container px-4 md:w-[500px] sm:w-42 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[500px] m-15 mt-5 absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2">
                <div className="m-6">
                    <h3 className="mb-6 sm:text-sm md:text-md">Fill The Form And I Will Response As Fast As I Could</h3>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className=" md:w-96 sm:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required></input>
                </div>
                <div className="mb-6">

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white m-6 w-96">Your message</label>
                    <textarea id="message" className="  md:w-96 sm:w-80 block p-2.5 m-6  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <button type="submit" className="m-6 w-96 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                    </div>
                </div>
                
            </form>


        </>
    );
}

export default myInfo