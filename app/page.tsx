import { Suspense } from "react";
import Landing from "./Landing";
import Movies from "./Movies";
import Footer from "./Footer";
import Loading from "./loading";

const Home = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Landing />
      </Suspense>
      <Movies />
      <Footer />
    </main>
  );
};
export default Home;
