const addResto = async () =>{
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const img = document.getElementById("img").value;
console.log("HI");
    if (name && type && img){
        //call api
        const param = {
            name: name,
            type: type,
            img: img,
        }
        try {
            const restaurant = await fetch("http://localhost:4000/restaurant", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(param),
            }).then((response) => {
                return response.json();
            }).then((restaurant) => { 
                alert("New restaurant id "+restaurant.id+ " is created")
            });
        } catch (error) {
            alert("cannot add new restaurant")
        }
    }
    else{
        alert("All fields are requied !!")
    }
}