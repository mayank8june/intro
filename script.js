const contentMap = [
    {
        gif: "https://64.media.tumblr.com/404c1be9a5247f04f4531348fdd7993e/ab079de318db70ff-8c/s1280x1920/2a6d02cfbdf2c2bc4fd8c0b67aab8351c9326d13.gifv",
        text: "I write poetries and post on Spotify",
        images: [
            { src: "assets/poetry.png", url: "https://open.spotify.com/episode/5AHogkiDGNx9SBm3Qr0h93?si=tZN7VlLYRMiGx-JQvRQKBg" },  // Replace with actual URL
            { src: "assets/poetry2.png", url: "https://open.spotify.com/episode/0elZXhjZ90AMAaULHoWqSK?si=4uMHD_W8Sgmx-sG1Nk_LJQ" },  // Replace with actual URL
            { src: "assets/poetry3.png", url: "https://open.spotify.com/episode/2qhihOZK7oJHhndhz5TQYZ?si=j8Jsc-3MRem0YqJ8k6ucBQ" }   // Replace with actual URL
        ]
    },
    {
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjhhNncyamljMXQ4cGhlZzYzYjBnN2NpNGpudjZnNm13N3g5dDhoZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gioLPAqDRZjzYpmuCp/giphy.webp",
        text: "I love coding, Here are some of my projects",
        images: [
            { src: "assets/project1.png", url: "https://mayank8june.github.io/Not-just-a-weather-app/" },  // Replace with actual URL
            { src: "assets/project2.png", url: "https://kitaabkhana.com/" },  // Replace with actual URL
            { src: "assets/project3.png", url: "https://mayank8june.github.io/Mayank_Portfolio/" }   // Replace with actual URL
        ]
    },
    {
        gif: "https://64.media.tumblr.com/0ba83e8e9608b31baf5c5af6d9c66d2d/12056b2e0eb650a7-5a/s540x810/77c470d0e37ae607e338a59041b9b477e93316d7.gifv",
        text: "I like Pinterest, here's my favourite moodboards",
        images: [
            { src: "assets/pinterest.png", url: "https://in.pinterest.com/mayanksharma08june/calming-water/" },  // Replace with actual URL
            { src: "assets/pinterest2.png", url: "https://in.pinterest.com/mayanksharma08june/indian-art/" },  // Replace with actual URL
            { src: "assets/pinterest3.png", url: "https://in.pinterest.com/mayanksharma08june/dark-academia/" }   // Replace with actual URL
        ]
    },
    {
        gif: "https://64.media.tumblr.com/1f235d96d2693d2d94007c25a87a84a2/ec7191b3be94e934-72/s540x810/e97fcd5549add7668737fbb05eb3fd1def0323c9.gifv",
        text: "I love baking and learning new recipes",
        images: [
            { src: "assets/IMG_4899.jpg", url: "https://sallysbakingaddiction.com/classic-cheesecake/" },  // Replace with actual URL
            { src: "assets/IMG_4900.jpg", url: "https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/" }  // Replace with actual URL
        ]
    }
];

$(document).ready(function () {
    let current = 0;

    function updateContent() {
        $("#mirror-content").css({
            "background-image": `url(${contentMap[current].gif})`
        });
        $("#text-content").text(contentMap[current].text);
        
        const images = contentMap[current].images.map(({ src, url }) => 
            `<a href="${url}" target="_blank"><div class="image-item" style="background-image: url('${src}')"></div></a>`
        );
        
        $("#image-gallery").html(images.join(""));
    }

    $("#mirror-content").on("click", function () {
        current = (current + 1) % contentMap.length;
        updateContent();
    });

    // Initialize with the first content
    updateContent();
});
