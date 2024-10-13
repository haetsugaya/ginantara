import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { Nav } from "~/components/nav";

export async function loader() {
  throw new Response("Oh no! Something went wrong!", {
    status: 404,
  });
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <main className="banner h-screen flex flex-col border-b border-black">
        <Nav />
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="text-[40px] sm:text-[80px]">404 Not Found</h1>
          <p>{error.data}</p>
        </div>
      </main>
    );
  }
}

const Main = () => {
  return (
    <main className="banner h-screen flex flex-col border-b border-black">
      <Nav />
      <div className="flex h-full justify-center items-center">
        <h1 className="text-[40px] sm:text-[80px]">404 Not Found</h1>
      </div>
    </main>
  );
};

export default function Index() {
  return <Main />;
}
