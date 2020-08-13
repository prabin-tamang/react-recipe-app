import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<>
			<div className="card">
				<img src={image} alt="recipe" />
				<h3>{title}</h3>
				<p>
					<strong>Calories :</strong> {calories}
				</p>
				<ul>
					{ingredients.map((ingredient, num) => {
						return <li key={num}>{ingredient.text}</li>;
					})}
				</ul>
			</div>
		</>
	);
};

export default Recipe;
