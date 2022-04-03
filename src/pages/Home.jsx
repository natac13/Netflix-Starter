import React from "react";
import "./Home.css";
import { Logo } from "../images/Netflix.js";
import {
  Button,
  ConnectButton,
  Icon,
  Modal,
  Tab,
  TabList,
  useNotification,
} from "web3uikit";
import { movies } from "../helpers/library";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedFilm, setSelectedFilm] = React.useState();
  const [myMovies, setMyMovies] = React.useState([]);
  const { isAuthenticated, Moralis, account } = useMoralis();

  async function fetchMyList() {
    try {
      await Moralis.start({
        serverUrl: "https://nvezkmgfcvz7.usemoralis.com:2053/server",
        appId: "iaLFUv9UWYDN3Adk1hvxQtHbOdCJG3aOUV0Ksfyg",
      }); //if getting errors add this
      const theList = await Moralis.Cloud.run("getMyList", {
        addrs: account,
      });

      console.log({ theList });

      const filtered = movies.filter((movie) => theList.includes(movie.Name));

      setMyMovies(filtered);
    } catch (error) {
      console.log({ error });
    }
  }

  React.useEffect(() => {
    fetchMyList();
    // eslint-disable-next-line
  }, [account]);

  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: "error",
      message: "Please Connect Your Wallet",
      title: "Not Authenticated",
      position: "topL",
    });
  };

  const handleAddNotification = () => {
    dispatch({
      type: "success",
      message: "Movie Added to List",
      title: "Success",
      position: "topL",
    });
  };

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="connect">
        <Icon fill="#fff" size={24} svg="bell" />
        <ConnectButton />
      </div>
      <div className="topBanner">
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName={"Movies"}>
            <div className="scene">
              <img
                src={movies[0].Scene}
                className="sceneImg"
                alt={movies[0].Name}
              />
              <img
                src={movies[0].Logo}
                className="sceneLogo"
                alt={movies[0].Name}
              />
              <p className="sceneDesc">{movies[0].Description}</p>
              <div className="playButton">
                {isAuthenticated ? (
                  <>
                    <Link to="/player" state={movies[0].Movie}>
                      <Button
                        icon="chevronRightX2"
                        text="Play"
                        theme="secondary"
                        type="button"
                      />
                    </Link>
                    <Button
                      icon="plus"
                      text="Add to My List"
                      theme="translucent"
                      type="button"
                      onClick={async () => {
                        try {
                          console.log({ isAuthenticated, myMovies });
                        } catch (error) {
                          console.log({ error });
                        }
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      icon="chevronRightX2"
                      text="Play"
                      theme="secondary"
                      type="button"
                      onClick={handleNewNotification}
                    />
                    <Button
                      icon="plus"
                      text="Add to My List"
                      theme="translucent"
                      type="button"
                      onClick={handleNewNotification}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="title">Movies</div>
            <div className="thumbs">
              {movies &&
                movies.length &&
                movies.map((movie, idx) => (
                  <img
                    key={movie.Name || idx}
                    src={movie.Thumnbnail}
                    alt={movie.Name}
                    className="thumbnail"
                    onClick={() => {
                      setSelectedFilm(movie);
                      setVisible(true);
                    }}
                  />
                ))}
            </div>
          </Tab>
          <Tab tabKey={2} tabName={"Series"} isDisabled></Tab>
          <Tab tabKey={3} tabName={"MyList"}>
            <div className="ownListContent">
              {console.log({ myMovies, isAuthenticated })}
              <div className="title">Your Library</div>
              {myMovies && isAuthenticated ? (
                <>
                  <div className="ownThumbs">
                    {myMovies.map((movie) => {
                      return (
                        <img
                          src={movie.Thumnbnail}
                          className="thumbnail"
                          onClick={() => {
                            setSelectedFilm(movie);
                            setVisible(true);
                          }}
                          alt="movie thumb"
                        ></img>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="ownThumbs">
                  You need to Authenicate To View Your My list
                </div>
              )}
            </div>
          </Tab>
        </TabList>
        {selectedFilm && (
          <div className="modal">
            <Modal
              onCloseButtonPressed={() => setVisible(false)}
              isVisible={visible}
              hasFooter={false}
              width="min(1000px, 80%)"
            >
              <div className="modalContent">
                <img
                  src={selectedFilm?.Scene || ""}
                  alt={selectedFilm?.Name || ""}
                  className="modalImg"
                />
                <img
                  src={selectedFilm.Logo}
                  alt={selectedFilm.Name}
                  className="modalLogo"
                />
                <div className="modalPlayButton">
                  {isAuthenticated ? (
                    <>
                      <Link to="/player" state={selectedFilm.Movie}>
                        <Button
                          icon="chevronRightX2"
                          text="Play"
                          theme="secondary"
                          type="button"
                        />
                      </Link>
                      <Button
                        icon="plus"
                        text="Add to My List"
                        theme="translucent"
                        type="button"
                        onClick={async () => {
                          try {
                            if (selectedFilm) {
                              await Moralis.Cloud.run("updateMyList", {
                                addrs: account,
                                newFav: selectedFilm.Name,
                              });
                              fetchMyList();
                              handleAddNotification();
                            }
                          } catch (error) {
                            console.log({ error });
                          }
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        icon="chevronRightX2"
                        text="Play"
                        theme="secondary"
                        type="button"
                        onClick={handleNewNotification}
                      />
                      <Button
                        icon="plus"
                        text="Add to My List"
                        theme="translucent"
                        type="button"
                        onClick={handleNewNotification}
                      />
                    </>
                  )}
                </div>
                <div className="movieInfo">
                  <div className="description">
                    <div className="details">
                      <span>{selectedFilm.Year}</span>
                      <span>{selectedFilm.Duration}</span>
                    </div>
                    {selectedFilm.Description}
                  </div>
                  <div className="detailedInfo">
                    Genre:
                    <span className="deets">{selectedFilm.Genre}</span>
                    <br />
                    Actors:
                    <span className="deets">{selectedFilm.Actors}</span>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
