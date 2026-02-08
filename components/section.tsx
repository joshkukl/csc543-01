'use client';
import React from 'react';
import Intro from './intro'; 

const Section: React.FC = () => {
    return (
        <section className="w-full h-full p-16 my-4 bg-yellow-600 rounded-md border border-yellow-700">
            <Intro />
        </section>
    );
}
export default Section;