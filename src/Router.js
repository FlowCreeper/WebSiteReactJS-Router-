import { useState, useTransition } from "react";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Lucas from "./Lucas";
import Igor from "./Igor";

export default function Router() {
  const [page, setPage] = useState("/");
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    startTransition(() => setPage(url));
  }

  let content;

  if (page === "/") {
    content = <Home />;
  } else if (page === "/About") {
    content = <About />;
  } else if (page === "/Lucas") {
    content = <Lucas />;
  } else if (page === "/Igor") {
    content = <Igor />;
  }

  return <Layout navigation={navigate}>{content}</Layout>;
}
