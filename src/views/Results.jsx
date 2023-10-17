import React from "react";
import BackHomeButton from "./BackHome";

function Results({ results }) {
	return (
		<div className="w-ful md:w-1/2 text-xs md:text-md text-center text-primary mx-auto">
			<BackHomeButton />

			<div className="card bg-red-300 w-full h-min">
				<div className="card-body text-red-500 text-center text-xs md:text-sm font-sans font-extralight">
					The maximum recommended daily amount of sugar is 30g for adults
				</div>
			</div>
			<table className="table table-zebra-zebra font-sans text-center">
				<thead>
					<tr className="text-secondary text-xl md:text-2xl bg-slate-800">
						<th className="px-2 md:px-4 py-1 md:py-2">Nutrient</th>
						<th className="px-2 md:px-4 py-1 md:py-2">Quantity</th>
						<th className="px-2 md:px-4 py-1 md:py-2">Unit</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(results.totalNutrients).map(([key, value]) => (
						<tr key={key}>
							<td className="text-sm md:text-lg text-primary-focus px-2 md:px-4 py-1 md:py-2">
								{value.label}
							</td>
							<td className="text-sm md:text-lg text-secondary px-2 md:px-4 py-1 md:py-2">
								{value.quantity.toFixed(2)}
							</td>
							<td className="text-sm md:text-lg text-secondary px-2 md:px-4 py-1 md:py-2">
								{value.unit}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Results;
