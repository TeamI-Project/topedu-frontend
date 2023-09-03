<template>
<div class="mainFrame">
    <div class="section" id="firstSection">
        <h4>1. 담임 전달 사항</h4>
        <textarea v-model="comments.teacherComment"></textarea>
    </div>
    <div class="section">
        <h4>2. 학생 상담 기록</h4>
        <textarea v-model="comments.studentComment"></textarea>
    </div>
    <div class="section">
        <h4>3. 부모님 상담 기록</h4>
        <textarea v-model="comments.parentsComment"></textarea>
    </div>
    <div class="section">
        <h4>4. 기타 기록 사항</h4>
        <textarea v-model="comments.etcComment"></textarea>
    </div>
    <div class="buttonSection">
        <button class="cancelBtn" @click="cancelUpdate()">취소</button>
        <button class="updateBtn" @click="updateDetail()">수정완료</button>
    </div>
</div>
</template>

<script>
export default {
    created() {
        /* state가 있을경우(학생 추가가 아닌 학생 수정일 경우) */
        this.comments.teacherComment = history.state.comments.teacherComment;
        this.comments.studentComment = history.state.comments.studentComment;
        this.comments.parentsComment = history.state.comments.parentsComment;
        this.comments.etcComment = history.state.comments.etcComment;
        this.id = history.state.id;
    },
    data() {
        return {
            id: "",
            comments: {
                "teacherComment": "",
                "studentComment": "",
                "parentsComment": "",
                "etcComment": "",
            }
        }
    },
    methods: {
        cancelUpdate() {
            console.log(this.id);
            this.$router.push({
                name: "StudentDetailPage",
                params: {
                    id: this.id,
                },
            });
        },
        updateDetail() {
            console.log(this.comments);
            alert('수정완료 되었습니다');
            this.$router.push({
                name: "StudentDetailPage",
                params: {
                    id: this.id,
                },
            });
        }
    },
}
</script>

<style scoped>
@media(hover: hover) and (pointer: fine) {
    .updateBtn:hover {
        background: rgb(3 24 54 / 88%);
    }

    .cancelBtn:hover {
        background: #3e3e3e;
    }
}

.mainFrame {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px 0px;
    width: 90%;
    height: 80vh;
    background: rgba(223, 209, 185, 0.2);
    border-radius: 25px;
    margin: auto;
    margin-top: 10px;
    z-index: 1;
    overflow-y: auto;
}

#firstSection {
    margin-top: 30px;
}

.section {
    width: 80%;
}

.section h4 {
    font-size: 1.1em;
    line-height: 1.5em;
    color: #5e6244;
    font-weight: 700;
    margin: 0 0 1em 0;
}

.section textarea {
    width: 100%;
    height: 10vh;
    border: 2px solid #bbbaba;
    padding: 5px;
}

.cancelBtn {
    width: 151px;
    height: 40px;
    background: #828282;
    border-radius: 15px;
    color: white;
    margin: 15px 0px;
    margin-right: 10px;
}

.updateBtn {
    width: 151px;
    height: 40px;
    background: rgba(46, 80, 128, 0.88);
    border-radius: 15px;
    color: white;
    margin: 15px 0px;
}

@media screen and (max-height: 750px) {
    .section textarea {
        height: 8vh;
        border: 2px solid #bbbaba;
        padding: 5px;
    }
}

@media screen and (max-width: 767px) {
    .cancelBtn {
        width: 120px;
        margin: 15px 0px;
        margin-right: 10px;
    }

    .updateBtn {
        width: 120px;
        height: 40px;
        background: rgba(46, 80, 128, 0.88);
        border-radius: 15px;
        color: white;
        margin: 15px 0px;
    }
}
</style>
