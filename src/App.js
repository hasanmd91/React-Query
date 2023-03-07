import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = lazy(() => import("./Component/Home"));
const About = lazy(() => import("./Component/About"));
const Contact = lazy(() => import("./Component/Contact"));

const App = () => {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div> is loading </div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
