<template>
<div class="detailView3">
    <button @click="modifiedDetailView()">⬇ 수정하기</button>
    <div class="selectDiv">
        <v-select @update:modelValue="changeSelect" v-model="selectSeason" label="Season" density="compact" :items=season variant="outlined"></v-select>
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
            selectSeason: "",
            imgUrl: ['https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_1.jpg/dims/optimize', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_3.jpg/dims/optimize', 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4D62EEAQPO32OIH2EXFAVIIUQU.jpg', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_4.jpg/dims/optimize'],
            season: ["중학교1학년 1학기 1차고사", "중학교1학년 1학기 2차고사", "중학교1학년 2학기 1차고사", "중학교1학년 2학기 2차고사", "중학교2학년 1학기 1차고사", "중학교2학년 1학기 2차고사", "중학교2학년 2학기 1차고사", "중학교2학년 2학기 2차고사", "중학교3학년 1학기 1차고사", "중학교3학년 1학기 2차고사", "중학교3학년 2학기 1차고사", "중학교3학년 2학기 2차고사", "고등학교1학년 1학기 1차고사", "고등학교1학년 1학기 2차고사", "고등학교1학년 2학기 1차고사", "고등학교1학년 2학기 2차고사", "고등학교2학년 1학기 1차고사", "고등학교2학년 1학기 2차고사", "고등학교2학년 2학기 1차고사", "고등학교2학년 2학기 2차고사", "고등학교3학년 1학기 1차고사", "고등학교3학년 1학기 2차고사", "고등학교3학년 2학기 1차고사", "고등학교3학년 2학기 2차고사", ],
        }
    },
    methods: {
        changeSelect(event) {
            console.log(event);
        },
        modifiedDetailView() {
            this.$router.push({
                name: "DetailComponent3Update",
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
    .detailView3 button:hover {
        background: rgb(3 24 54 / 88%);
    }
}

.detailView3 button {
    width: 151px;
    height: 40px;
    background: rgba(46, 80, 128, 0.88);
    border-radius: 15px;
    color: white;
    margin: 15px 0px;
}

.detailView3 {
    padding: 15px;
}

.detailView3 img {
    width: 50%;
}

.detailView3 h4 {
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
        width: 85%;
    }
}
</style>
