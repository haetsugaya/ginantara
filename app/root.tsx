import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import {
  useGoogleTagManager,
  useGoogleTagManagerNoScript,
} from "./libs/functions/gtm";
import { combineLinks } from "./libs/functions/links";
import { fontLinks } from "./libs/constant/fonts";
import { styleLinks } from "./libs/constant/style";

export async function loader() {
  return json({
    ENV: {
      GTM_CONTAINER_IDS: process.env.GTM_CONTAINER_ID?.split(",") || [],
    },
  });
}

export const links: LinksFunction = () => combineLinks(fontLinks, styleLinks);

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  const gtmId = data.ENV.GTM_CONTAINER_IDS;

  useGoogleTagManager(gtmId);
  useGoogleTagManagerNoScript(gtmId);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="id">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
