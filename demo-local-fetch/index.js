                                // There are four type of API Get or fetch data "Pulling whole data from server" Post"sending data hide in body" Pull Del

async function fetchData(){

    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')

    console.log("response", response)    // Origin value from link

    const data = await response.json();
    
    console.log("Data",data);     // We convert it in json
}


async function postData(){

    const response = await fetch ('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'My Info',
            body: 'Data',
            userId: 4
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    console.log("response", response)    // Origin value from link

    const data = await response.json();
    
    console.log("Data",data);     // We convert it in json
}

fetchData();
postData();