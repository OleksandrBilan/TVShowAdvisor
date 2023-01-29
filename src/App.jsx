import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { useState, useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/Logo";
import logoImage from "./assets/images/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([]);

  async function fetchPopularTVShows() {
    try {
      const popularTVShows = await TVShowAPI.fetchPopulars();

      if (popularTVShows.length > 0) {
        setCurrentTVShow(popularTVShows[0]);
      }
    } catch (error) {
      alert("The error occured while loading the popular TV shows :(");
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendationsList(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert("The error occured while loading the recommendations :(");
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("The error occured while searching the TV show :(");
    }
  }

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  useEffect(() => {
    fetchPopularTVShows();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  const backgroundImage = currentTVShow
    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
    : "black";

  return (
    <div className={s.main_container} style={{ background: backgroundImage }}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logoImage}
              title="TV advisor"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {recommendationsList && (
          <TVShowList
            tvShows={recommendationsList}
            onItemClick={updateCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}
