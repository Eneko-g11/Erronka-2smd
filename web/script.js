
document.getElementById("formularioa").addEventListener("submit", function (event) {
    event.preventDefault();

   
    const izena = document.getElementById("izena").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefonoa = document.getElementById("telefonoa").value.trim();
    const postaKodea = document.getElementById("posta-kodea").value.trim();
    const mezua = document.getElementById("mezua").value.trim();
    const privacidad = document.getElementById("privacidad").checked;
    // zalantzak
    const zalantza = document.getElementById("zalantza").checked;
    const iradokizuna = document.getElementById("iradokizuna").checked;
    const kexa = document.getElementById("kexa").checked;
    const beste = document.getElementById("beste").checked;


    
    let erroreak = 0;

    
    if (email.includes("@") && email.includes(".")) {
        
    } else {
        alert("Posta elektronikoak @ eta . izan behar ditu");
        erroreak = erroreak + 1;
    }

    if (telefonoa.length === 9) {
        
    } else {
        alert("Telefonoak 9 zenbaki izan behar ditu");
        erroreak = erroreak + 1;
    }

    if (postaKodea.length === 5) {
       
    } else {
        alert("Posta-kodeak 5 zenbaki izan behar ditu");
        erroreak = erroreak + 1;
    }

    if (mezua.length >= 30) {
       
    } else {
        alert("Mezuak gutxienez 30 karaktere izan behar ditu");
        erroreak = erroreak + 1;
    }

    if (zalantza || iradokizuna || kexa || beste) {
      
    } else {
        alert("Mezu mota bat aukeratu behar duzu");
        erroreak = erroreak + 1;
    }

    if (privacidad) {
       
    } else {
        alert("Datuen babesa onartu behar duzu");
        erroreak = erroreak + 1;
    }


    if (erroreak === 0) {
        let orduak = 0;
        let mezuMotaTestua = "";

        if (zalantza) {
            orduak = 24;
            mezuMotaTestua = "Zalantza";
        } else if (iradokizuna) {
            orduak = 72;
            mezuMotaTestua = "Iradokizuna";
        } else if (kexa) {
            orduak = 12;
            mezuMotaTestua = "Kexa";
        } else if (beste) {
            orduak = 48;
            mezuMotaTestua = "Beste batzuk";
        }

        const gaur = new Date();
        const eguna = gaur.getDay();
        const ordua = gaur.getHours();

        if (eguna === 0 || eguna === 6) {
            orduak = orduak + 12;
        } else {
            if (ordua >= 18) {
                orduak = orduak + 8;
            }
        }

        alert(
            "Datuak ondo bidali dira!\n" +
            "Izena: " + izena + "\n" +
            "Email: " + email + "\n" +
            "Telefonoa: " + telefonoa + "\n" +
            "Posta-kodea: " + postaKodea + "\n" +
            "Mezu mota: " + mezuMotaTestua + "\n" +
            "Mezua: " + mezua + "\n" +
            "Erantzun-denbora: " + orduak + " ordu"
        );

        // Tras validar, deja que el formulario GET actualice la URL.
        event.currentTarget.submit();
    }
});
