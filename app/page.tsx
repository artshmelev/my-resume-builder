import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start gap-1 p-[15mm] w-[210mm] h-[297mm] mx-auto border-2">
      <h1 className="flex gap-2">
        <div className="text-2xl font-bold">Артем Шмелев</div>
        <div className="italic text-2xl font-medium">Бэкенд-разработчик</div>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-3 text-sm">
        <div className="flex gap-x-[3px]">
          <EnvelopeIcon className="w-5 h-5" />
          <div>artem.shmelev@gmail.com</div>
        </div>
        <div className="flex gap-x-[3px]">
          <PhoneIcon className="w-5 h-5" />
          <div>+79150335804</div>
        </div>
        <div className="flex gap-x-[3px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
          <div>github.com/artshmelev</div>
        </div>
        <div className="flex gap-x-[3px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
          <div>linkedin.com/in/artshmelev</div>
        </div>
        <div className="flex gap-x-[3px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0m0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0M4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341m6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8m12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8M2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091m6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354m9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353M1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483m-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177m12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177M3.045 12.944a.3.3 0 0 1-.029-.376l3.898-5.592a.3.3 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.3.3 0 0 1-.062.062l-5.592 3.898a.3.3 0 0 1-.382-.034zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176M9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176" />
          </svg>
          <div>shmelev.xyz</div>
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
        активно использую IDE с ИИ (vscode + Copilot/continue.dev). Я стремлюсь
        быть в курсе современных технологий и вносить вклад в инновационные и
        эффективные решения. Моя цель - использовать свои технические навыки и
        знания предметной области для создания ценности для работодателей и
        клиентов.
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold">Скиллы</h2>
        <div className="flex flex-wrap text-sm gap-x-2">
          <div>Python</div>
          <div>Golang</div>
          <div>C++</div>
          <div>JS/TS/Node.js</div>
          <div>PostgreSQL/MongoDB</div>
          <div>Docker/Git/Bash/SQL</div>
          <div>API/microservices</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold">Профессиональный опыт</h2>
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
              MySQL, Clickhouse, Tarantool, CMake, k8s, Kafka, ZeroMQ. <br />•
              Ускорил разработку команды и позволил чаще выпускать обновления,
              внедрив первую версию CI/CD (Jenkins + Docker + Puppet) с нуля и
              интегрировав тесты (Python вместо Bash).
              <br />• Значительно улучшил время отклика сервиса статистики (с
              секунд до миллисекунд), успешно мигрировав с MySQL на Clickhouse.
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
        <h2 className="text-lg font-bold">Образование</h2>
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
        <h2 className="text-lg font-bold">Проекты</h2>
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
