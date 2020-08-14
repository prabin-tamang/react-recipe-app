import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Components/Recipe';
import Banner from './Components/Banner';

const Home = () => {
	// api key details
	const API_KEY = '3f7bdc54552311e0c1de4c081bab69b0';
	const API_ID = '66efc780';

	const [recipes, setRecipes] = useState([]);
	// get input values
	const [search, setSearch] = useState('');
	// search query sets to whatever user puts the value on input
	const [query, setQuery] = useState('');

	useEffect(() => {
		const fetchRecipes = async () => {
			const response = await axios.get(
				`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
			);
			// console.log(response.data.hits);
			setRecipes(response.data.hits);
		};
		fetchRecipes();
	}, [query]);

	//  form submits
	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div>
			<Banner
				onSubmit={getSearch}
				value={search}
				onChange={e => {
					setSearch(e.target.value);
				}}
			/>
			<div className="recipes" id="cardrecipe">
				{recipes.map(recipe => {
					return (
						<Recipe
							key={recipe.recipe.source}
							title={recipe.recipe.label}
							calories={recipe.recipe.calories}
							image={recipe.recipe.image}
							ingredients={recipe.recipe.ingredients}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
