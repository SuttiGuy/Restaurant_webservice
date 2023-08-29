const showdetail = async () => {
    const url = new URL(document.location).searchParams;
    const id = url.get("id");
    console.log(id);
    if (id){
        try {
            const link = "http://localhost:4000/restaurant/"; 
            console.log(link + id);
            const Menu = await fetch(link + id ,{
                method: "GET",
                mode: "cors",
                casche: "no-cash",
                credentials: "same-origin",
                headers: {"Content-Type": "application/json",},
            }) .then((response) => response.json());
            console.log(Menu);
            document.getElementById("name").value = Menu.name;
            document.getElementById("type").value = Menu.type;
            document.getElementById("img").value = Menu.img;
        }catch (error){
            alert(`Menu id${id} isnot found`);
        }
    }else {
        alert(`Menu id is missing`);
    }
};



const editRestaurant = async () => {
   const id = document.getElementById("id").value;
    if (id) {
        const params = {
            //id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            img: document.getElementById("img").value,
        };
        const restaurant = await fetch("http://localhost:4000/restaurant/" + id,
            {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            }
        ).then((response) => {
            return response.json();
        }).then((restaurant) => {
            alert(`order:${id} New Restaurant `);
            location.replace("index.html");
        });
    }
    else {
        //alert(`edit faill`);
    }
}

