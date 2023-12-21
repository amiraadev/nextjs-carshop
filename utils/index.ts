
export async function fetchCars(){
    const headers= {
		'X-RapidAPI-Key': '4f48234779mshba651b94dcdf414p11d10ejsnd521660ee30c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers});
    const result = await response.json()
    return result

}