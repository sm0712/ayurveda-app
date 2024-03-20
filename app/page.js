"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AppBgImg from "@/components/AppBgImg";
import Modal from "@/components/Modal";
import { useState
 } from "react";
export default function Home() {
  const [showModal,setShowModal]= useState(false);
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <AppBgImg />
      <div className="grid grid-cols-1 items-center ">
        <h1 className="font-bold text-5xl justify-self-center font-poppins text-[#618264] my-12 p-5 text-center w-[70%]">
          Ayurveda: A Brief Introduction And Guide
        </h1>

        <p className=" font-light text-xl font-poppins text-[555843] px-5 md:px-80 text-center justify-self-center w-[70%]">
          Ayurveda is considered by many scholars to be the oldest healing
          science. In Sanskrit, Ayurveda means “The Science of Life.” Ayurvedic
          knowledge originated in India more than 5,000 years ago and is often
          called the “Mother of All Healing.” It stems from the ancient Vedic
          culture and was taught for many thousands of years in an oral
          tradition from accomplished masters to their disciples. Some of this
          knowledge was set to print a few thousand years ago, but much of it is
          inaccessible. The principles of many of the natural healing systems
          now familiar in the West have their roots in Ayurveda, including
          Homeopathy and Polarity Therapy.
        </p>

        <button onClick={()=>setShowModal(true)}className=" m-10  justify-self-center font-bold font-poppins text-xl text-white md:px-5 py-5 w-[15%] bg-[#304D30] rounded-full hover:bg-[#163020]">
          REQUEST SAMPLE
        </button>
      </div>
      <Modal isVisible={showModal} OnClose={()=>setShowModal(false)}>
      <div class="p-8 mt-8 max-w-lg mx-auto">
    <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold mb-4">Contact Us</h1>
<form action="https://fabform.io/f/{form-id}" method="post">
        <div class="p-2 w-full">
            <div class="relative">
                <label for="name" class="leading-7 py-4 text-lg text-gray-900">Name</label>
                <input type="text" id="name" name="name" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email</label>
                <input type="email" id="email" name="email" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="message" class="leading-7 py-4 text-lg text-gray-900">Message</label>
                <textarea id="message" name="message" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
        </div>
        <div class="p-2 w-full">
            <div>
                <button type="submit"
                    class="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                    Send
                </button>
            </div>
            </div>
        
    </form>
     <a href="https://veilmail.io/demo" class="font-medium text-blue-600 hover:underline">Or contact us my email https://veilmail.io/demo</a>
         
</div>
      </Modal>
    </div>
  );
}
