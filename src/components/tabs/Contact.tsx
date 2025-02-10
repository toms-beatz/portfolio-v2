"use client";

export default function Contact() {
    return (
        <div>
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <form className="mt-4 space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                    rows={4}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}