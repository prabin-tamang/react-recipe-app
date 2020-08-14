import React from 'react';

const Recipe = ({ title, calories, image, ingredients, loading }) => {
	return loading ? (
		<div>loading..</div>
	) : (
		<>
			<div className="card">
				<img src={image} alt="recipe" />
				<h3 className="card__title">{title}</h3>
				<p>
					<strong>Calories :</strong> {calories}
				</p>
				<h4>Ingredients:</h4>
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
