import { Suspense } from "react";

import Router from "./Router";

function Loading({ value }) {
  return <section className="Loading"></section>;
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  );
}
