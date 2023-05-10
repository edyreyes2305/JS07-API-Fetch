const url = "https://reqres.in/api/users?delay=3";
const id1 = document.getElementById("id1");
const id2 = document.getElementById("id2");
const id3 = document.getElementById("id3");
const id4 = document.getElementById("id4");
const id5 = document.getElementById("id5");
const id6 = document.getElementById("id6");
const email1 = document.getElementById("email1");
const email2 = document.getElementById("email2");
const email3 = document.getElementById("email3");
const email4 = document.getElementById("email4");
const email5 = document.getElementById("email5");
const email6 = document.getElementById("email6");
const firstname1 = document.getElementById("firstname1");
const firstname2 = document.getElementById("firstname2");
const firstname3 = document.getElementById("firstname3");
const firstname4 = document.getElementById("firstname4");
const firstname5 = document.getElementById("firstname5");
const firstname6 = document.getElementById("firstname6");
const lastname1 = document.getElementById("lastname1");
const lastname2 = document.getElementById("lastname2");
const lastname3 = document.getElementById("lastname3");
const lastname4 = document.getElementById("lastname4");
const lastname5 = document.getElementById("lastname5");
const lastname6 = document.getElementById("lastname6");
const avatar1 = document.getElementById("avatar1");
const avatar2 = document.getElementById("avatar2");
const avatar3 = document.getElementById("avatar3");
const avatar4 = document.getElementById("avatar4");
const avatar5 = document.getElementById("avatar5");
const avatar6 = document.getElementById("avatar6");
const tabla = document.getElementById("tabla");

let bandera = true;

console.log();
const getData = async (httpUrl) => {
    try {
        const dataJson = await fetch(httpUrl);
        const data = await dataJson.json();
        
        localStorage.setItem("mis-datosguardados", JSON.stringify(data.data));
        for (let dato of data.data)  {
            
            id.innerHTML += dato;
            console.log(dato);
        }
        
    } catch (error) {
        console.log(error);
    }
};

const getLocalStorage = () => {
    if(bandera) {
        let dato = JSON.parse(localStorage.getItem("mis-datosguardados")); 
        for (const i of dato) {
            console.log(i.avatar);
        } 
        id1.innerHTML += dato[0].id;
        id2.innerHTML += dato[1].id;
        id3.innerHTML += dato[2].id;
        id4.innerHTML += dato[3].id;
        id5.innerHTML += dato[4].id;
        id6.innerHTML += dato[5].id;
        
        email1.innerHTML += dato[0].email;
        email2.innerHTML += dato[1].email;
        email3.innerHTML += dato[2].email;
        email4.innerHTML += dato[3].email;
        email5.innerHTML += dato[4].email;
        email6.innerHTML += dato[5].email;
        
        firstname1.innerHTML += dato[0].first_name;
        firstname2.innerHTML += dato[1].first_name;
        firstname3.innerHTML += dato[2].first_name;
        firstname4.innerHTML += dato[3].first_name;
        firstname5.innerHTML += dato[4].first_name;
        firstname6.innerHTML += dato[5].first_name;
    
        lastname1.innerHTML += dato[0].last_name;
        lastname2.innerHTML += dato[1].last_name;
        lastname3.innerHTML += dato[2].last_name;
        lastname4.innerHTML += dato[3].last_name;
        lastname5.innerHTML += dato[4].last_name;
        lastname6.innerHTML += dato[5].last_name;
        
        avatar1.src = dato[0].avatar;
        avatar2.src = dato[1].avatar;
        avatar3.src = dato[2].avatar;
        avatar4.src = dato[3].avatar;
        avatar5.src = dato[4].avatar;
        avatar6.src = dato[5].avatar;

        bandera = false;
    }
    
    /* for (let i = 0; i < 6; i++) {
        const element = array[i];
        
    } */
    

}
getData(url);