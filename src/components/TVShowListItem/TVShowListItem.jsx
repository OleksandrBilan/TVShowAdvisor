import s from "./style.module.css";
import { SMALL_IMAGE_COVER_BASE_URL } from "../../config";

const MAX_TITLE_LENGTH = 33;

export function TVShowListItem({ tvShow, onClick }) {
  function onClick_() {
    onClick(tvShow);
  }

  return (
    <div className={s.container} onClick={onClick_}>
      <img
        className={s.image}
        alt={tvShow.name}
        src={`${SMALL_IMAGE_COVER_BASE_URL}${tvShow.backdrop_path}`}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_LENGTH
          ? tvShow.name.slice(0, MAX_TITLE_LENGTH) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
