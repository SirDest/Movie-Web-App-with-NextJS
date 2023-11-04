import { Suspense } from "react";
import Landing from "./Landing";
import Movies from "./Movies";
import Footer from "./Footer";
import Loading from "./loading";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Landing />
        <Movies />
        <Footer />
      </main>
    </Suspense>
  );
};
export default Home;
