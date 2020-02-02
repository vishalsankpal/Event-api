// instanciate both class
const eventbrite = new EventBrite();
const ui = new UI();

// event on submit button
document.querySelector('#submitBtn').addEventListener('click',function (e){
    // prevent defult is use to display data without refreshing page
    e.preventDefault();

    const eventName = document.querySelector('#event-name').value;
    const optionType = document.querySelector('#category').value;


    if(eventName !== ''){
        // QUERY EVENT BRITE API
        // console.log('success');
        eventbrite.queryAPI(eventName,optionType)
            .then((eventListInJson) => {
                //console.log(eventListInJson.eventListInJson.events);
                const eventList = eventListInJson.eventListInJson.events;
                if(eventList.length > 0){
                    ui.displayEvents(eventList);
                }else{
                    //console.log('there is no event');
                    ui.printMessage('No Result Found','text-center alert alert-danger mt-4');
                }
            })
    }
    else{
        // print a message
        ui.printMessage('Add an Event name or City name','text-center alert alert-danger mt-4');
    }
    //console.log(`${eventName}:${optionType}`)
    
})
