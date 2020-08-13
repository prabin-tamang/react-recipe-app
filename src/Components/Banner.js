import React from 'react';
import Nav from './Nav';

const Form = ({ onSubmit, value, onChange }) => {
	return (
		<header>
			<Nav />
			<header className="search">
				<h1 className="search__heading">
					Find the best free recipes shared by talented creators.
				</h1>
				<form className="search__form" onSubmit={onSubmit}>
					<label>Find a recipe: </label>
					<input
						className="search__input"
						type="text"
						autoComplete="off"
						value={value}
						onChange={onChange}
					/>
					<button className="search__btn" type="submit">
						Find Recipe
					</button>
					<small>Example: "Pizza"</small>
				</form>
			</header>
		</header>
	);
};

export default Form;
