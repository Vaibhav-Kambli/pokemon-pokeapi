import React from "react";
import spinner from "../loader.gif";

const Loader = () => {
	return (
		<div className="loader__image">
			<img src={spinner} alt={"spinner"} />
            <h4>Loading please wait...</h4>
		</div>
	);
};

export default Loader;
