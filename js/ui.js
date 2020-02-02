class UI{
    constructor(){
        // app initialization
        this.init();//method call init
    }
    // method when the app start
    // init method declation
    init(){
        // display category in select option
        this.printCategories()
        this.result = document.getElementById('result');
       
    }
    //display events from api
    displayEvents(events){
        console.log(events);
        // integration of events to the UI
        let HTMLTemplate = '';

        //loop events and print
        // <p>${eventInfo.description.text}...<p><p class="lead text-info">Event Information: </p>
        events.forEach(eventInfo => {
            HTMLTemplate +=`
            <div class="col-md-4 mt-3">
                <div class="card">
                    <div class="card-body">
                        <img class="img-fluid" src="${eventInfo.logo !== null ? eventInfo.logo.url: ''}" alt="${eventInfo.name.text}">
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h2 class="text-left card-title event-title">${eventInfo.name.text}</h2>
                            

                            <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                            <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>
                            <a href="${eventInfo.url}" target="_black" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        })
        this.result.innerHTML = HTMLTemplate;
    }
    // print categories
    printCategories(){
        const categoriesList = eventbrite.getCategoriesAPI()
        .then(categories => {
            var categoriesLists = categories.categories.categories;
            var categorySelect = document.querySelector('#category');

            // this for creating options in select element
            categoriesLists.forEach((category) => {
                let optionElement = document.createElement('option');
                optionElement.value = category.id;
                optionElement.appendChild(document.createTextNode(category.name_localized));
                categorySelect.appendChild(optionElement);
            });
            //console.log(categoriesLists);
        })
        .catch(error => console.log(error));
    }
    printMessage(message,className){
        const searchUnsuccessfulMessage = document.createElement('div');
        const searchDiv = document.querySelector('#search-events');

        searchUnsuccessfulMessage.className = className;
        searchUnsuccessfulMessage.appendChild(document.createTextNode(message));
        
        searchDiv.appendChild(searchUnsuccessfulMessage);
        setTimeout(()=>{
            this.removeMessage();
        },3000)
    }
    removeMessage(){
        const alertRemove = document.querySelector('.alert');
        if(alertRemove){
            alertRemove.remove();
        }
    }
    
  
}