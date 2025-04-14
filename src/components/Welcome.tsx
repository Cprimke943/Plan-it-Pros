'use client';
import Link from 'next/link';

const Welcome = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gradient-to-br from-[#E88183] to-[#676767] bg-opacity-90 p-12 rounded-xl shadow-xl w-full max-w-3xl text-white">
                <h1 className="text-4xl font-bold text-left mb-4">Welcome to Plan-it-Pro</h1>
                <p className="text-lg text-left mb-15">
                — your personalized hub for discovering, creating, and managing events that match your interests.  Plan it like a pro.
                </p>
                <div className="text-center">
                    <Link
                        href="/search"
                        className="inline-block px-6 py-3 bg-black text-white-600 font-semibold hover:bg-gray-100 hover:text-black transition rounded"
                    >
                        Search for Events
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
