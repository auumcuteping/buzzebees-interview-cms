<template>
    <main>
        <section class="profile">
            <div class="profile-text">
                <h2>Hello, My name's</h2>
                <h1>Phuriwat</h1> <h1>Prahanthongchai</h1>
                <h2>I'm Software Developer</h2>
                <p>I have previous work experience for 2 years.</p>
                <p>Game and Mobile Developer (1years 4months)</p>
                <p>Web App Developer (8months)</p>
                <p></p>
            </div>
            <div class="profile-img">
                <img src="../assets/profile-photo.jpg"/>
            </div>
            
            <div class="aboutme">
                <div class="personal">
                    <h3>Personal Information</h3>
                    <h5>Nickname: Auum (อุ้ม)</h5>
                    <h5>Age: 25 years</h5>
                    <h5>Gender: Male</h5>
                    <h5>Height: 165cm</h5>
                    <h5>Weight: 69kg</h5>
                    <h5>Religion: Christians</h5>
                </div>
                <div class="personal">
                    <h3>Address</h3>
                    <h5>1674 Petchaburi 36 Alley</h5>
                    <h5>Makkasan</h5>
                    <h5>Ratchathewi</h5>
                    <h5>Bangkok</h5>
                    <h5>10400</h5>
                </div>
            </div>
        </section>
        
        <div class="activities">
            <div class="activity-text">
                <h1>Activities</h1>
                <h2>Volunteer</h2>
            </div>
            <div class="activity">
                <img src="../assets/volunteer2.jpg"/>
                <div class="activity-desc">
                    <h3> - Head of people management at RDVC (RuralDevelopment Volunteer Club) to manage people working in a fish pond system.</h3>
                    <h3> - Head of people management at Rangsita to manage people working in building constructions.</h3>
                </div>
            </div>
            <div class="activity-text">
                <h2>Lab</h2>
            </div>
            <div class="activity">
                <img src="../assets/lab.jpg"/>
                <div class="activity-desc">
                    <h3>In the University, I have learnt so many classes, such as IoT lab, Network and Software coding.</h3>
                </div>
            </div>
            <div class="activity-text">
                <h2>Travel</h2>
            </div>
            <div class="activity">
                <img src="../assets/travel.jpg"/>
                <div class="activity-desc activity-desc3">
                    <h3>I love traveling to many places because adventures are the best way to open my eyes wider</h3>
                </div>
            </div>
            <div class="activity-text">
                <h2>Music</h2>
            </div>
            <div class="activity">
                <img src="../assets/music.jpg"/>
                <iframe src="https://www.youtube.com/embed/XleqihyzxPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="activity-desc">
                    <h3>Music is my life. It is a magical tool to shine my blue day and keeps my mind peacefully.</h3>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style lang="scss" scoped>
main {
    margin-left: 5rem;
    margin-right: 5rem;
}
.activities {
    max-width: 1000px;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 100px;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 20px;
}
.activity-text h1 {
    margin-left: 40%;
}
.activity {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    width: 100%;
    padding: 2%;
}
.activity img {
    max-width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    border-radius: 4rem;
    object-fit: cover;
    object-position: center;
    transition: transform .2s;
}
.activity img:hover {
    transform: scale(1.2);
}
.activity-desc {
    padding: 20px;
    height: auto;
    max-width: 400px;
}
.activity-desc3 {
    margin-top: 200px;
    max-width: 400px;
}
iframe {
    margin-top: 10px;
    width: 400px;
    height: 240px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}
.profile {
    margin-top: 100px;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: cover;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-gap: 4rem;
    padding-left: 10%;
    padding-right: 10%;
}
.profile-text h1 {
    margin: 10px 0px 25px;
    font-size: var(--big-font);
    color: var(--text-color);
    line-height: 1;
    font-weight: 500;
}
.profile-img {
    max-width: 300px;
    height: auto;
}
.profile-img img {
    width: 420px;
    height: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    transition: transform .2s
}
.profile-img img:hover {
    will-change: transform;
    transform: perspective(1000px) rotate(-4.80deg) rotateY(-10.23deg) scale3d(1.5, 1.5, 1.5);
}
.aboutme {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-gap: 2rem;
}
.personal {
    padding: 20px;
    max-width: 400px;
    background-color: rgba(197, 29, 248, 0.2);
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: transform .2s;
    color: var(--bg-color);
}
.personal:hover {
    transform: scale(1.2);
}

@media screen and (max-width: 1460px) {
    .profile {
        text-align: center;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    .profile-text h1 {
        font-size: 2rem;
    }
    .profile-img {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        max-width:300px;
    }
    .profile-img img {
        margin: auto;
        width: 100%;
        max-width: 300px;
        height: auto;
    }
    .personal {
    margin: auto;
    }
    .activities {
    max-width: 640px;
    }
    .activity img {
        width: 300px;
        margin: auto;
    }
    .activity-desc3 {
        margin-top: 200px;
        max-width: 400px;
    }
    iframe {
        margin-top: 10px;
        margin-left: 30px;
        width: 300px;
        height: 200px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    }
}

@media screen and (max-width: 1000px) {
    .profile-img img {
        margin: auto;
        width: 100%;
        max-width: 250px;
        height: auto;
    }
    .activities {
        max-width: 420px;
    }
    .activity {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    .activity-desc3 {
        margin-top: 10px;
        max-width: 400px;
    }
    .activity-text h1 {
        margin-left: 32%;
    }
}

@media screen and (max-width: 700px) {
    .profile-img img {
        margin: auto;
        width: 100%;
        max-width: 200px;
        height: auto;
    }
    .aboutme {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        grid-gap: 2rem;
    }
    .activities {
        max-width: 300px;
    }
    .activity img {
        width: 200px;
        margin: auto;
    }
    .activity-desc {
        max-width: 300px;
    }
    iframe {
        max-width: 280px;
        max-height: 240px;
    }
}

@media screen and (max-width: 420px) {
    .profile-img img {
        margin: auto;
        width: 100%;
        max-width: 120px;
        height: auto;
    }
    .personal {
        max-width: 100%;
    }
    .activity img {
        width: 140px;
    }
    iframe {
        max-width: 200px;
        max-height: 140px;
    }
    .activity-desc {
        width: 280px;
    }
}
</style>