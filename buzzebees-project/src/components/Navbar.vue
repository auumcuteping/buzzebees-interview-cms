<template>
    <nav>
        <div class="logo">
            <img src="../assets/logo2.png" alt="">
            <span ref="name_ref">Phuriwat P.</span>
        </div>
        <ul class="menu">
            <li @click="onChangeNameColor(0)"><router-link class="link" to="/">Profile</router-link></li>
            <li @click="onChangeNameColor(1)"><router-link class="link" to="/gallery">Gallery</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    mounted() {
        this.getHeaderSticky();
    },
    methods: {
        getHeaderSticky() {
            const header = document.querySelector("nav");
            window.addEventListener ("scroll", function() {
                header.classList.toggle("sticky", window.scrollY > 0)
            })
        },
        onChangeNameColor(el) {
            if(el > 0) {
                this.$refs.name_ref.className -= " profile-color";
                this.$refs.name_ref.className += " gallery-color";
            }
            else {
                this.$refs.name_ref.className -= " gallery-color";
                this.$refs.name_ref.className += " profile-color";
            }
        }
    }
}
</script>


<style lang="scss">

.profile-color {
    color: #960a78;
}

.gallery-color {
    color: #d68307;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0%;
    background: transparent;
    transition: .3s;
    z-index: 99999;
}

nav.sticky {
    background: rgba(85, 81, 142, 0.8);
    padding: 13px 18%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.logo img {
    width: 3rem;
    height: 3rem;
    margin: 5px;
    border-radius: 3rem;
}

.logo span {
    position: absolute;
    margin-top: 22px;
    margin-left: 10px;
    font-weight: bold;
    text-transform: uppercase;
}

.menu {
    display: flex;
    list-style: none;
    margin-right: 20px;
}

.menu li a {
    margin: 0 1rem;
    font-size: large;
    text-decoration: none;
    color: var(--bg-color);
    transition: 0.2s ease;
}

.menu li a:hover {
    color: var(--text-color)
}
</style>
