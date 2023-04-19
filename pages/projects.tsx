import Head from "next/head";
import Link from "next/link";
import React from "react";

const Projects = () => {
    return (
        <>
            <Head>
                <title>My Portfolio | My Projects</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=" grid md:grid-cols-2 sm:grid-cols-1 container gap-6 md:px-20 lg:px-48 xl:px-48 2xl:px-48 w-full  bg-slate-900 text-xl text-sky-400/50  p-12">
                <div className=" h-fit p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <img src="/images/projects/barista.jpg" alt="Barista Project" />
                    <h1 className="p-4">-Barista</h1>
                    <h1 className="p-4">-Python</h1>
                </div>

                <div className="flex-1 p-4  h-fit ax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="h-fit">
                  <img src="/images/projects/e-shop.png" alt="E-Commerce Shop & Admin Section Project" />
                    <h1 className="p-4">-E-Commerce Shop & Admin Section</h1>
                    <h1 className="p-4">-Django, Python, Css, Html</h1>
                  </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 container gap-6 md:px-20 lg:px-48 xl:px-48 2xl:px-48 w-full h-auto max-w-full bg-slate-900 text-xl text-sky-400/50 align-middle p-12">
                <div className=" h-fit p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img src="/images/projects/contact-page.png" alt="Contact Form Project" />
                    <h1 className="p-4">-Contact Form</h1>
                    <h1 className="p-4">-NextJs, Javascript, Tailwind</h1>
                </div>
                <div className="flex-1 p-4 ax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className=" h-fit">
                  <img src="" alt="" />
                    <h1 className="p-4">-</h1>
                    <h1 className="p-4">-</h1>
                  </div>
                </div>
                </div>
        </>
    );
}

export default Projects;
