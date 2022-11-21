import { AsideContext } from '@frontends/shared-ui';
import { motion } from 'framer-motion';
import { FunctionComponent, useContext } from 'react';

export const Sidebar: FunctionComponent = () => {
  const { collapsed, setCollapsed } = useContext(AsideContext);

  return (
    <div className="h-full w-full bg-gray-900/90">
      <header className="pl-4 pt-4 flex items-center gap-2">
        <div className={`${collapsed && 'flex items-center justify-center'}`}>
          <button onClick={() => setCollapsed(!collapsed)}>
            <svg width="35" height="35" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.74856 18.9598L26.9519 33.335L59.4726 16.1132M26.9519 62V33.3065M14.6146 26L48.5769 8M60.2211 43.3997V19.0736C60.2201 18.0753 59.9634 17.0947 59.4768 16.2304C58.9902 15.366 58.2908 14.6482 57.4487 14.149L38.0417 2.76274C37.1987 2.26306 36.2425 2 35.2692 2C34.2959 2 33.3397 2.26306 32.4968 2.76274L4.77243 16.9956C3.93034 17.4948 3.23091 18.2126 2.74429 19.0769C2.25768 19.9413 2.001 20.9218 2 21.9202V44.6928C2.001 45.6912 2.25768 46.6717 2.74429 47.5361C3.23091 48.4004 3.93034 49.1182 4.77243 49.6174L24.1795 61.0037C25.0224 61.5034 25.9786 61.7664 26.9519 61.7664C27.9252 61.7664 28.8814 61.5034 29.7243 61.0037L57.4487 48.3242C58.2908 47.8251 58.9902 47.1073 59.4768 46.2429C59.9634 45.3786 60.2201 44.398 60.2211 43.3997Z"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </button>
        </div>
        {!collapsed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
            <h1 className="text-white font-extrabold text-2xl tracking-wider">IMS</h1>
          </motion.div>
        )}
      </header>
      <main className="pt-10">
        <ul className="-space-y-2 text-sm">
          <li className="hover:bg-slate-700/50">
            <a
              href="#"
              className={`${
                collapsed ? 'flex justify-center' : 'pl-4'
              } flex items-center gap-5 text-slate-200 hover:text-slate-50 py-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Dashboard
                </motion.span>
              )}
            </a>
          </li>
          <li className="hover:bg-slate-700/50">
            <a
              href="#"
              className={`${
                collapsed ? 'flex justify-center' : 'pl-4'
              } flex items-center gap-5 text-slate-200 hover:text-slate-50 py-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Schedule
                </motion.span>
              )}
            </a>
          </li>

          <li className="hover:bg-slate-700/50">
            <a
              href="#"
              className={`${
                collapsed ? 'flex justify-center' : 'pl-4'
              } flex items-center gap-5 text-slate-200 hover:text-slate-50 py-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>

              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Packages
                </motion.span>
              )}
            </a>
          </li>

          <li className="hover:bg-slate-700/50">
            <a
              href="#"
              className={`${
                collapsed ? 'flex justify-center' : 'pl-4'
              } flex items-center gap-5 text-slate-200 hover:text-slate-50 py-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Documents
                </motion.span>
              )}
            </a>
          </li>

          <li className="hover:bg-slate-700/50">
            <a
              href="#"
              className={`${
                collapsed ? 'flex justify-center' : 'pl-4'
              } flex items-center gap-5 text-slate-200 hover:text-slate-50 py-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Archive
                </motion.span>
              )}
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};
