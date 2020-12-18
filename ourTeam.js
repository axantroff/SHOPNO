// team[i].imageSrc = undefined;
const getTeam = async () => {
    const url = 'assets/json/team.json'
    const res = await fetch(url)
    const team = await res.json()
    let i = 0

    const list = document.getElementById("gallery_list")
    const position = "beforeend";
    for (let i = 0; i < team.length; i++) {
        const item = `<div class="gallery__item gallery__item_bg">
                        <img class="gallery__img" src="${team[i].imageSrc}" alt="6">
                        <div class="info gallery__info">
                            <div class="info__container">
                                <div class="info__content">
                                    <div class="info__personal">
                                        <div class="info__name">${team[i].name}</div>
                                        <div class="info__pos">/ ${team[i].position}</div>
                                    </div>
                                    <div class="info__desc">
                                        ${team[i].description}
                                    </div>
                                    <div class="info__socials">
                                        <div class="socials socials_small">
                                            <ul class="socials__list">
                                                <li class="socials__item_small">
                                                    <a class="socials__link socials__link_small" href="#">
                                                        <i class="fab fa-pinterest-p"></i>
                                                    </a>
                                                </li>
                                                <li class="socials__item_small">
                                                    <a class=" socials__link socials__link_small" href="#">
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li class="socials__item_small">
                                                    <a class=" socials__link socials__link_small" href="#">
                                                        <i class="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li class="socials__item_small">
                                                    <a class=" socials__link socials__link_small" href="#">
                                                        <i class="fab fa-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
        list.insertAdjacentHTML(position, item)
    }

}

getTeam()