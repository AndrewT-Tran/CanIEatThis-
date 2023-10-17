import React from "react";

const NutritionTable = ({ results }) => {
	const nutrients = [
		{
			name: "Calories",
			unit: "kcal",
			quantity: results?.totalNutrients?.ENERC_KCAL?.quantity
		},
		{
			name: "Fat",
			unit: "g",
			quantity: results?.totalNutrients?.FAT?.quantity
		},
		{
			name: "Carbs",
			unit: "g",
			quantity: results?.totalNutrients?.CHOCDF?.quantity
		},
		{
			name: "Protein",
			unit: "g",
			quantity: results?.totalNutrients?.PROCNT?.quantity
		},
		{
			name: "Sugar",
			unit: "g",
			quantity: results?.totalNutrients?.SUGAR?.quantity
		},
		{
			name: "Cholesterol",
			unit: "mg",
			quantity: results?.totalNutrients?.CHOLE?.quantity
		},
		{
			name: "Saturated Fat",
			unit: "g",
			quantity: results?.totalNutrients?.FASAT?.quantity
		},
		{
			name: "Trans Fat",
			unit: "g",
			quantity: results?.totalNutrients?.FATRN?.quantity
		}
	];

	return (
		<table className="table-auto table hover text-center font-sans">
			<thead className="text-2xl text-primary">
				<tr>
					<th>Nutrient</th>
					<th>Quantity</th>
					<th>Unit</th>
				</tr>
			</thead>
			<tbody className="text-xl font-light text-secondary">
				{nutrients.map((nutrient) => (
					<tr key={nutrient.name}>
						<td className="text-white text-2xl">{nutrient.name}</td>
						{nutrient.quantity !== undefined ? (
							<>
								<td className="text-neutral-300">
									{nutrient.quantity.toFixed(0)}
								</td>
								<td className="text-slate-200 font-bold">{nutrient.unit}</td>
							</>
						) : (
							<>
								<td className="text-neutral-300">NA</td>
								<td className="text-slate-200 font-semibold">NA</td>
							</>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NutritionTable;
