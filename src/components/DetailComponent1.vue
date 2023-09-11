<template>
<div class="detailView1">
    <button @click="modifiedDetailView()">⬇ 수정하기</button>
    <div>
        <h4>1. 첫레벨</h4>
        <Table>
            <tbody>
                <tr>
                    <td>영어 입학일</td>
                    <td>영어 입학레벨</td>
                    <td>수학 입학일</td>
                    <td>수학 입학레벨</td>
                </tr>
                <tr>
                    <td>2022-01-01</td>
                    <td>중앙고반</td>
                    <td>2022-01-01</td>
                    <td>코리안 탑클래스</td>
                </tr>
            </tbody>
        </Table>
    </div>
    <div>
        <h4>2. 레벨테스트</h4>
        <h5>2-1. 영어</h5>
        <carousel :items-to-show="1">
            <slide v-for="(url, index) in imgUrl" :key="index">
                <img :src=url>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
        <h5>2-2. 수학</h5>
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
        <h4>3. 상담요약</h4>
        <p>📌 친구들과의 관계 : {{ consultingSummary['친구들과의 관계'] }}</p>
        <p>📌 평소 성격 : {{ consultingSummary['평소 성격'] }}</p>
        <p>📌 부모님과의 소통 : {{ consultingSummary['부모님과의 소통'] }}</p>
        <p>📌 집중력 : {{ consultingSummary['집중력'] }}</p>
        <p>📌 과제성실도 : {{ consultingSummary['과제성실도'] }}</p>
        <p>📌 요약 : {{ consultingSummary['요약'] }}</p>
    </div>
    <div>
        <h4>4. 신규생 체크리스트</h4>
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
            consultingSummary: {
                '친구들과의 관계': '좋음',
                '평소 성격': '내향적',
                '부모님과의 소통': '개선필요',
                '집중력': '보통',
                '과제성실도': '보통',
                '요약': '내용없음',
            },
            imgUrl: ['https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_1.jpg/dims/optimize', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_3.jpg/dims/optimize', 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4D62EEAQPO32OIH2EXFAVIIUQU.jpg', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_4.jpg/dims/optimize']
        }
    },
    methods: {
        modifiedDetailView() {
            this.$router.push({
                name: "DetailComponent1Update",
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

.detailView1 img {
    width: 40%;
}

.detailView1 table {
    width: 40%;
    border: 1px solid #444444;
}

.detailView1 td {
    font-size: 0.8em;
    border: 1px solid #444444;
}

.detailView1 button {
    width: 151px;
    height: 40px;
    background: rgba(46, 80, 128, 0.88);
    border-radius: 15px;
    color: white;
    margin: 15px 0px;
}

.detailView1 {
    padding: 15px;
}

.detailView1 h4 {
    font-size: 1.1em;
    line-height: 1.5em;
    color: #5e6244;
    font-weight: 700;
    margin: 1em 0 1em 0;
}

.detailView1 h5 {
    font-size: 1.0em;
    line-height: 1.4em;
    color: #5e6244;
    font-weight: 600;
    margin: 1.5em 0 1.5em 0;
}

.detailView1 p {
    margin: 0 0 2em 0;
    font-size: 13px;
}

@media screen and (max-width: 767px) {

    .detailView1 table {
        width: 100%;
    }

    .detailView1 td {
        font-size: 0.6em;
    }
}

@media screen and (max-width: 1024px) {

    .detailView1 table {
        width: 80%;
    }
}
</style>
