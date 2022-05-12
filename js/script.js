let button = document.querySelector(".js-section__button");
let photo = document.querySelector(".js-section__photo");

button.addEventListener("click", () => {
    switch (button.innerText) {
        case "Pokaż Forda.":
            button.innerText = "Pokaż Volvo.";
            photo.src = "https://images.carexpert.com.au/app/uploads/2021/12/2022-Ford-Mustang-GT-California-Special_02-1.jpg";
            photo.alt = "Ford Mustang";
            break;
        case "Pokaż Volvo.":
            button.innerText = "Pokaż Jeep-a.";
            photo.src = "https://i.iplsc.com/volvo-v90-cross-country/0006HQ78RYIP38X0-C122-F4.jpg";
            photo.alt = "Volvo V90 Cross Country";
            break;
        case "Pokaż Jeep-a.":
            button.innerText = "Pokaż Aston Martina.";
            photo.src = "https://www.jeep.com/mediaserver/iris?client=fcaus&market=U&brand=J&vehicle=2022_JL&paint=PAU&fabric=X9&sa=JLXS74%2C2TV%2C29V%2C29V%2CAPA%2CD5%2CDFY%2CDMF%2CECX%2CHT1%2CPAU%2CSDD%2CTXA%2CUAQ%2CWEF%2CX9%2CYEP%2CZ1T&pov=fronthero&width=1024&bkgnd=White&resp=jpg&cut=";
            photo.alt = "Jeep Wrangler Rubicon";
            break;
        case "Pokaż Aston Martina.":
            button.innerText = "Pokaż Forda.";
            photo.src = "https://i.wpimg.pl/730x0/m.autokult.pl/aston-martin-db9-gt-3-81309bf3da.jpg";
            photo.alt = "Aston Martin";
            break;
    }
});