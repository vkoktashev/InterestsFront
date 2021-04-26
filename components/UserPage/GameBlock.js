import React from "react";
import ItemBlock from "./ItemsBlock/ItemBlock";

function GameBlock({ games }) {
	return (
		<ItemBlock
			items={games?.map((game) => {
				return {
					link: window.location.origin + "/game/" + game.game.rawg_slug,
					name: game.game.rawg_name,
					status: game.status,
					score: game.score,
					review: game.review,
					spent_time: parseFloat(game.spent_time),
					poster: game.game.rawg_backdrop_path,
				};
			})}
			statuses={["Буду играть", "Играю", "Дропнул", "Прошел"]}
			fields={["score", "spent_time"]}
		/>
	);
}

export default GameBlock;
