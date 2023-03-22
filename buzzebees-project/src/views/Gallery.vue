<template>
    <div class="container-display-image" v-show="active">
        <div class="slideshow-container">
            <div class="close-display" @click="onClickCloseDisplay()"><i class="pi pi-times"></i></div>
            <div class="mySlides fade" 
                style="display: block"
                v-for="(fruit, index) in fruits"
                :key="index">
                    <div class="numbertext">{{index}} / 12</div>
                    <img class="display-image"
                        :src="'/src/assets/fruit-' + (fruit.id) + '.jpg'">
                    <div class="text">{{ fruit.name }}</div>
            </div>
            <a class="prev" @click="plusSlides(-1)">❮</a>
            <a class="next" @click="plusSlides(1)">❯</a>
            <div style="text-align:center">
                <span class="dot"
                    v-for="(fruit, index) in fruits"
                    @click="currentSlide(fruit.id)">
                </span> 
            </div>
        </div>
    </div>
    <main>
        <h1>Gallery</h1>
        <div class="gallery">
            <div class="container">
                <img
                    class="gallery-image" 
                    v-for="(fruit, index) in fruits" 
                    :key="index" 
                    @click="() => {currentSlide(fruit.id);active = true}"
                    v-bind:src="'/src/assets/fruit-' + (fruit.id) + '.jpg'"/>
            </div>
        </div>
    </main>
</template>

<script>
import 'primeicons/primeicons.css';
export default {
    name: "Gallery",
    slideIndex: 1,
    data() {
        return {
            active: false,
            fruits: [
                {
                    id: 1,
                    image: "fruit-1.jpg",
                    name: "passion fruit"
                },
                {
                    id: 2,
                    image: "fruit-2.jpg",
                    name: "mixed berry"
                },
                {
                    id: 3,
                    image: "fruit-3.jpg",
                    name: "strawberry"
                },
                {
                    id: 4,
                    image: "fruit-4.jpg",
                    name: "rambutan"
                },
                {
                    id: 5,
                    image: "fruit-5.jpg",
                    name: "avocado"
                },
                {
                    id: 6,
                    image: "fruit-6.jpg",
                    name: "lychees"
                },
                {
                    id: 7,
                    image: "fruit-7.jpg",
                    name: "kiwi"
                },
                {
                    id: 8,
                    image: "fruit-8.jpg",
                    name: "coconut"
                },
                {
                    id: 9,
                    image: "fruit-9.jpg",
                    name: "orange"
                },
                {
                    id: 10,
                    image: "fruit-10.jpg",
                    name: "watermelon"
                },
                {
                    id: 11,
                    image: "fruit-11.jpg",
                    name: "apple"
                },
                {
                    id: 12,
                    image: "fruit-12.jpg",
                    name: "apples"
                }
            ]
        }
    },
    mounted() {
    },
    methods: {
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        },
        showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}    
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";  
            dots[this.slideIndex-1].className += " active";
        },
        onClickCloseDisplay() {
            this.active = false;
        }
    }
}
</script>

<style lang="scss" scoped>

h1 {
    text-transform: uppercase;
    font-weight: bold;
}
.mySlides {
    display: none
}
img {
    vertical-align: middle;
}

.slideshow-container {
  position: relative;
  margin: auto;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: rgba(0,0,0,0.2);
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  bottom: 8px;
  width: 100%;
  text-align: center;
}
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active, .dot:hover {
  background-color: #717171;
}
.fade {
  animation-name: fade;
  animation-duration: 0.5s;
}
@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

main {
    margin-top: 120px;
    text-align: center;
}
.gallery {
    margin-left: 10rem;
    margin-right: 10rem;
}
.container {
    width: 100%;
}
.gallery-image {
    width: 18rem;
    height: 18rem;
    margin: 1rem;
    object-fit: cover;
    object-position: center;
    transition: transform .2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
}
.gallery-image:hover {
    transform: scale(1.05);
}
.container-display-image {
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
.display-image {
    display: block;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: auto;
    max-width: 800px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}
.close-display {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 0 0 0 1rem;
    margin-bottom: 40rem;
    color: #fff;
    transition: 0.6s ease;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.close-display:hover {
    background-color: rgba(0,0,0,0.8);
}

.slide-image-button {
    width: 50px;
    height: 50px;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.pi {
    margin-top: 1rem;
    margin-left: 1.1rem;
}

@media screen and (max-width: 1630px) {
    .gallery {
        margin-left: 12rem;
        margin-right: 12rem;
    }
    .gallery-image {
        width: 14rem;
        height: 14rem;
        margin: 1rem;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
}
@media screen and (max-width: 1430px) {
    .gallery {
        margin-left: 4rem;
        margin-right: 4rem;
    }
    .gallery-image {
        width: 18rem;
        height: 18rem;
        margin: 1rem;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    .display-image {
        display: block;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: auto;
        max-width: 600px;
    }
}

@media screen and (max-width: 850px) {
    .gallery {
        margin-left: 8rem;
        margin-right: 8rem;
    }
    .gallery-image {
        width: 10rem;
        height: 10rem;
        margin: 1rem;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    .display-image {
        display: block;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: auto;
        max-width: 350px;
    }
}

@media screen and (max-width: 420px) {
    .gallery {
        margin-left: 6rem;
        margin-right: 6rem;
    }
    .gallery-image {
        width: 8rem;
        height: 8rem;
        margin: 1rem;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        right: 0;
    }
    .display-image {
        display: block;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: auto;
        max-width: 300px;
    }
}
    
</style>