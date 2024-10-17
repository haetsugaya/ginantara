import { isRouteErrorResponse } from "@remix-run/react";
import { Nav } from "./nav";

export const default404 = (error: unknown) => {
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

  // Handle other types of errors or provide a fallback
  return (
    <main className="banner h-screen flex flex-col border-b border-black">
      <Nav />
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="text-[40px] sm:text-[80px]">404 Not Found</h1>
        <p>Page not found.</p>
      </div>
    </main>
  );
};
