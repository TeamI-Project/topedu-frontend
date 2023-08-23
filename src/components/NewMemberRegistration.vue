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
</div>
</template>

<script>
export default {
    created() {
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
    },
};
</script>

<style scoped>
@import "../assets/css/MainCommonStyle.css";

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
