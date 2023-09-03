<template>
<div class="mainBox">
    <div class="userInfo">
        <div class="search">신규 {{ member }} 등록</div>
        <button v-if="dischargeStudentBtnVisible" @click="dischargeStudent()">학생 퇴원</button>
    </div>

    <div class="mainContent" v-if="member == '선생님'">
        <input id="idInput" v-model="teacherInfo.id" placeholder="아이디를 입력하세요" />
        <input v-model="password" type="password" placeholder="비밀번호를 입력하세요" />
        <input v-model="pwCheck" type="password" placeholder="비밀번호 확인" />
        <p v-if="passwordCheck">❗ 비밀번호가 일치하지 않습니다.</p>
        <input v-model="teacherInfo.name" placeholder="이름을 입력하세요" />
        <div class="selctBtn">
            <button @click="RoutingComponent('MainPage')">취소</button>
            <button @click="RegistMember('선생님')">선생님 등록</button>
        </div>
    </div>
    <div class="mainContent" v-else-if="member == '학생'">
        <div class="imgDiv">
            <img :src=imgUrl>
            <input @change="uploadImg" accept="image/*" type="file" id="file" />
            <label for="file">학생사진 추가</label>
        </div>
        <input v-model="studentInfo.id" placeholder="ID를 입력하세요" />
        <input v-model="studentInfo.name" placeholder="이름을 입력하세요" />
        <div class="selectDiv">
            <v-select v-model="studentInfo.branch" label="지점" density="compact" :items="['사천점', '청솔점', '마산점']" variant="outlined"></v-select>
        </div>
        <div class="selctBtn">
            <button @click="RoutingComponent('MainPage')">취소</button>
            <button @click="RegistMember('학생')">{{ studentBtnName }}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    watch: {
        pwCheck: function (newVal, ) {
            (this.password != newVal) ? this.passwordCheck = true: this.passwordCheck = false;
        },
        password: function (newVal, ) {
            (newVal != this.pwCheck) ? this.passwordCheck = true: this.passwordCheck = false;
        },
    },
    created() {
        /* state가 있을경우(학생 추가가 아닌 학생 수정일 경우) */
        if (history.state.studentBasicInfo != undefined) {
            this.studentInfo.id = history.state.studentBasicInfo.id;
            this.studentInfo.name = history.state.studentBasicInfo.name;
            this.studentInfo.branch = history.state.studentBasicInfo.branch;
            this.studentInfo.src = history.state.studentBasicInfo.src;
            this.studentBtnName = "정보 수정";
            this.dischargeStudentBtnVisible = 1;
        }
        /* component 로딩 시 학생인지 선생님인지 구분 */
        this.memberSep = this.$route.params.member;
        this.memberSep == "teacher" ?
            (this.member = "선생님") :
            (this.member = "학생");
    },
    data() {
        return {
            memberSep: undefined,
            checkedValues: true,
            member: "",
            imgUrl: undefined,
            studentBtnName: "학생 추가",
            password: "",
            pwCheck: "",
            passwordCheck: false,
            dischargeStudentBtnVisible: 0,
            studentInfo: {
                id: "",
                name: "",
                branch: "",
                src: "",
            },
            teacherInfo: {
                id: "",
                pw: "",
                name: "",
            }
        };
    },
    methods: {
        /* 라우팅 함수 */
        RoutingComponent(componentName) {
            this.$router.push({
                name: componentName,
            });
        },
        /* 신규 등록버튼 클릭 이벤트리스너 */
        RegistMember(member) {
            if (member == '학생') {
                if (history.state.studentBasicInfo == undefined) {
                    alert(`신규${member} 등록이 완료되었습니다.`);
                    this.RoutingComponent("MainPage");
                } else {
                    alert(`${member}정보 수정이 완료되었습니다.`);
                    this.RoutingComponent("MainPage");
                }
            } else {
                if (this.pwCheck == this.password) {
                    alert(`신규${member} 등록이 완료되었습니다.`);
                    this.RoutingComponent("MainPage");
                } else if (this.pwCheck != this.password) {
                    alert("비밀번호가 일치하지 않습니다. 다시 확인 해 주세요.")
                }
            }
        },
        /* 업로드한 이미지를 보여주는 함수 */
        uploadImg(event) {
            if (this.imgUrl) URL.revokeObjectURL(this.imgUrl); // 기존 이미지 메모리 할당 해제
            let img = event.target.files[0];
            /* 이미지 파일이 아닐 시 거부 문구 출력 */
            (img.type).includes('image') ? this.imgUrl = URL.createObjectURL(img) : alert('이미지 파일만 업로드 가능합니다');
        },
        dischargeStudent() {

        }
    },
};
</script>

<style scoped>
@import "../assets/css/MainCommonStyle.css";

@media(hover: hover) and (pointer: fine) {
    .imgDiv label:hover {
        background: #bab5ae;
        color: white;
    }

    .selctBtn button:hover {
        background: #605b5bbd;
        color: white;
    }

    .userInfo button:hover {
        background: red;
        color: white;
    }
}

.userInfo button:active {
        background: red;
        color: white;
    }

.selectDiv {
    width: 30%;
    height: 10%;
    margin-top: 15px;
}

.selctBtn {
    margin-top: 15px;
}

#idInput {
    margin-top: 0px;
}

.imgDiv {
    display: flex;
    flex-direction: column;
    gap: 7px 0px;
    align-items: center;
}

.imgDiv img {
    width: 100px;
    max-height: 120px;
    border-radius: 70%;
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

.selctBtn button, .userInfo button {
    width: 180px;
    height: 70px;
    background: #d9d9d9;
    border-radius: 25px;
    margin: 0px 7px;
    color: #4c4c4c;
    font-size: 19px;
    font-weight: 600;
}

.userInfo button {
    width: 150px;
    height: 55px;
    background: #f8dddb;
}
.search {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 34px;
    color: #828282;
    padding: 15px;
    margin-left: 0;
}

.mainContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px 0px;
}

.mainContent p {
    color: red;
    font-size: 13px;
}

.mainContent input,
.Empowerment {
    width: 30%;
    height: 10%;
    border: 1px solid #000000;
    border-radius: 10px;
    font-family: "Inter";
    font-size: 18px;
    padding-left: 10px;
    margin-top: 15px;
}

.Empowerment input {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1024px) {

    .mainContent input,
    .selectDiv {
        width: 50%;
    }
}

@media screen and (max-width: 767px) {
    .userInfo {
        padding-left: 10px;
        padding-right: 15px;
    }

    .search {
        font-size: 17px;
    }

    .mainContent input,
    .selectDiv {
        width: 70%;
    }

    .selctBtn button, .userInfo button {
        width: 135px;
        font-size: 15px;
    }
    .imgDiv {
        margin-top: 10px;
    }

    .selctBtn {
        margin: 0px 0px 10px 0px;
    }
}
</style>
