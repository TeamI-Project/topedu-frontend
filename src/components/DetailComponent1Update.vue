<template>
<div class="mainFrame">
    <div class="black-bg" v-if="engDate == 1">
        <div class="white-bg">
            <VDatePicker v-model="date" mode="date" @click="engAdmissionDateSet(date)" />
        </div>
    </div>
    <div class="black-bg" v-if="mathDate == 1">
        <div class="white-bg">
            <VDatePicker v-model="date" mode="date" @click="mathAdmissionDateSet(date)" />
        </div>
    </div>
    <div class="detailView1">
        <div>
            <h4>1. 첫레벨</h4>
            <table class="table">
                <tbody>
                    <tr>
                        <td>영어 입학일</td>
                        <td>영어 입학레벨</td>
                        <td>수학 입학일</td>
                        <td>수학 입학레벨</td>
                    </tr>
                    <tr>
                        <td><input readonly @click="engDate = 1" v-model="engAdmissionDate" placeholder="📅"></td>
                        <td><input></td>
                        <td><input readonly @click="mathDate = 1" v-model="mathAdmissionDate" placeholder="📅"></td>
                        <td><input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h4>2. 레벨테스트</h4>
            <h5>2-1. 영어</h5>
            <carousel :items-to-show="1">
                <slide v-for="(url, index) in imgUrlList" :key="index">
                    <img @click="deleteImg(index)" :src=url>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
            <div class="imgDiv">
                <input @change="uploadImg" accept="image/*" type="file" id="file" />
                <label for="file">이미지 업로드</label>
                <h4>💡 이미지를 누르면 삭제 됩니다.</h4>
            </div>
            <h5>2-2. 수학</h5>
            <carousel :items-to-show="1">
                <slide v-for="(url, index) in imgUrlList" :key="index">
                    <img @click="deleteImg(index)" :src=url>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
            <div class="imgDiv">
                <input @change="uploadImg" accept="image/*" type="file" id="file" />
                <label for="file">이미지 업로드</label>
                <h4>💡 이미지를 누르면 삭제 됩니다.</h4>
            </div>
        </div>
        <div>
            <h4>3. 상담요약</h4>
            <p>📌 친구들과의 관계</p>
            <v-radio-group inline>
                <v-radio label="좋음" value="1"></v-radio>
                <v-radio label="보통" value="2"></v-radio>
                <v-radio label="도움필요" value="3"></v-radio>
            </v-radio-group>
            <p>📌 평소 성격</p>
            <v-radio-group inline>
                <v-radio label="외향적" value="1"></v-radio>
                <v-radio label="내향적" value="2"></v-radio>
                <v-radio label="외내향적" value="3"></v-radio>
            </v-radio-group>
            <p>📌 부모님과의 소통</p>
            <v-radio-group inline>
                <v-radio label="좋음" value="1"></v-radio>
                <v-radio label="보통" value="2"></v-radio>
                <v-radio label="개선필요" value="3"></v-radio>
            </v-radio-group>
            <p>📌 집중력</p>
            <v-radio-group inline>
                <v-radio label="좋음" value="1"></v-radio>
                <v-radio label="보통" value="2"></v-radio>
                <v-radio label="도움필요" value="3"></v-radio>
            </v-radio-group>
            <p>📌 과제성실도</p>
            <v-radio-group inline>
                <v-radio label="좋음" value="1"></v-radio>
                <v-radio label="보통" value="2"></v-radio>
                <v-radio label="도움필요" value="3"></v-radio>
            </v-radio-group>
            <p>📌 요약 </p>
            <textarea></textarea>
        </div>
        <div>
            <h4>4. 신규생 체크리스트</h4>
            <carousel :items-to-show="1">
                <slide v-for="(url, index) in imgUrlList" :key="index">
                    <img :src=url>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
            <div class="imgDiv">
                <input @change="uploadImg" accept="image/*" type="file" id="file" />
                <label for="file">이미지 업로드</label>
                <h4>💡 이미지를 누르면 삭제 됩니다.</h4>
            </div>
        </div>
        <div class="buttonSection">
            <button class="cancelBtn" @click="cancelUpdate()">취소</button>
            <button class="updateBtn" @click="updateDetail()">수정완료</button>
        </div>
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
} from 'vue3-carousel';
import {
    ref
} from 'vue';

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    created() {
        /* state가 있을경우(학생 추가가 아닌 학생 수정일 경우) */
        this.id = history.state.id;
    },
    data() {
        return {
            id: "",
            imgUrl: undefined,
            engDate: 0,
            mathDate: 0,
            engAdmissionDate: "",
            mathAdmissionDate: "",
            date: ref(new Date()),
            consultingSummary: {
                '친구들과의 관계': '좋음',
                '평소 성격': '내향적',
                '부모님과의 소통': '개선필요',
                '집중력': '보통',
                '과제성실도': '보통',
                '요약': '내용없음',
            },
            imgUrlList: ['https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_1.jpg/dims/optimize', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_3.jpg/dims/optimize', 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4D62EEAQPO32OIH2EXFAVIIUQU.jpg', 'https://thumb.mtstarnews.com/06/2023/09/2023090409301201116_4.jpg/dims/optimize'],
        }
    },
    methods: {
        engAdmissionDateSet(date) {
            if (date == null) {
                console.log(1);
            } else {
                this.engDate = 0;
                let result = '';
                let a = date.toLocaleDateString("ko-KR");
                let b = a.split('.');
                b.map((e, i) => {
                    e = e.replace(/ /g, '');
                    i < 2 ? result += `${e}-` : result += e;
                })
                this.engAdmissionDate = result;
            }

        },
        mathAdmissionDateSet(date) {
            if (date == null) {
                console.log(1);
            } else {
                let result = '';
                this.mathDate = 0;
                let a = date.toLocaleDateString("ko-KR");
                let b = a.split('.');
                b.map((e, i) => {
                    e = e.replace(/ /g, '');
                    i < 2 ? result += `${e}-` : result += e;
                })
                this.mathAdmissionDate = result;
            }

        },
        deleteImg(index) {
            if (confirm('이미지를 삭제하시겠습니까?')) {
                this.imgUrlList.splice(index, 1);
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
            (img.type).includes('image') ? this.imgUrlList.push(URL.createObjectURL(img)) : alert('이미지 파일만 업로드 가능합니다');
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

.buttonSection {
    text-align: center;
}

.mainFrame {
    display: flex;
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
    margin: auto;
}

.imgDiv input {
    display: none;
}

.imgDiv {
    text-align: center;
}

@media(hover: hover) and (pointer: fine) {
    .detailView button:hover {
        background: rgb(3 24 54 / 88%);
    }
}

.detailView1 img {
    width: 40%;
}

.detailView1 table {
    border: 1px solid #444444;
}

.detailView1 td {
    font-size: 0.8em;
    border: 1px solid #444444;
}

.detailView1 {
    padding: 15px;
}

.detailView1 textarea {
    width: 100%;
    height: 10vh;
    border: 2px solid #bbbaba;
    padding: 5px;
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
    margin: 0 0 0.2em 0;
    font-size: 13px;
}

@media screen and (max-width: 767px) {

    .table input {
        width: 70px;
    }

    .detailView1 td {
        font-size: 0.6em;
    }
}

@media screen and (max-width: 1024px) {

    .detailView1 table {}
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

.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
    z-index: 100;
}

.white-bg {
    border-radius: 8px;
    padding: 20px;
}

@media screen and (max-width: 767px) {
    .cancelBtn {
        width: 120px;
    }

    .updateBtn {
        width: 120px;
    }
}
</style>
