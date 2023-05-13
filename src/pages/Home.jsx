import requests from "../Requests";
import Main from "../components/Main";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row id="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row id="2" title="TopRated" fetchURL={requests.requestTopRated} />
      <Row id="3" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row id="4" title="Trending" fetchURL={requests.requestTrending} />
      <Row id="5" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
