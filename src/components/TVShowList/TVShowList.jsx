import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShows }) {
  return (
    <div>
      <div className={s.title}>You'll probably like:</div>
      <div className={s.list}>
        {tvShows.map((tvShow) => (
          <span className={s.tv_show_item} key={tvShow.id}>
            <TVShowListItem tvShow={tvShow} onClick={() => {}} />
          </span>
        ))}
      </div>
    </div>
  );
}
