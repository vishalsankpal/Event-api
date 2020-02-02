class EventBrite {
    // Constructor when instanciate
    constructor() {
        this.auth_token = '2LSZIBROSZYZHUJVLOZA';
        this.orderBy = 'date';
        
    }
    // get the events from eventbrite api

    async queryAPI(eventName,optionType){
        // const eventListResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?sort_by=${this.orderBy}&location.within=500km&location.latitude=${lat}&location.longitude=${log}&categories=${optionType}&token=${this.auth_token}`)
        const eventListResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&categories=${optionType}&token=${this.auth_token}`);
        // wait for response and return result in json format
        const eventListInJson = await eventListResponse.json();
        console.log(eventListInJson);
        return {
            eventListInJson
        }
        
    }

    // get categories from api and for asynchoronus we used async

    // The await operator is used to wait for a Promise. It can be used inside an Async block only. 
    // The keyword Await makes JavaScript wait until the promise returns a result. 
    // It has to be noted that it only makes the async function block wait and not the whole program execution.
    async getCategoriesAPI() {
        // quary the api
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        // hold for the response and return result in json format

        const categories = await categoriesResponse.json();
        return {
            categories
        }
    }
}