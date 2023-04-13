import requests from "../Requests";
import Main from "../components/Main";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="TopRated" fetchURL={requests.requestTopRated} />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
