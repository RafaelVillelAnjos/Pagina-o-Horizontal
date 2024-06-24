const gifsPerPage = 5;
let currentPage = 1;

const gifs = [
    "https://media0.giphy.com/media/deaNFvbQh2zIOILdlU/source.gif",
    "https://steamuserimages-a.akamaihd.net/ugc/921427206947773938/E2F15721B22F1743B257B9FC33647146BC157E30/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    "https://steamuserimages-a.akamaihd.net/ugc/313367221046638467/41ED95ACE18D194A63D0DE3F826EA01B5F3D34DD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    "https://pa1.aminoapps.com/5875/65be1bb7774e300f202bb4ee861cbf2a1f3254b7_00.gif",
    "https://i.kym-cdn.com/photos/images/original/000/605/084/e94.gif",
    "https://media.tenor.com/eT65efTNamoAAAAj/bonfire-darksouls.gif",
    "https://i.pinimg.com/originals/e9/0e/6c/e90e6ced05e7e96a17cf66866b4031cd.gif",
    "https://giffiles.alphacoders.com/146/14617.gif",
    "https://art.ngfiles.com/images/1800000/1800096_juicytoucan_dark-souls-legends-gif.gif?f1620195523",
    "https://media.tenor.com/jP0qr_Ha7_MAAAAj/darksouls-knight.gif"
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);