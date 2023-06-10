import Banner from "../Banner/Banner";
import TopClass from "../TopClass/TopClass";
import TopTeacher from "./TopTeacher/TopTeacher";

const Home = () => {
  return (
    <div className="mb-[50px]">
      <Banner></Banner>
      <TopClass></TopClass>
      <TopTeacher></TopTeacher>
    </div>
  );
};

export default Home;
