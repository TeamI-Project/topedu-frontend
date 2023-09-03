<template>
<div class="mainFrame">
    <div class="section">
        <div class="selectDiv">
            <v-select v-model="selectSeason" label="Season" density="compact" :items=season variant="outlined"></v-select>
        </div>
        <div class="imgDiv">
            <input @change="uploadImg" accept="image/*" type="file" id="file" />
            <label for="file">이미지 업로드</label>
        </div>
        <h4>💡 이미지를 누르면 삭제 됩니다.</h4>
        <img @click="deleteImg()" :src=imgUrl>
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
        this.id = history.state.id;
    },
    data() {
        return {
            id: "",
            selectSeason: "",
            imgUrl: undefined,
            season: ["중학교1학년 1학기 1차고사", "중학교1학년 1학기 2차고사", "중학교1학년 2학기 1차고사", "중학교1학년 2학기 2차고사", "중학교2학년 1학기 1차고사", "중학교2학년 1학기 2차고사", "중학교2학년 2학기 1차고사", "중학교2학년 2학기 2차고사", "중학교3학년 1학기 1차고사", "중학교3학년 1학기 2차고사", "중학교3학년 2학기 1차고사", "중학교3학년 2학기 2차고사", "고등학교1학년 1학기 1차고사", "고등학교1학년 1학기 2차고사", "고등학교1학년 2학기 1차고사", "고등학교1학년 2학기 2차고사", "고등학교2학년 1학기 1차고사", "고등학교2학년 1학기 2차고사", "고등학교2학년 2학기 1차고사", "고등학교2학년 2학기 2차고사", "고등학교3학년 1학기 1차고사", "고등학교3학년 1학기 2차고사", "고등학교3학년 2학기 1차고사", "고등학교3학년 2학기 2차고사", ],
        }
    },
    methods: {
        deleteImg() {
            if (confirm('이미지를 삭제하시겠습니까?')) {
                this.imgUrl = undefined;
            }
        },
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
            alert('수정완료 되었습니다');
            this.$router.push({
                name: "StudentDetailPage",
                params: {
                    id: this.id,
                },
            });
        },
        /* 업로드한 이미지를 보여주는 함수 */
        uploadImg(event) {
            if (this.imgUrl) URL.revokeObjectURL(this.imgUrl); // 기존 이미지 메모리 할당 해제
            let img = event.target.files[0];
            /* 이미지 파일이 아닐 시 거부 문구 출력 */
            (img.type).includes('image') ? this.imgUrl = URL.createObjectURL(img) : alert('이미지 파일만 업로드 가능합니다');
        },
    },
}
</script>

<style scoped>
@media(hover: hover) and (pointer: fine) {
    .imgDiv label:hover {
        background: #bab5ae;
        color: white;
    }

    .updateBtn:hover {
        background: rgb(3 24 54 / 88%);
    }

    .cancelBtn:hover {
        background: #3e3e3e;
    }
}

.imgDiv label {
    cursor: pointer;
    display: grid;
    width: 175px;
    height: 45px;
    background: #F9F6F1;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    place-content: center;
}

.imgDiv input {
    display: none;
}

.selectDiv {
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
}

.mainFrame {
    display: flex;
    align-items: center;
    justify-content: center;
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

.section {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.section img {
    width: 50%;
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

    .selectDiv {
        width: 65%;
    }
}

@media screen and (max-height: 750px) {
    .section img {
        max-height: 350px;
    }
}
</style>
