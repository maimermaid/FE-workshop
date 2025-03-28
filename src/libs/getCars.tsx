export default async function getCars() {

    await new Promise((resolve)=>setTimeout(resolve, 5000))
    const response = await fetch ("http://localhost:5003/api/v1/cars", {next: {tags:['cars']}})
    if(!response.ok){
        throw new Error("Failed to fetch cars")
    }
    return await response.json()
}