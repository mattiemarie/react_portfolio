import React from "react";

export default function Navbar() {
    return (
        <header>
        <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">

                <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                    <a href="#" class="bg-gray-900 text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Me</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Resume</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact Me</a>
            
                </div>
                </div>
            </div>
            </div>
        </nav>
        </header>
    );
}