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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start gap-1 p-[15mm] w-[210mm] h-[297mm] mx-auto border-2">
      <h1 className="flex gap-2">
        <div className="text-2xl font-bold">Артем Шмелев</div>
        <div className="italic text-2xl font-medium">Бэкенд-разработчик</div>
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
        Я профессиональный разработчик с{" "}
        <span className="font-bold italic">10 лет</span> опыта в backend
        разработке, работая с технологиями{" "}
        <span className="font-bold italic">Python, Go, C++, NodeJS</span>. Моя
        страсть - проектирование и архитектура сложных систем, которые
        способствуют росту бизнеса и улучшению пользовательского опыта. Я всегда
        стремлюсь учиться новым навыкам - сейчас я готовлюсь к экзаменам AWS
        Associate и AI Practitioner, изучаю Rust, делаю пет-проекты на Next.js,
        активно использую IDE с ИИ (VS Code с Copilot/Continue.dev). Я стремлюсь
        быть в курсе современных технологий и вносить вклад в инновационные и
        эффективные решения. Моя цель - использовать свои технические навыки и
        знания предметной области для создания ценности для работодателей и
        клиентов.
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex items-baseline gap-x-1 text-lg font-bold">
          <GiBrain className="h-4 w-4" />
          <div>Навыки</div>
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
          <div>Профессиональный опыт</div>
        </h2>
        <div className="grid grid-cols-[1fr_7fr] items-baseline text-sm">
          <div className="text-xs">01/2023 – н.в.</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Yango</span>
              <span className="italic">, Разработчик</span>
            </div>
            <div className="text-xs">
              Разрабатываю backend для мобильного приложения Yango. <br />
              <span className="font-bold italic">Стек:</span> Python, C++,
              MongoDB, PostgreSQL.
              <br />• Оптимизировал и снизил затраты на Google Maps API на 90%.{" "}
              <br />• Интегрировал мессенджер в приложение. <br />• Разрабатывал
              p2p маркетплейс: модерация контента, интеграция чата в приложении.
            </div>
          </div>
          <div className="text-xs">07/2021 – 01/2023</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Яндекс</span>
              <span className="italic">, Разработчик</span>
            </div>
            <div className="text-xs">
              Работал над международными проектами в Яндекс Такси.
              <br />• Улучшил качество продукта, инициировав процесс сбора
              ошибок локализации на бэкенде. <br />• Задизайнил, разработал и
              ввел в эксплуатацию функцию пополнения средств в приложении для
              водителей Африки.
              <br />• Интегрировал управление устройствами-таксометрами в
              приложение в нескольких странах, обеспечив прозрачность бизнеса
              для регулятора.
            </div>
          </div>
          <div className="text-xs">08/2020 – 12/2022</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Практикум от Yandex</span>
              <span className="italic">, Ревьювер кода</span>
            </div>
            <div className="text-xs">
              Оценивал задания студентов на курсе по алгоритмам и делился своим
              опытом.
            </div>
          </div>
          <div className="text-xs">12/2014 – 07/2021</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Mail.ru Group</span>
              <span className="italic">, Разработчик</span>
            </div>
            <div className="text-xs">
              Разрабатывал рекламную систему myTarget ({">"}350к запросов в
              секунду, время отклика 50-100мс)
              <br />
              <span className="font-bold italic">Стек:</span> C++, Go, Python,
              MySQL, ClickHouse, Tarantool, CMake, k8s, Kafka, ZeroMQ. <br />•
              Ускорил разработку команды и позволил чаще выпускать обновления,
              внедрив первую версию CI/CD (Jenkins + Docker + Puppet) с нуля и
              интегрировав тесты (Python вместо Bash).
              <br />• Значительно улучшил время отклика сервиса статистики (с
              секунд до миллисекунд), успешно мигрировав с MySQL на ClickHouse.
              <br />• Улучшил надежность системы, переведя передачу статистики с
              UDP на ZeroMQ.
              <br />• Ввел Golang в технологический стек команды, разработав
              микросервис на Go для сбора онлайн и оффлайн статистики, а также
              интегрировав инфраструктуру для его сборки и развертывания.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex items-baseline gap-x-1 text-lg font-bold">
          <FaUniversity className="h-4 w-4" />
          <div>Образование</div>
        </h2>
        <div className="grid grid-cols-[1fr_7fr] items-baseline gap-x-10 text-sm">
          <div className="text-xs">2015 – 2017</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Магистр, Прикладная математика</span>
              <span className="italic">
                , Московский физико-технический институт
              </span>
            </div>
            <div className="text-xs">
              Обучался на факультете управления и прикладной математики.
            </div>
          </div>
          <div className="text-xs">2011 – 2015</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Бакалавр, Прикладная математика</span>
              <span className="italic">
                , Московский физико-технический институт
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex items-baseline gap-x-1 text-lg font-bold">
          <FaFolderOpen className="h-4 w-4" />
          <div>Проекты</div>
        </h2>
        <div className="grid grid-cols-[1fr_7fr] items-baseline text-sm">
          <div className="text-xs">2014 – 2021</div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">libslave</span>
              <span className="italic">
                , https://github.com/artshmelev/libslave
              </span>
            </div>
            <div className="text-xs">
              Помог команде в обновлении кластера MySQL с версии 5.5 до 5.7, что
              позволило использовать новые возможности базы данных, активно
              внеся свой вклад в open-source библиотеку.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
