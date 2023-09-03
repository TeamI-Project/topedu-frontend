<template>
<div class="detailView3">
    <button @click="modifiedDetailView()">⬇ 수정하기</button>
    <div class="selectDiv">
        <v-select v-model="selectSeason" label="Season" density="compact" :items=season variant="outlined"></v-select>
    </div>
    <img v-if="selectSeason.length == 0" src="../assets/background_logo.png">
</div>
</template>

<script>
export default {
    props: {
        id: String,
    },
    data() {
        return {
            selectSeason: "",
            season: ["중학교1학년 1학기 1차고사", "중학교1학년 1학기 2차고사", "중학교1학년 2학기 1차고사", "중학교1학년 2학기 2차고사", "중학교2학년 1학기 1차고사", "중학교2학년 1학기 2차고사", "중학교2학년 2학기 1차고사", "중학교2학년 2학기 2차고사", "중학교3학년 1학기 1차고사", "중학교3학년 1학기 2차고사", "중학교3학년 2학기 1차고사", "중학교3학년 2학기 2차고사", "고등학교1학년 1학기 1차고사", "고등학교1학년 1학기 2차고사", "고등학교1학년 2학기 1차고사", "고등학교1학년 2학기 2차고사", "고등학교2학년 1학기 1차고사", "고등학교2학년 1학기 2차고사", "고등학교2학년 2학기 1차고사", "고등학교2학년 2학기 2차고사", "고등학교3학년 1학기 1차고사", "고등학교3학년 1학기 2차고사", "고등학교3학년 2학기 1차고사", "고등학교3학년 2학기 2차고사",  ],
        }
    },
    methods: {
        changeSelect() {
            console.log(1);
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
    width: 50%;
    height: 10%;
    margin-top: 15px;
}
</style>
