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
			<div className="row justify-content-center pt-2 pb-2">
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
                {
                    showWeather && (
                        <div>
                            <p>{weatherDetail.temperature}</p>
                            <p>{weatherDetail.wind}</p> 
                            <p>{weatherDetail.description}</p>
                            <h3>Forecast for next 3 days</h3>
                            <p>{weatherDetail.forecast[0].temperature}</p>
                            <p>{weatherDetail.forecast[0].wind}</p>                           
                        </div>
                    )
                }
			</div>
		</div>
	);
}

export default Display;