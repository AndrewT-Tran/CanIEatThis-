import React from "react";

const NutritionTable = ({ results }) => {
	const nutrients = [
		{
			name: "Calories",
			unit: "kcal",
			quantity: results?.totalNutrients?.ENERC_KCAL?.quantity,
		},
		{
			name: "Fat",
			unit: "g",
			quantity: results?.totalNutrients?.FAT?.quantity,
		},
		{
			name: "Carbs",
			unit: "g",
			quantity: results?.totalNutrients?.CHOCDF?.quantity,
		},
		{
			name: "Protein",
			unit: "g",
			quantity: results?.totalNutrients?.PROCNT?.quantity,
		},
		{
			name: "Sugar",
			unit: "g",
			quantity: results?.totalNutrients?.SUGAR?.quantity,
		},
		{
			name: "Cholesterol",
			unit: "mg",
			quantity: results?.totalNutrients?.CHOLE?.quantity,
		},
		{
			name: "Saturated Fat",
			unit: "g",
			quantity: results?.totalNutrients?.FASAT?.quantity,
		},
		{
			name: "Trans Fat",
			unit: "g",
			quantity: results?.totalNutrients?.FATRN?.quantity,
		},
	];

	return (
		<table className="table-auto table hover text-center font-sans">
			<thead className="text-2xl text-primary-focus"></thead>
			<tbody className="text-xl font-lighttext-secondary-focus">
				{nutrients.map((nutrient) => (
					<tr key={nutrient.name}>
						<thead className="text-2xl text-primary-focus">
							<td>{nutrient.name}</td>
						</thead>
						{nutrient.quantity !== undefined ? (
							<>
								<td className="text-neutral-300">
									{nutrient.quantity.toFixed(2)}
								</td>
								<td className="text-secondary">{nutrient.unit}</td>
							</>
						) : (
							<>
								<td className="text-neutral-300">NA</td>
								<td className="text-secondary">NA</td>
							</>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NutritionTable;
