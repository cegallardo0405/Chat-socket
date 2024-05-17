export default async function getFakeName(){
    
    const headers = new Headers({"X-API-KEY": process.env.API_KEY});

    // The API returns a list of one string so we get the element
    const response = await (await fetch(`https://randommer.io/api/Name?nameType=firstname&quantity=1`, 
    {headers})).json();

    return response[0];
}
