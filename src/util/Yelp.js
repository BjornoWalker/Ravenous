const apiKey =
	"2_XOs_-q5kmZCanPOH9wmXR-2y1Yr1QDJQSEq-7jjwyRrzFShnyle4ITxTpASy7T1TuNB2l2JUpPEX3OTji3OQm4IBfkbaP92o1fL8QV6FMLzZx3TkIjaxOhFwslXXYx";

const Yelp = {
	searchYelp(term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{ headers: { Authorization: `Bearer ${apiKey}` } }
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map((business) => {
						console.log(business);
						return {
							id          : business.id,
							imageSrc    : business.image_url,
							name        : business.name,
							address     : business.location.address1,
							city        : business.location.city,
							state       : business.location.state,
							zipCode     : business.location.zip_code,
							category    : business.categories[0].title,
							rating      : business.rating,
							reviewCount : business.review_count
						};
					});
				}
			});
	}
};

export default Yelp;
