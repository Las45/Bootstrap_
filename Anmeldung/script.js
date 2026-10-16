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

    document.getElementById("ausgabe").textContent=
    "Anmeldung gespeichert";
}
 