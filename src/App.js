import logo from "./logo.svg";

import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import axios from "axios";
import Home from "./screens/Home";
import DetailScreen from "./screens/DetailScreen";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeScreen></HomeScreen>}>
        <Route
          path="/"
          loader={async () => {
            const options = {
              method: "GET",
              url: "https://rawg-video-games-database.p.rapidapi.com/games",
              headers: {
                "X-RapidAPI-Key":
                  "90343a29ccmshea10f5e51a52470p17be0bjsnabb6bf082eb0",
                "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
              },
              params: {
                key: "a9026ad75a0c451dbdf8def78993824d",
              },
            };
            return axios.request(options);
          }}
          element={<Home></Home>}
        />
        <Route path="profile" element={<ProfileScreen></ProfileScreen>} />
        <Route
          path="detail/:id"
          loader={async ({ params }) => {
            const options = {
              method: "GET",
              url: `https://rawg-video-games-database.p.rapidapi.com/games/${params.id}`,
              headers: {
                "X-RapidAPI-Key":
                  "90343a29ccmshea10f5e51a52470p17be0bjsnabb6bf082eb0",
                "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
              },
              params: {
                key: "a9026ad75a0c451dbdf8def78993824d",
              },
            };
            return axios.request(options);
          }}
          element={<DetailScreen></DetailScreen>}
        />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
