import React from "react";
import { useLoaderData } from "react-router-dom";
import { Stats, Table, Link, Badge } from "react-daisyui";
const DetailScreen = () => {
  const data = useLoaderData();
  console.log(data.data);
  const {
    background_image_additional,
    background_image,
    description_raw,
    name,
    genres,
    stores,
    platforms,
    website,
  } = data.data;

  return (
    <section>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={background_image_additional}
            alt="#"
            className="w-full"
            style={{ height: "82vh" }}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={background_image}
            alt="#"
            className="w-full"
            style={{ height: "82vh" }}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <h1 className="mt-12 mx-auto text-5xl font-bold">{name}</h1>
      <p className="container mx-auto font-semibold bg-success p-10 my-8 text-2xl rounded-2xl text-justify">
        <div className="text-left mb-3">
          {" "}
          {genres.map((genre) => (
            <Badge size="lg" className="mr-5 p-4" color="secondary">
              {genre.name}
            </Badge>
          ))}
        </div>

        {description_raw}
      </p>
      <div className="overflow-x-auto my-20">
        <Table className="container mx-auto">
          <Table.Head>
            <span />
            <span>Stores</span>
            <span>Domain</span>
            <span>Games Count</span>
          </Table.Head>

          <Table.Body>
            {stores.map((store, index) => (
              <Table.Row>
                <span>{index + 1}</span>
                <span>{store.store.name}</span>
                <span>
                  <Link
                    href={`https://${store.store.domain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                  >
                    {store.store.domain}
                  </Link>
                </span>
                <span>{store.store.games_count}</span>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <h1 className="text-5xl font-extrabold mt-24 mb-8">Available On </h1>
        <Stats className="shadow font-sans mb-24">
          {platforms.map((platform) => {
            const { name } = platform.platform;
            return (
              <Stats.Stat className="bg-info py-10">
                <Stats.Stat.Item variant="value">{name}</Stats.Stat.Item>
              </Stats.Stat>
            );
          })}
        </Stats>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold mt-24 mb-8 text-left container mx-auto mb-20">
          Visit Official Site:
          <br />
          <span className="text-3xl text-primary">
            <Link href={website} target="_blank">
              {website}
            </Link>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default DetailScreen;
