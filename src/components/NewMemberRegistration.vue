<template>
<div class="mainBox">
    <div class="userInfo">
        <div class="search">신규 {{ member }} 등록</div>
    </div>

    <div class="mainContent" v-if="member == '선생님'">
        <input placeholder="ID를 입력하세요" />
        <input type="password" placeholder="PW를 입력하세요" />
        <input placeholder="이름을 입력하세요" />
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
        <input placeholder="ID를 입력하세요" />
        <input placeholder="이름을 입력하세요" />
        <div class="selctBtn">
            <button @click="RoutingComponent('MainPage')">취소</button>
            <button @click="RegistMember('학생')">학생 등록</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    created() {
        /* component 로딩 시 학생인지 선생님인지 구분함 */
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
            alert(`신규${member} 등록이 완료되었습니다.`);
            this.RoutingComponent("MainPage");
        },
        /* 업로드한 이미지를 보여주는 함수 */
        uploadImg(event) {
            if (this.imgUrl) URL.revokeObjectURL(this.imgUrl); // 기존 이미지 메모리 할당 해제
            let img = event.target.files[0];
            /* 이미지 파일이 아닐 시 거부 문구 출력 */
            (img.type).includes('image') ? this.imgUrl = URL.createObjectURL(img) : alert('이미지 파일만 업로드 가능합니다');
        },
    },
};
</script>

<style scoped>
@import "../assets/css/MainCommonStyle.css";

.imgDiv {
    display: flex;
    flex-direction: column;
    gap: 7px 0px;
    align-items: center;
}

.imgDiv img {
    width: 100px;
    border-radius: 70%;
}

.imgDiv label {
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

.selctBtn button {
    width: 180px;
    height: 70px;
    background: #d9d9d9;
    border-radius: 25px;
    margin: 0px 7px;
    color: #4c4c4c;
    font-size: 19px;
    font-weight: 600;
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
    gap: 35px 0px;
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
}

.Empowerment input {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 767px) {
    .userInfo {
        padding-left: 10px;
        padding-right: 15px;
    }

    .search {
        margin-left: 0;
    }
}
</style>
