"use client";
import React, { useState } from 'react';

import Image from 'next/image';
import nextjs from "@/app/public/nextjs.png"

import CommentSection from "@/app/components/CommentSection"



const Blog = () => {
  // State to handle "Read More" toggling for both articles
  const [isContentVisible1, setIsContentVisible1] = useState(false);
  const [isContentVisible2, setIsContentVisible2] = useState(false);

  // Function to toggle visibility of content
  const toggleContentVisibility1 = () => {
    setIsContentVisible1(!isContentVisible1);
  };

  const toggleContentVisibility2 = () => {
    setIsContentVisible2(!isContentVisible2);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-teal-900 text-white p-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Next.js Blog</h1>
        <p className="text-lg mt-2 sm:text-xl">Exploring the latest advancements and trends in AI</p>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <section>
          {/* First Article */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
              className="w-full h-72 sm:h-96 object-cover"
              src={nextjs}
              alt="AI Concept"
            />
            <div className="p-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">The Future of Artificial Intelligence</h2>
              <p className="text-gray-600 mt-2 sm:text-lg">
                Artificial Intelligence (AI) is transforming the world at an unprecedented pace. In this blog,
                we will explore the most exciting applications of AI in industries like healthcare, finance, and robotics.
                


              </p>
              {/* Toggleable content */}
              {isContentVisible1 && (
                <p className="text-gray-600 mt-4 sm:text-lg">
                  AI's influence is growing rapidly in several sectors. In healthcare, AI helps with diagnostic tools, predicting disease outbreaks, 
                  and personalizing treatments. In finance, it improves fraud detection, risk management, and algorithmic trading. Moreover, 
                  AI's presence in robotics is advancing automation in manufacturing and other industries. The future of AI holds endless 
                  possibilities, and as the technology evolves, it will continue to transform the world in ways we cannot yet fully imagine. <br />
                  <br />
                  Artificial intelligence (AI), the ability of a digital computer 
                  or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently
                  applied to the project of developing systems endowed with the intellectual processes characteristic of humans,
                  such as the ability to reason, discover meaning, generalize, or learn from past experience. Since their
                  development in the 1940s, digital computers have been programmed to carry out very complex tasks—such 
                  as discovering proofs for mathematical theorems or playing chess—with great proficiency. Despite continuing
                  advances in computer processing speed and memory capacity, there are as yet no programs that can match full
                  human flexibility over wider domains or in tasks requiring much everyday knowledge. On the other hand, some
                  programs have attained the performance levels of human experts and professionals in executing certain 
                  specific tasks, so that artificial intelligence in this limited sense is found in applications as diverse
                  as medical diagnosis, computer search engines, voice or handwriting recognition, and chatbots.
                </p>
              )}
              <button
                onClick={toggleContentVisibility1}
                className="bg-teal-900 text-white hover:bg-teal-700 mt-4 inline-block font-semibold p-3"
              >
                {isContentVisible1 ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </article>
          <CommentSection />

        
        </section>
      </main>

     
    </div>
  );
};

export default Blog;
