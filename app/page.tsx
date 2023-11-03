import { Suspense } from "react";
import Landing from "./Landing";
import Movies from "./Movies";

const Home = () => {
  return (
    <main>
      <Landing />
      <Movies />
    </main>
  );
};
export default Home;
