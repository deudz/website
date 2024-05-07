import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import { SpeedInsights } from "@vercel/speed-insights/remix";

import Navbar from "./Navbar";

import type { LinksFunction } from "@remix-run/node";
import styles from "~/tailwind.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Uh oh!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex justify-center items-center flex-col error-msg">
          <div className="text-3xl font-bold">
            Ocorreu um erro ao carregar a página!
          </div>
          <p>Cheque o console para ver o porquê.</p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
