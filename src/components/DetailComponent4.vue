<template>
<div class="detailView4">
    <button @click="modifiedDetailView()">⬇ 수정하기</button>
    <div class="selectDiv">
        <v-select @update:modelValue="changeSelect" v-model="selectMonth" label="Month" density="compact" :items=month variant="outlined"></v-select>
    </div>
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
            selectMonth: "",
            imgUrl: ['https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_1.jpg/dims/optimize', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_3.jpg/dims/optimize', 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4D62EEAQPO32OIH2EXFAVIIUQU.jpg', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_4.jpg/dims/optimize'],
            month: ["1월 상담지", "2월 상담지", "3월 상담지", "4월 상담지", "5월 상담지", "6월 상담지", "7월 상담지", "8월 상담지", "9월 상담지", "10월 상담지", "11월 상담지", "12월 상담지", ],
        }
    },
    methods: {
        changeSelect(event) {
            console.log(event);
        },
        modifiedDetailView() {
            this.$router.push({
                name: "DetailComponent4Update",
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
    .detailView4 button:hover {
        background: rgb(3 24 54 / 88%);
    }
}

.detailView4 button {
    width: 151px;
    height: 40px;
    background: rgba(46, 80, 128, 0.88);
    border-radius: 15px;
    color: white;
    margin: 15px 0px;
}

.detailView4 {
    padding: 15px;
}

.detailView4 img {
    width: 50%;
}

.detailView4 h4 {
    font-size: 1.1em;
    line-height: 1.5em;
    color: #5e6244;
    font-weight: 700;
    margin: 0 0 1em 0;
}

.selectDiv {
    width: 40%;
    margin: auto;
}

@media screen and (max-width: 767px) {

.selectDiv {
    width: 60%;
}
}
</style>
