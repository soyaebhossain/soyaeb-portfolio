// App.js
import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function App() {
  return (
    import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function SoyaebPortfolio() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-blue-50 p-6 w-full md:w-1/3 flex flex-col items-center">
          <img
            src="/mnt/data/DSC05152 - Copy.jpg"
            alt="Soyaeb Hossain"
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-center mb-1">Md. Soyaeb Hossain</h2>
          <p className="text-sm text-center text-gray-600 mb-4">Computer Engineer | Graphics Designer</p>

          <div className="text-sm w-full">
            <h3 className="text-lg font-semibold border-b pb-1 mb-2">Personal details</h3>
            <p className="mb-1"><strong>Email:</strong> soyaebhossain2000@yahoo.com</p>
            <p className="mb-1"><strong>Phone:</strong> +8801716-573526</p>
            <p className="mb-1"><strong>Address:</strong> Mirpur-10, Dhaka</p>
            <p className="mb-4"><strong>DOB:</strong> 28 Nov 2000</p>
            <div className="flex gap-3 justify-center">
              <a href="https://github.com/soyaebhossain" target="_blank" rel="noopener noreferrer"><Github /></a>
              <a href="https://linkedin.com/in/soyaebhossain2000" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              <a href="https://facebook.com/soyaeb.2000" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a href="mailto:soyaebhossain2000@yahoo.com"><Mail /></a>
            </div>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Graphics Design (AI & PS)</li>
              <li>Typing (Bangla & English)</li>
              <li>MS Word, Excel, PowerPoint</li>
              <li>Hardware & Networking</li>
              <li>Teamwork & Communication</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-2/3 p-6 space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Profile</h3>
            <p className="text-sm text-gray-700">
              Dedicated and dynamic Computer Engineer with practical experience in publication, IT management,
              and graphics design. Passionate about delivering error-free digital content and maintaining
              excellence in visual communication and document structuring.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Employment</h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>
                <p className="font-semibold">Fahad’s Tutorial — Content & Syntax Maker</p>
                <p className="text-gray-600">Oct 2024 – Present</p>
              </li>
              <li>
                <p className="font-semibold">UCC Group — IT Officer</p>
                <p className="text-gray-600">Oct 2022 – Oct 2024</p>
              </li>
              <li>
                <p className="font-semibold">Scandex Textile — Quality Inspector</p>
                <p className="text-gray-600">Jul 2022 – Oct 2022</p>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Education</h3>
            <ul className="text-sm text-gray-800">
              <li><strong>Dhaka International University:</strong> B.Sc. in CSE (Ongoing)</li>
              <li><strong>BTEB:</strong> Diploma in Computer Science – 2022 – CGPA: 3.63</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Certificates</h3>
            <ul className="text-sm text-gray-800">
              <li>Graphics Design & Multimedia – Computer Place – 6 Months (A+)</li>
              <li>Database Management – BTEB – 6 Months (A+)</li>
              <li>Web Development – Programming Hero – Ongoing</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">References</h3>
            <ul className="text-sm space-y-4 text-gray-800">
              <li>
                <p className="font-semibold">Abdul Baset</p>
                <p>Professor, DIU</p>
                <p>📞 01716-505902 | ✉️ baset123@gmail.com</p>
              </li>
              <li>
                <p className="font-semibold">Md. Mizanur Rahman Mojumder</p>
                <p>Director, UCC Group</p>
                <p>📞 01819-870623 | ✉️ me.mozumder@gmail.com</p>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

  );
}
