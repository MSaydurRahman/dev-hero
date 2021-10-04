import React from 'react';
import "./About.css"
const About = () => {
    const img1 = `https://miro.medium.com/max/579/1*lI0nR91pNegb9mwLmgNgQQ.png`
    const img2 = `https://www.simplilearn.com/ice9/free_resources_article_thumb/ASP.NET_logo.jpg`
    const img3 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCfJAxhnSr3OuiMM1Id2-mCdebKgqc2QGfHuLUdhEhg5EoZvDgoIl9hUGo8oJPgnPnLQ&usqp=CAU`
    return (
        <div>
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner about">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div>
                <div className="bg-dark mt-4">
                    <h1 className="text-white p-4">
                        BEST IT TRAINING IN THE COUNTRY
                    </h1>
                    <p className="text-white p-4">Learn real world software engineering from industry experts. Upgrade your skill to international level.</p>
                    <div>
                        <div className="p-4">
                            <h5 className="text-white">Real World Project Development</h5>
                            <p className="text-white ">
                                Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;