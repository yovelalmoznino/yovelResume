const PAGES = ["aboutMe", "army", "exprience", "studies", "volunteering"];
let activePage = "aboutMe";
window.addEventListener("load", () => {
    screen.orientation.addEventListener("change", function (e) {
        document.styleSheets[0].href = "./main.css";
        if ((screen.orientation.type == "portrait-primary") || (screen.orientation.type == "landscape-primary" && window.innerWidth <= 600)) {
            document.getElementById("contactBtn").style.visibility = "visible";
        } else {
            document.getElementById("contactBtn").style.visibility = "hidden";
        }
        if((activePage === "exprience" || activePage === "volunteering") && (window.innerWidth >= 600 && window.innerWidth <= 992) && screen.orientation.type == "landscape-primary"){
            document.getElementById("body").style.overflowY = "scroll";
        } else {
            document.getElementById("body").style.overflow = "hidden";
        }
        window.scrollTo(0, 0);
    });
    window.addEventListener("resize", ()=>{
        if(window.innerWidth >= 992){
            document.getElementById("body").style.overflow = "hidden";
        }
        if(window.innerWidth <= 600){
            document.getElementById("contactBtn").style.visibility = "visible";
        } else {
            document.getElementById("contactBtn").style.visibility = "hidden";
        }
        window.scrollTo(0, 0);
    });
    loading();
    navBarInit();
    contactInfoInit();
    initDegreesClick();
    initCloseBtn();
});

let loading = () => {
    let counter = 0;
    let timer = setInterval(() => {
        document.getElementById("loadingBar").innerText += ".";
        counter++;
        if (counter === 5) {
            clearInterval(timer);
            document.getElementById("loadingScreen").style.display = "none";
            document.getElementById("nav-bar").style.visibility = "visible";
            document.getElementById("contactInfo").style.visibility = "visible";
            if ((screen.orientation.type == "portrait-primary") || (screen.orientation.type == "landscape-primary" && window.innerWidth <= 600)) {
                document.getElementById("contactBtn").style.visibility = "visible";
            }
            document.getElementById(`${activePage}Page`).style.visibility = "visible";
        }
    }, 1000);
}

let navBarInit = () => {
    for (let i = 0; i < PAGES.length; i++) {
        document.getElementById(`${PAGES[i]}`).addEventListener("click", pageSelected);
    }
}

let pageSelected = (e) => {
    document.getElementById(`${activePage}Page`).style.visibility = "hidden";
    document.getElementById(activePage).classList.remove("activePage");
    activePage = e.target.id;
    document.getElementById(activePage).classList.add("activePage");
    document.getElementById(`${activePage}Page`).style.visibility = "visible";
    if((activePage === "exprience" || activePage === "volunteering") && (window.innerWidth >= 600 && window.innerWidth <= 992) && screen.orientation.type == "landscape-primary"){
        document.getElementById("body").style.overflowY = "scroll";
    } else {
        document.getElementById("body").style.overflow = "hidden";
        window.scrollTo(0, 0);
    }
}

let contactInfoInit = () => {
    document.getElementById("mail").addEventListener("click", () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=y.almoznino23@gmail.com", "_blank");
    });
    document.getElementById("phoneNumber").addEventListener("click", () => {
        window.open("https://wa.me/+972508582003", "_blank");
    });
    document.getElementById("mailModal").addEventListener("click", () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=y.almoznino23@gmail.com", "_blank");
    });
    document.getElementById("phoneNumberModal").addEventListener("click", () => {
        window.open("https://wa.me/+972508582003", "_blank");
    });
}

let initDegreesClick = () => {
    document.getElementById("idf").addEventListener("click", () => {
        document.getElementById("idfPdf").src = "https://drive.google.com/file/d/13j9QZAXabKxk30nJ-dD34IM2ihuzzwE9/preview";
        document.getElementById("pdfView").style.visibility = "visible";
        document.getElementById("idfPdf").style.visibility = " visible";
    });
    document.getElementById("magshimim").addEventListener("click", () => {
        document.getElementById("magshimimPdf").src = "https://drive.google.com/file/d/1ePoNerPD9eCPU4Tmush9txodvchzan78/preview";
        document.getElementById("pdfView").style.visibility = "visible";
        document.getElementById("magshimimPdf").style.visibility = " visible";
    });
    document.getElementById("project").addEventListener("click", () => {
        document.getElementById("projectPdf").src = "https://drive.google.com/file/d/1d6V_Dhz5WZ_T4SX2zmqC1wzhdtTUsOpv/preview";
        document.getElementById("pdfView").style.visibility = "visible";
        document.getElementById("projectPdf").style.visibility = " visible";
    });
    document.getElementById("bagrut").addEventListener("click", () => {
        document.getElementById("bagrutPdf").src = "https://drive.google.com/file/d/1vxepqEZkFQ4XiKKbjn7Ik6acVr_CjmRL/preview";
        document.getElementById("pdfView").style.visibility = "visible";
        document.getElementById("bagrutPdf").style.visibility = " visible";
    });
}

let initCloseBtn = () => {
    document.getElementById("closeBtn").addEventListener("click", () => {
        document.getElementById("pdfView").style.visibility = "hidden";
        let pdfs = ["idf", "magshimim", "project", "bagrut"];
        for (let i = 0; i < pdfs.length; i++) {
            document.getElementById(`${pdfs[i]}Pdf`).style.visibility = "hidden";
            document.getElementById(`${pdfs[i]}Pdf`).src = "";
        }
    })
}