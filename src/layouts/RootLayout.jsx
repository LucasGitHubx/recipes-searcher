import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <h1>Recipe Searcher 👨‍🍳👩‍🍳</h1>
      </header>
      <main className="root-layout">
        <Outlet />
      </main>
    </>
  );
}
