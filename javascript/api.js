const Api = (
    async () => {
    const recebeAPI = await fetch('https://635188aadfe45bbd55c2cc8c.mockapi.io/pessoas');
    const recebeApiJson = await recebeAPI.json();
    return recebeApiJson;

})()

export default Api;