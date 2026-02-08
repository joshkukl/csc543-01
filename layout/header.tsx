'use client';
import React from 'react';

/**
const Header: React.FC = () => {
    return (
        <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
            <h1 style={{ margin: 0 }}>My Next.js App</h1>
        </header>
    );
}
**/

const Header: React.FC = () => {
    return (
        <header className="w-full py-4 border-b border-gray-200 flex items-center justify-between px-8">
            <h1 className="text-2xl font-bold">My App</h1>
        </header>
    );
}
export default Header;