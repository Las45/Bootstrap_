function speichern(){
    let vorname = document.getElementById("vorname").value;
    let anmeldung = {
        vorname: vorname,
        event: "Rock Festival",
        tickets: 2
    };

    localStorage.setItem(
        "anmeldung", JSON.stringify(anmeldung)
    )

    document.getElementById("output").textContent=
    "Anmeldung gespeichert";
}

function laden(){
    let content = JSON.parse(localStorage.getItem("anmeldung")) 
    document.getElementById("output").textContent = `Name: ${content.vorname}, Event: ${content.event}, Tickets: ${content.tickets}`;

}

function loeschen(){
    localStorage.removeItem("anmeldung")
    document.getElementById("output").textContent = ""
}