import Banner from "../Banner/Banner";
import TopClass from "../TopClass/TopClass";
import Reasons from "./Reasons/Reasons";
import TopTeacher from "./TopTeacher/TopTeacher";

const Home = () => {
  return (
    <div className="mb-[50px]">
      <Banner></Banner>
      <TopClass></TopClass>
      <TopTeacher></TopTeacher>
      <Reasons></Reasons>
    </div>
  );
};

export default Home;
