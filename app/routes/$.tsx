import { useRouteError } from "react-router";

import { Nav } from "~/components/nav";
import { default404 } from "~/components/response4xx";

export async function loader() {
  throw new Response("Oh no! Something went wrong!", {
    status: 404,
  });
}

export function ErrorBoundary() {
  const error = useRouteError();
  return default404(error);
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
