<template>
<div class="detailView5">
    <button @click="modifiedDetailView()">⬇ 수정하기</button>
    <div>
        <h4>1. 담임 전달 사항</h4>
        <div v-if="comments.teacherComment.length == 0">
            <p>내용없음</p>
        </div>
        <div v-else>
            <p>{{ comments.teacherComment }}</p>
        </div>
    </div>
    <div>
        <h4>2. 학생 상담 기록</h4>
        <div v-if="comments.studentComment.length == 0">
            <p>내용없음</p>
        </div>
        <div v-else>
            <p>{{ comments.studentComment }}</p>
        </div>
    </div>
    <div>
        <h4>3. 부모님 상담 기록</h4>
        <div v-if="comments.parentsComment.length == 0">
            <p>내용없음</p>
        </div>
        <div v-else>
            <p>{{ comments.parentsComment }}</p>
        </div>
    </div>
    <div>
        <h4>4. 기타 기록 사항</h4>
        <div v-if="comments.etcComment.length == 0">
            <p>내용없음</p>
        </div>
        <div v-else>
            <p>{{ comments.etcComment }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        id: String,
    },
    data() {
        return {
            comments: {
                "teacherComment": "성실맨",
                "studentComment": "",
                "parentsComment": "철강왕",
                "etcComment": "어머나",
            }
        }
    },
    methods: {
        modifiedDetailView() {
            this.$router.push({
                name: "DetailComponent5Update",
                state: { // params가 state로 바뀌었다.
                    id: this.id,
                    comments: {
                        teacherComment: this.comments.teacherComment,
                        studentComment: this.comments.studentComment,
                        parentsComment: this.comments.parentsComment,
                        etcComment: this.comments.etcComment,
                    },
                },
            });
        }
    },
}
</script>

<style>
@media(hover: hover) and (pointer: fine) {
    .detailView button:hover {
        background: rgb(3 24 54 / 88%);
    }
}

.detailView5 button {
    width: 151px;
    height: 40px;
    background: rgba(46, 80, 128, 0.88);
    border-radius: 15px;
    color: white;
    margin: 15px 0px;
}

.detailView5 {
    padding: 15px;
}

.detailView5 h4 {
    font-size: 1.1em;
    line-height: 1.5em;
    color: #5e6244;
    font-weight: 700;
    margin: 0 0 1em 0;
}

.detailView5 p {
    margin: 0 0 2em 0;
    font-size: 13px;
}
</style>
