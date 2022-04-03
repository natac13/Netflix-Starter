import React from "react";
import "./Home.css";
import { Logo } from "../images/Netflix.js";
import { Button, ConnectButton, Icon, Modal, Tab, TabList } from "web3uikit";
import { movies } from "../helpers/library";
import { Link } from "react-router-dom";

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedFilm, setSelectedFilm] = React.useState();

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
                <Button
                  icon="chevronRightX2"
                  text="Play"
                  theme="secondary"
                  type="button"
                />
                <Button
                  icon="plus"
                  text="Add to My List"
                  theme="translucent"
                  type="button"
                  onClick={() => {
                    // console.log(myMovies);
                  }}
                />
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
          <Tab tabKey={3} tabName={"MyList"}></Tab>
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
                    onClick={() => {
                      // console.log(myMovies);
                    }}
                  />
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
