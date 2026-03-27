const url = 'https://api.freepik.com/v1/icons?order=relevance';
const Icon_API_KEY = process.env.ICON_API_KEY;
const options = {method: 'GET', headers: {'x-freepik-api-key': Icon_API_KEY!}};

export default async function getData(){
    const res =  await fetch(url, options);
    if(!res.ok){
        throw new Error(`Failed, response returned: ${res.status}`);
    }
    return await res.json();
}
