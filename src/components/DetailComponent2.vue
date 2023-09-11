<template>
<div class="detailView2">
    <button @click="modifiedDetailView()">⬇ 수정하기</button>
    <div>
        <h4>1. SCA</h4>
        <carousel :items-to-show="1">
            <slide v-for="(url, index) in imgUrl" :key="index">
                <img :src=url>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
    <div>
        <h4>2. CPS</h4>
        <carousel :items-to-show="1">
            <slide v-for="(url, index) in imgUrl" :key="index">
                <img :src=url>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
    <div>
        <h4>3. 커리어넷</h4>
        <carousel :items-to-show="1">
            <slide v-for="(url, index) in imgUrl" :key="index">
                <img :src=url>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
    <div>
        <h4>4. 식스센스 코칭</h4>
        <carousel :items-to-show="1">
            <slide v-for="(url, index) in imgUrl" :key="index">
                <img :src=url>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
    <div>
        <h4>5. 그 외 진로 검사</h4>
        <carousel :items-to-show="1">
            <slide v-for="(url, index) in imgUrl" :key="index">
                <img :src=url>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {
    Carousel,
    Slide,
    Pagination,
    Navigation
} from 'vue3-carousel'

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        id: String,
    },
    data() {
        return {
            imgUrl: ['https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_1.jpg/dims/optimize', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_3.jpg/dims/optimize', 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4D62EEAQPO32OIH2EXFAVIIUQU.jpg', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_4.jpg/dims/optimize']
        }
    },
    methods: {
        modifiedDetailView() {
            this.$router.push({
                name: "DetailComponent2Update",
                state: { // params가 state로 바뀌었다.
                    id: this.id,
                },
            });
        }
    },
}
</script>

<style scoped>
@media(hover: hover) and (pointer: fine) {
    .detailView button:hover {
        background: rgb(3 24 54 / 88%);
    }
}

.cartegoryView {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
}

.cartegoryView img {
    padding: 3px;
}

.detailView2 img {
    width: 40%;
}

.detailView2 button {
    width: 151px;
    height: 40px;
    background: rgba(46, 80, 128, 0.88);
    border-radius: 15px;
    color: white;
    margin: 15px 0px;
}

.detailView2 {
    padding: 15px;
}

.detailView2 h4 {
    font-size: 1.1em;
    line-height: 1.5em;
    color: #5e6244;
    font-weight: 700;
    margin: 1em 0 1em 0;
}

.detailView2 p {
    margin: 0 0 2em 0;
    font-size: 13px;
}
</style>
