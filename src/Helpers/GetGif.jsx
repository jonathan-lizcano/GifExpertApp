
export const GetGIf = async(category) =>{

    const url = `http://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=HvLCZTu4FgEIsr9A05YPOhvPkaRT0Yja`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const Gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        } 
    })

    return Gifs;
    
}