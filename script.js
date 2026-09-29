document.addEventListener("DOMContentLoaded", function () {

    const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const message =
                "Assalam-o-Alaikum Habib! 👋\n\n" +
                "I visited your portfolio website and I'm interested in connecting with you.\n\n" +
                "I would like to discuss a project or opportunity with you.\n\n" +
                "Thank you!";

            const whatsappURL =
                "https://wa.me/923292085000?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");

        });

    });

});