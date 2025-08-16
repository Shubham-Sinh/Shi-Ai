const searchBox = document.getElementById("search-box");
const noResults = document.getElementById("no-results");

function home() {
    document.getElementById(`btn home`);
    console.log("helo");
}
// _functioning.js

document.addEventListener("DOMContentLoaded", function () {
    // ===== Destination Card Redirects =====
    const cardMappings = {
        "Delhi": "https://tourism.delhi.gov.in/",
        "Rajgir": "https://rajgirsafari.bihar.gov.in/",
        "Sasaram": "https://incredibleindia.gov.in/en/destinations/bihar/sasaram.html",
        "Paris": "https://en.parisinfo.com/",
        "Singapore": "https://www.visitsingapore.com/",
        "Dubai": "https://www.visitdubai.com/"
    };

    document.querySelectorAll('.inside-card, .outside-card').forEach(card => {
        const id = card.getAttribute('data-id');
        const url = cardMappings[id];
        if (url) {
            card.style.cursor = "pointer";
            card.addEventListener('click', () => window.location.href = url);
        }
    });

    // Vacation Card Redirects with improved destinations
const vacationMappings = {
    "Beach Escape": "https://www.tulum.com/",         // Tulum, Mexico example
    "Mountain Adventure": "https://mountainplanet.com/", // Mountain Planet global adventures :contentReference[oaicite:6]{index=6}
    "City Exploration": "https://www.spottedbylocals.com/", // Local city guides :contentReference[oaicite:7]{index=7}
    "Desert Safari": "https://www.atlasobscura.com/",  // Offbeat travel inspiration :contentReference[oaicite:8]{index=8}
    "Cruise Voyage": "https://www.cruise.com/",        // Cruise booking
    "Wildlife Safari": "https://www.visitsrilanka.com/en/inspiration/south-coast", // Sri Lanka safari rise :contentReference[oaicite:9]{index=9}
    "Snow Gateway": "https://www.mercator-travel.com/worlds-best-beaches-for-your-summer-escape/", // Winter escapes like Whitehaven :contentReference[oaicite:10]{index=10}
};

document.querySelectorAll('.vacation-card').forEach(card => {
    const title = card.querySelector("h3").innerText.trim();
    const url = vacationMappings[title];
    if (url) {
        card.style.cursor = "pointer";
        card.addEventListener('click', () => window.open(url, "_blank"));
    }
});


 
    // ===== Header Buttons =====
    window.home = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.AboutUs = function () {
        const footer = document.querySelector(".site-footer");
        footer.scrollIntoView({ behavior: "smooth" });

        const links = footer.querySelectorAll("a");
        links.forEach(link => link.classList.add("highlight"));
        setTimeout(() => {
            links.forEach(link => link.classList.remove("highlight"));
        }, 2000);
    };

    window.Login = function () {
        const username = prompt("Enter your username:");
        const password = prompt("Enter your password:");
        if (username && password) {
            alert("✅ Logged in as " + username);
        } else {
            alert("⚠️ Login failed! Please enter both username and password.");
        }
    };

    window.SignUp = function () {
        const username = prompt("Choose a username:");
        const password = prompt("Choose a password:");
        if (username && password) {
            alert("🎉 Welcome " + username + "! You have successfully signed up.");
        } else {
            alert("⚠️ Please fill all details to sign up.");
        }
    };

    // ===== Book Now Button =====
    document.querySelector(".book-btn").addEventListener("click", () => {
        window.open("https://www.makemytrip.com/flight/search?tripType=O&itinerary=DEL-PNQ-21/08/2025&paxType=A-1_C-0_I-0&cabinClass=E&sTime=1755764544848&forwardFlowRequired=true&action=FLTSRCH&intl=false&cmp=SEM%7CD%7CDF%7CB%7CRoute%7CBusiness%7CRoute-SL_Rank_DT%7CDF_Route_Delhi_Pune_Exact%7CDelhi_Pune_Exact%7CRSA&ef_id=:G:s&isSemFlow=true", "_blank");
    });

  

    // ===== Search Functionality =====
    const searchBox = document.getElementById("search-box");
    const noResults = document.getElementById("no-results");

    searchBox.addEventListener("input", function () {
        const query = searchBox.value.toLowerCase();
        noResults.style.display = "none";

        if (query.length === 0) return;

        const bodyText = document.body.innerText.toLowerCase();
        if (bodyText.includes(query)) {
            const element = Array.from(document.querySelectorAll("h2, h3, p")).find(el =>
                el.innerText.toLowerCase().includes(query)
            );
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                element.style.backgroundColor = "yellow";
                setTimeout(() => element.style.backgroundColor = "", 2000);
            }
        } else {
            noResults.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Attach click event to the logo image
    const paneImg = document.querySelector('.right-pane');
    if (paneImg) {
        paneImg.style.cursor = "pointer"; // show clickable hand
        paneImg.addEventListener('click', () => {
            window.open("https://photos.app.goo.gl/pBhT3us6HjpndeaQ8", "_blank");
        });
    }
});
//         -- Student Pass -- //
document.addEventListener("DOMContentLoaded", function () {
    const studentBtn = document.querySelector(".student-pass-note"); // give your button this class
    if (studentBtn) {
        studentBtn.addEventListener("click", () => {
            window.open("https://docs.google.com/forms/d/e/1FAIpQLSdcmtUG_1cH_7ZJl1r4-iGL7wPwk4INld7YIMW9tXG9z8NScQ/viewform?embedded=true", "_blank");
        });
    }
});

    

