<template>
<div class="detailView4">
    <button @click="modifiedDetailView()">⬇ 수정하기</button>
    <div class="selectDiv">
        <v-select v-model="selectMonth" label="Month" density="compact" :items=month variant="outlined"></v-select>
    </div>
    <img v-if="selectMonth.length == 0" src="../assets/background_logo.png">
</div>
</template>

<script>
export default {
    props: {
        id: String,
    },
    data() {
        return {
            selectMonth: "",
            month: ["1월 상담지", "2월 상담지", "3월 상담지", "4월 상담지", "5월 상담지", "6월 상담지", "7월 상담지", "8월 상담지", "9월 상담지", "10월 상담지", "11월 상담지", "12월 상담지", ],
        }
    },
    methods: {
        changeSelect() {
            console.log(1);
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
    width: 50%;
    height: 10%;
    margin-top: 15px;
}
</style>
