import {
  FaUniversity,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaFolderOpen,
  FaSafari,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdBusinessCenter } from "react-icons/md";

export default function EnHome() {
  return (
    <main className="flex flex-col items-center justify-start gap-1 p-[15mm] w-[210mm] h-[297mm] mx-auto border-2">
      <h1 className="flex gap-2">
        <div className="text-2xl font-bold">Artem Shmelev</div>
        <div className="italic text-2xl font-medium">
          Software Engineer | Backend Developer
        </div>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-3 text-sm">
        <div className="flex gap-x-[3px]">
          <FaEnvelope className="w-4 h-4" />
          <div>artem.shmelev@gmail.com</div>
        </div>
        <div className="flex gap-x-[3px]">
          <FaPhone className="w-4 h-4" />
          <div>+79150335804</div>
        </div>
        <div className="flex gap-x-[3px]">
          <FaGithub className="w-4 h-4" />
          <div>github.com/artshmelev</div>
        </div>
        <div className="flex gap-x-[3px]">
          <FaLinkedin className="w-4 h-4" />
          <div>linkedin.com/in/artshmelev</div>
        </div>
        <div className="flex gap-x-[3px]">
          <FaSafari className="w-4 h-4" />
          <div>https://shmelev.xyz</div>
        </div>
        <div className="flex gap-x-[3px]">
          <FaTelegram className="w-4 h-4" />
          <div>@artshmelev</div>
        </div>
      </div>
      <hr className="w-full border-t-2 border-gray-300" />
      <div className="text-sm">
        I am a software engineer with over{" "}
        <span className="font-bold italic">10 years</span> of experience,
        specializing in backend development and architecture. I am proficient in
        a variety of programming languages and technologies, including{" "}
        <span className="font-bold italic">Python</span>,{" "}
        <span className="font-bold italic">Go</span>,{" "}
        <span className="font-bold italic">C++</span>,{" "}
        <span className="font-bold italic">NodeJS</span>,{" "}
        <span className="font-bold italic">LLM/AI</span>. I have a strong
        understanding of software development best practices and am always
        looking for ways to improve my skills and knowledge. I actively use
        AI-powered IDEs (VS Code with Copilot/Continue.dev). I strive to stay
        up-to-date with current technologies and contribute to innovative and
        effective solutions. My goal is to use my technical skills and subject
        area knowledge to create value for employers and clients.
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex items-baseline gap-x-1 text-lg font-bold">
          <GiBrain className="h-4 w-4" />
          <div>Skills</div>
        </h2>
        <div className="flex flex-wrap justify-center text-sm gap-x-2">
          <div className="border-2 px-1">Python</div>
          <div className="border-2 px-1">Golang</div>
          <div className="border-2 px-1">C++</div>
          <div className="border-2 px-1">JS/TS/Node.js</div>
          <div className="border-2 px-1">PostgreSQL/MongoDB</div>
          <div className="border-2 px-1">Docker/Git/Bash/SQL</div>
          <div className="border-2 px-1">API/microservices/Kafka</div>
          <div className="border-2 px-1">English B2</div>
          <div className="border-2 px-1">LLM/AI/OpenAI API/LangChain</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex items-baseline gap-x-1 text-lg font-bold">
          <MdBusinessCenter className="h-4 w-4" />
          <div>Professional Experience</div>
        </h2>
        <div className="grid grid-cols-[1fr_7fr] items-baseline text-sm">
          <div className="text-xs">01/2023 – present</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Yango</span>
              <span className="italic">, Software Engineer</span>
            </div>
            <div className="text-xs">
              Develop the backend for the Yango mobile app.
              <br />
              <span className="font-bold italic">Tech Stack:</span> Python, C++,
              MongoDB, PostgreSQL.
              <br />• Optimized and reduced Google Maps API costs by 90%. <br />
              • Implemented messenger integration. <br />• Developed a P2P
              marketplace, including content moderation and in-app chat
              integration.
            </div>
          </div>
          <div className="text-xs">07/2021 – 01/2023</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Yandex</span>
              <span className="italic">, Software Engineer</span>
            </div>
            <div className="text-xs">
              Successfully completed major international projects at
              Yandex.Taxi.
              <br />• Enhanced the product quality by initiating the process of
              gathering localization errors on the app backend. <br />•
              Independently led and launched the payment top-ups feature in the
              driver app, streamlining the transaction process.
              <br />• Spearheaded and executed integrations with taxi meters
              across multiple countries, improving service efficiency and
              accuracy.
            </div>
          </div>
          <div className="text-xs">08/2020 – 12/2022</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Practicum by Yandex</span>
              <span className="italic">
                , Code Reviewer (Golang, Algorithms)
              </span>
            </div>
            <div className="text-xs">
              Evaluated students&apos; assignments on the Algorithms course and
              shared my expertise.
            </div>
          </div>
          <div className="text-xs">12/2014 – 07/2021</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Mail.ru Group</span>
              <span className="italic">, Software Engineer</span>
            </div>
            <div className="text-xs">
              Developed an advanced, high-performance targeted advertising
              system at the myTarget department (over 350k requests per second,
              with a response time of 50-100ms)
              <br />
              <span className="font-bold italic">Tech Stack:</span> C++, Go,
              Python, MySQL, ClickHouse, Tarantool, CMake, k8s, Kafka, ZeroMQ.{" "}
              <br />• Streamlined team development and facilitated more frequent
              releases by implementing the first version of CI/CD (Jenkins +
              Docker + Puppet) from scratch and integrating tests (Python
              instead of Bash).
              <br />• Drastically improved the statistics service response time
              (from seconds to milliseconds) by migrating from MySQL to
              ClickHouse.
              <br />• Enhanced the banner system&apos;s reliability by
              transitioning from UDP to ZeroMQ for transmitting statistics.
              <br />• Introduced Golang to the team&apos;s technology stack by
              developing a Go microservice for gathering online and offline
              statistics while also integrating infrastructure for its build and
              deployment.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex items-baseline gap-x-1 text-lg font-bold">
          <FaUniversity className="h-4 w-4" />
          <div>Education</div>
        </h2>
        <div className="grid grid-cols-[1fr_7fr] items-baseline text-sm">
          <div className="text-xs">2015 – 2017</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">
                Master’s degree, Applied Mathematics
              </span>
              <span className="italic">
                , Moscow Institute of Physics and Technology
              </span>
            </div>
            <div className="text-xs">
              Studied in the Computer Science Department, further advancing my
              skills and knowledge in the field.
            </div>
          </div>
          <div className="text-xs">2011 – 2015</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">
                Bachelor’s degree, Applied Mathematics
              </span>
              <span className="italic">
                , Moscow Institute of Physics and Technology
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex items-baseline gap-x-1 text-lg font-bold">
          <FaFolderOpen className="h-4 w-4" />
          <div>Projects</div>
        </h2>
        <div className="grid grid-cols-[1fr_7fr] items-baseline text-sm">
          <div className="text-xs">2024 - 2025</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">MemeCreator Telegram App</span>
              <span className="italic">
                , https://t.me/create_meme_bot?startapp
              </span>
            </div>
            <div className="text-xs">
              Developed from scratch: OpenAI API, Typescript, Next.js, Tailwind
              CSS, Neon (Postgres), Drizzle ORM, Upstash (Redis), serverless
              functions, and Telegram Bot API.
            </div>
          </div>
          <div className="text-xs">2014 – 2021</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Libslave</span>
              <span className="italic">
                , https://github.com/artshmelev/libslave
              </span>
            </div>
            <div className="text-xs">
              Assisted the team in upgrading the MySQL cluster from version 5.5
              to 5.7, enabling the utilization of new database features by
              actively contributing to an open-source library.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
