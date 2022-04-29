import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Samantha Valle 
                        <br className="hidden lg:inline-block" /> Software Engineer 
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    My name is Samantha Valle and I am a Junior Web Developer with every intention to continue to learn as this industry evolves. I went from majoring in Forensic Anthropology to reflecting much through-out this pandemic and completed a 6 month bootcamp to become certified as a Full Stack Web Developer. I love exploring new technologies and staying on the latest trends, 
                    constantly seeking for new adventures whether in tech or in life.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-900 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-2 inline-flex text-yellow-200 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
            </div> 
            <div className="lg:max-w-lg lg:w-full md:w-1/2">
                <img
                className="lg:max-w-lg lg:w-1/2"
                alt="hero"
                src="./coder.png"
                />
            </div>
            </div>
        </section>
    )
};
