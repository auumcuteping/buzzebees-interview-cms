<template>
    <div class="footer">
        <div class="contact">
            <h2>CONTACT ME</h2>
            <h5>Phuriwat Prahanthongchai</h5>
            <h5>Tel. (+66)938322267</h5>
            <h5>auum_pingping@hotmail.com</h5>
            <div class="socials">
                <a href="https://www.facebook.com/auum.phuriwat" target="_blank"><i class="pi pi-facebook"></i></a>
                <a href="https://www.instagram.com/auumcuteping/" target="_blank"><i class="pi pi-instagram"></i></a>
                <div class="letter-icon" @click="secretLetter()">
                    <img src="../assets/letter.png" alt=""/>
                    <p>secret letter</p>
                </div>
            </div>
        </div>
    </div>
    <div class="secret-letter" v-show="isActive" @click="closeLetter()">
        <img class="letter-image" src="../assets/secret-letter.jpg"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        secretLetter() {
            this.isActive = !this.isActive;
        },
        closeLetter() {
            this.isActive = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    bottom: 0%;
    left: 0%;
    background: rgba(255, 255, 255, 0.1);
}
.contact {
    text-align: center;
    margin-top: 10px;
}

i {
    scale: 1.4;
    color: var(--text-color);
}
.socials {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    margin-left: 10px;
    margin-right: 10px;
}
.letter-icon p {
    font-size: small;
    color: #861d00;
}
.letter-icon img {
    width: 30px;
    height: 30px;
    transition: transform .2s;
}
.letter-icon img:hover {
    transform: scale(3);
}
.secret-letter {
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(90, 90, 90, 0.5);
    z-index: 9999;
}
.letter-image {
    display: block;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: auto;
    max-width: 800px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}
</style>
