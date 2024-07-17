'use client' 
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
    const data = { name, email, message };
     await axios.post('api/contact', data); 
  }

  return (
    <main className="py-24 px-40 bg-white">
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* textarea */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              type="text"
              required
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-400 px-8 py-2 rounded text-white">submit</button>
      </form>
    </main>
  );
}
