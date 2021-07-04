import React from "react";
import { useHistory } from "react-router-dom";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaEyeSlash, FaEye } from "react-icons/fa";
import "./episode-row.sass";

function DetailedEpisodeRow({ episode, showID, seasonNumber, setShowEpisodeUserStatus, loggedIn }) {
	let history = useHistory();

	function parseDate(date) {
		let newDate = new Date(date);
		return newDate.toLocaleDateString("ru-RU");
	}

	return (
		<div className='episode-row'>
			<p className='episode-row__date'>{parseDate(episode.tmdb_release_date)}</p>
			<div hidden={!loggedIn} className='episode-row__rate'>
				<Rating
					start={-1}
					stop={10}
					emptySymbol={[<FaEyeSlash />].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <FaRegStar />))}
					fullSymbol={[<FaEye />].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <FaStar title={n} />))}
					readonly={!loggedIn}
					initialRating={-1}
					onChange={(score) => {
						setShowEpisodeUserStatus(
							{
								episodes: [
									{
										tmdb_id: episode.tmdb_id,
										score: score,
									},
								],
							},
							showID
						);
					}}
				/>
			</div>
			<a
				className='episode-row__name'
				href={window.location.origin + "/show/" + showID + "/season/" + seasonNumber + "/episode/" + episode.tmdb_episode_number}
				onClick={(e) => {
					history.push("/show/" + showID + "/season/" + seasonNumber + "/episode/" + episode.tmdb_episode_number);
					e.preventDefault();
				}}
				title={episode.tmdb_name}>
				Серия {episode.tmdb_episode_number} - {episode.tmdb_name}
			</a>
		</div>
	);
}

export default DetailedEpisodeRow;
