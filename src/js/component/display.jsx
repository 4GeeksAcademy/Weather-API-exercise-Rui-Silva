import React, {useState, useEffect} from "react";

const Display = () => {

	const [city, setCity] = useState('');
    const [weatherDetail, setWeatherDetail] = useState({});
    const [showWeather, setShowWeather] = useState(false); // this is a flag
	
    const handleChange = (e) => {
        setCity(e.target.value);
      };

    const handleSubmit = (e) => {
		if (e.key === "Enter" && city != "") {
			fetchCities()
			setCity('')
		}
	}

	const fetchCities = () => {
		fetch(`https://goweather.herokuapp.com/weather/${city}`)
		.then(response => {
			if(!response.ok) throw Error(response);
			else return response.json()
		})
		.then(result => {
            setWeatherDetail(result);
            setShowWeather(true);
		})
		.catch(error => {
			console.log(error);
		})
	}

	return (
		<div>
			<div class="bg"></div>
			<div class="bg bg2"></div>
			<div class="bg bg3"></div>
			<div class="content">
				<div className="row justify-content-center pt-2 pb-2 mb-2">
					<div className="col-6">
						<input 
							class="form-control" 
							type="text" 
							placeholder="search for a city" 
							value={city}
							onChange={handleChange}
							onKeyDown={handleSubmit}
						></input>
					</div>
				</div>
				<div>
					{showWeather && (
							<div>
								<div className="container text-center mt-5">
									<div className="row justify-content-md-center">
										<div className="col-4">
											<h6>CURRENT WEATHER</h6>
											<div>
												<span>
													{(() => {
														let tag;
														if (weatherDetail.description === "Partly cloudy") tag = <div><i class="fa-solid fa-cloud-sun icon"></i><p>Partly cloudy</p></div>;
														else if (weatherDetail.description === "Light rain") tag = <div><i class="fas fa-cloud-rain icon"></i><p>Light rain</p></div>;
														else if (weatherDetail.description === "Light rain shower") tag = <div><i class="fas fa-cloud-sun-rain icon"></i><p>Light rain shower</p></div>;
														else if (weatherDetail.description === "Patchy rain possible") tag = <div><i class="fas fa-poo-storm icon"></i><p>Patchy rain possible</p></div>;
														else if (weatherDetail.description === "Rain with thunderstorm, heavy rain with thunderstorm") tag = <div><i class="fas fa-umbrella icon"></i><p>Rain with thunderstorm, heavy rain with thunderstorm</p></div>;
														else if (weatherDetail.description === "Heavy rain with thunderstorm") tag = <div><i class="fas fa-umbrella icon"></i><p>Heavy rain with thunderstorm</p></div>;
														else if (weatherDetail.description === "Rain with thunderstorm") tag = <div><i class="fa-solid fa-poo-storm icon"></i><p>Rain with thunderstorm</p></div>;
														else if (weatherDetail.description === "Shower in vacinity, rain shower") tag = <div><i class="fa-solid fa-cloud-showers-water icon"></i><p>Shower in vacinity, rain shower</p></div>;
														else if (weatherDetail.description === "Sunny") tag = <div><i class="fas fa-sun icon"></i><p>Sunny</p></div>;
														else if (weatherDetail.description === "Clear") tag = <div><i class="fas fa-sun icon"></i><p>Clear</p></div>;
														else tag = weatherDetail.description
														return tag;
													})()}
												</span>
											</div>
										</div>
										<div className="col-3">
											<h6>TEMPERATURE</h6>
											<div>
												<span>
													<div>
														<i class="fa-solid fa-temperature-half icon"></i>
														{<p>{weatherDetail.temperature}</p>}
													</div>
													
												</span>
											</div>
										</div>
										<div className="col-2">
											<h6>WIND</h6>
											<div>
												<span>
													<div>
														<i class="fas fa-wind icon"></i>
														{<p>{weatherDetail.wind}</p>}
													</div>
												</span>
											</div>
										</div>
									</div>
								</div>                   
							</div>
						)
					}
				</div>
			</div>
		</div>
	);
}

export default Display;