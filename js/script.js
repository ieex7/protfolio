// Select all cards in the services section
const serviceCards = document.querySelectorAll("#services .card");

// Add scroll event listener
window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight - 100;

    serviceCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            card.classList.add("visible");
        }
    });
});

// تحريك قسم التواصل عند التمرير
const contactCards = document.querySelectorAll(".contact .card");

const handleContactRollEffect = () => {
    contactCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // إذا كان العنصر داخل نافذة العرض
        if (cardPosition < windowHeight - 100) {
            setTimeout(() => {
                card.classList.add("roll-in");
            }, index * 150); // تأخير بسيط لكل بطاقة
        } else {
            // إزالة التأثير إذا خرج العنصر من نافذة العرض
            card.classList.remove("roll-in");
        }
    });
};

window.addEventListener("scroll", handleContactRollEffect);

const projectImages = document.querySelectorAll('.project-image img');

const handleImageScroll = () => {
    projectImages.forEach((img) => {
        const imgPosition = img.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imgPosition < windowHeight - 100) {
            img.parentElement.classList.add('visible');
        } else {
            img.parentElement.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', handleImageScroll);


