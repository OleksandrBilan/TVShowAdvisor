import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { useState, useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopularTVShows() {
    const popularTVShows = await TVShowAPI.fetchPopulars();

    if (popularTVShows.length > 0) {
      setCurrentTVShow(popularTVShows[0]);
    }
  }

  useEffect(() => {
    fetchPopularTVShows();
  }, []);

  const backgroundImage = currentTVShow
    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
    : "black";

  return (
    <div className={s.main_container} style={{ background: backgroundImage }}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>TV show details</div>
      <div className={s.recommended_tv_shows}>Recommended TV shows</div>
    </div>
  );
}
