import React from "react";
import { Badge } from "reactstrap";

export default function AnimeGenres({ anime }) {
	return (
		<div>
			{anime.genres.map((gener, i) => {
				return (
					<Badge className="bg-secondary m-1" key={i}>
						{gener}
					</Badge>
				);
			})}
		</div>
	);
}
