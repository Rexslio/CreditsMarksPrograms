document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".content h1");
    const buttons = document.querySelectorAll("button");
    const image = document.querySelector(".image-container img");

    // Efecto de entrada con opacidad y desplazamiento
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(50px)";
    setTimeout(() => {
        heroText.style.transition = "opacity 1s ease, transform 1s ease";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);

    // Efecto hover en los botones
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0 0 20px rgba(255, 191, 0, 1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Animación de imagen al hacer scroll
    function handleScroll() {
        const scrollPosition = window.scrollY;
        image.style.transform = `translateY(${scrollPosition * 0.1}px) scale(1.05)`;
    }

    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    const sectionFor = document.querySelector(".section-for img");

    function fadeInOnScroll() {
        let rect = sectionFor.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            sectionFor.style.opacity = "1";
            sectionFor.style.transform = "translateY(0)";
        }
    }

    sectionFor.style.opacity = "0";
    sectionFor.style.transform = "translateY(50px)";
    sectionFor.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Ajuste para la barra de navegación
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sobreElla = document.querySelector(".sobre-ella");

    function mostrarSeccion() {
        const posicion = sobreElla.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;
        if (posicion < alturaPantalla * 0.8) {
            sobreElla.classList.add("visible");
        }
    }

    window.addEventListener("scroll", mostrarSeccion);
    mostrarSeccion();
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, // Ajusta según el diseño
            behavior: "smooth"
        });
    }
}


function openPage(url) {
    window.open(url, '_blank'); // Abre en una nueva pestaña
}







document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Diferente velocidad

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000); // Elimina después de que desaparezca
    }

    setInterval(createHeart, 400);
});









document.addEventListener("DOMContentLoaded", function() {
    const text = "¿Quieres ser mi novia? 💖";
    let i = 0;
    const question = document.getElementById("question");

    function typeWriter() {
        if (i < text.length) {
            question.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

function showLove() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("loveMessage").style.display = "block";
    generateHearts();
}

function moveNoButton() {
    let button = document.querySelector(".no-btn");
    let randomX = Math.floor(Math.random() * (window.innerWidth - 200));
    let randomY = Math.floor(Math.random() * (window.innerHeight - 200));

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function generateHearts() {
    const container = document.querySelector(".hearts-container");

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animation = "floatHeart 5s infinite";
        heart.style.fontSize = Math.random() * 2 + 1 + "rem";
        container.appendChild(heart);
    }
}
function openChest(chest, index) {
    if (chest.classList.contains("opened") || lives <= 0) return;
    
    chest.classList.add("opened");

    if (index === surpriseIndex) {
        document.getElementById("message").innerHTML = `<span class="win-text">🎉 ¡Ganaste! Has encontrado la sorpresa 💖</span>`;
        setTimeout(() => {
            document.getElementById("winScreen").style.display = "flex";
            document.getElementById("winScreen").innerHTML = `
                <h2 class="win-effect">✨ ¡Eres increíble! ✨</h2>
                <p class="win-effect">Solo alguien tan especial como tú lo lograría. 💕</p>
                <button class="thanks-btn" onclick="goToQuestion()">Gracias 💖</button>
            `;
        }, 1000);
    } else {
        lives--;
        document.getElementById("lives").innerText = lives;
        document.getElementById("message").innerText = "Este cofre está vacío... intenta de nuevo.";
    }
}
document.addEventListener("mousemove", (event) => {
    const images = document.querySelectorAll(".floating-img");
    const x = (event.clientX / window.innerWidth) * 30 - 15;
    const y = (event.clientY / window.innerHeight) * 30 - 15;

    images.forEach(img => {
        img.style.transform = `translate(${x}px, ${y}px)`;
    });
});
function openPage(url) {
    window.location.href = url;
}



document.addEventListener("DOMContentLoaded", function () {
    const pochaccoContainer = document.createElement("div");
    pochaccoContainer.classList.add("background-pochacco");
    document.body.appendChild(pochaccoContainer);

    function createPochacco() {
        const pochacco = document.createElement("img");
        pochacco.src = "pochacco.png"; // Usa una imagen PNG transparente
        pochacco.classList.add("pochacco");

        // Posición aleatoria en la pantalla
        pochacco.style.left = Math.random() * 100 + "vw";
        pochacco.style.top = Math.random() * 100 + "vh";
        pochacco.style.width = Math.random() * 50 + 100 + "px"; // Tamaño aleatorio

        pochaccoContainer.appendChild(pochacco);

        // Elimina la imagen después de un tiempo
        setTimeout(() => {
            pochacco.remove();
        }, 10000);
    }

    // Crear 20 imágenes al inicio
    for (let i = 0; i < 20; i++) {
        createPochacco();
    }
    
    // Generar nuevas imágenes cada 2 segundos
    setInterval(createPochacco, 2000);
});












let attempts = 3;
let correctGift = Math.floor(Math.random() * 3) + 1; // Regalo correcto aleatorio

function updateAttempts() {
    document.getElementById("attempts-remaining").textContent = "Intentos restantes: " + attempts;
}

function showWinScreen() {
    document.getElementById("win-screen").style.display = "block";
}

function resetGame() {
    attempts = 3;
    updateAttempts();
    document.getElementById("win-screen").style.display = "none";
    document.querySelectorAll(".gift").forEach(gift => gift.classList.remove("opened"));
    correctGift = Math.floor(Math.random() * 3) + 1; // Nuevo cofre correcto
}

function handleGiftClick(e) {
    const gift = e.currentTarget;
    if (gift.classList.contains("opened")) return;

    gift.classList.add("opened");
    attempts--;

    if (parseInt(gift.dataset.id) === correctGift) {
        setTimeout(showWinScreen, 500);
    } else {
        updateAttempts();
        if (attempts <= 0) {
            setTimeout(resetGame, 2000);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".gift").forEach((gift, index) => {
        gift.setAttribute("data-id", index + 1);
        gift.addEventListener("click", handleGiftClick);
    });

    document.getElementById("thank-you-btn").addEventListener("click", () => {
        window.location.href = "pregunta.html"; // Redirige a la pregunta
    });

    updateAttempts();
});
function showCinematicScreen() {
    const cinematicScreen = document.getElementById("cinematic-screen");
    cinematicScreen.classList.add("active");

    // Agregar un pequeño retraso antes de mostrar el mensaje con animación
    setTimeout(() => {
        cinematicScreen.innerHTML = "¡Me hiciste la persona más feliz! 💖";
    }, 1000);
}
function showLoveLetter() {
    const letter = document.getElementById("love-letter");
    letter.classList.add("show");

    const text = "Desde el momento en que te conocí, supe que eras especial. 💖 Gracias por hacer mi mundo más bonito. Te amo.";
    const letterText = document.getElementById("letter-text");
    letterText.innerHTML = "";

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            letterText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 500);
}
function startPuzzle() {
    const questionContainer = document.getElementById("question-container");
    const puzzleContainer = document.getElementById("puzzle-container");
    
    // Oculta la pregunta y muestra el rompecabezas
    questionContainer.style.display = "none";
    puzzleContainer.classList.add("show");
    
    // Simulación de armado de rompecabezas
    const pieces = document.querySelectorAll(".puzzle-piece");
    pieces.forEach((piece, index) => {
        setTimeout(() => {
            piece.classList.add("show");
        }, index * 500);
    });
}










function startAnimation() {
    const questionContainer = document.getElementById("question-container");
    const animationContainer = document.createElement("div");
    animationContainer.id = "animation-container";
    
    // Oculta la pregunta
    questionContainer.style.display = "none";
    
    // Agregar contenedor de animación
    document.body.appendChild(animationContainer);
    
    // Crear la imagen
    const image = document.createElement("img");
    image.src = "imagen-especial.png"; // Reemplaza con la imagen que desees
    image.classList.add("animated-image");
    
    // Crear la frase
    const phrase = document.createElement("p");
    phrase.classList.add("animated-text");
    
    // Texto a mostrar
    const text = "¡Me hiciste la persona más feliz! 💖";
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            phrase.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Agregar elementos al contenedor
    animationContainer.appendChild(image);
    animationContainer.appendChild(phrase);
    
    // Iniciar animaciones
    setTimeout(typeWriter, 500);
}



document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".btn.no");

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
