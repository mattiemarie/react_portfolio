import React from "react";

export default function About() {
    return (
        <section>
        <div class="flex -space-x-2 overflow-hidden">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        </div>

        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Mattie.
            </h1>
            <p className="mb-8 leading-relaxed">
                I graduated from the University of Central Florida with
                a Bachelor's in Studio Art and a Minor in Digital Media.
                I am currently enrolled in the UCF Full-Stack Coding
                Bootcamp and am set to finish by the end
                of March. Some of my hobbies include Crocheting,
                playing Guitar and Skateboarding. At the moment, I
                tutor Math at Lake Sumter State College and am a 
                Barista at Starbucks in Citywalk
            </p>
            </div>
        </div>
        </section>
    );
}