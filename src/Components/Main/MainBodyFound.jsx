
import AllBooks from "./AllBooks";
import HeroBanner from "./HeroBanner";
import { useLoaderData } from "react-router";

const MainBodyFound = () => {

const allData=useLoaderData()

  return (
    <div>
      <HeroBanner></HeroBanner>


      <AllBooks allData={allData}> </AllBooks>

    </div>
  );
};

export default MainBodyFound;
