<template>
<div class="mainBox">
    <div class="userInfo">
        <div class="search">
            <input placeholder="검색어를 입력하세요" v-model="userNameSearch" />

            <button>검색</button>
        </div>

        <div class="registration">
            <button class="teacherReg" @click="newMemberReg('teacher')">
                선생님 신규등록
            </button>

            <button @click="newMemberReg('student')">학생 신규등록</button>
        </div>
    </div>

    <div class="mainContent">
        <DataTable v-model:userNameSearch="userNameSearch" />
    </div>
</div>
</template>

<script>
import DataTable from "./DataTable.vue";

export default {
    components: {
        DataTable,
    },
    data() {
        return {
            userNameSearch: "", //검색창 입력값
        };
    },
    methods: {
        /* 신규등록 버튼 클릭 시 이벤트리스너 */
        newMemberReg(member) {
            /* 신규학생인지 신규선생님인지 구분하여 컴포넌트 라우팅 */
            member == "student" ?
                this.$router.push({
                    name: "NewMemberRegistration",
                    params: {
                        member: "student",
                    },
                }) :
                this.$router.push({
                    name: "NewMemberRegistration",
                    params: {
                        member: "teacher",
                    },
                });
        },
    },
};
</script>

<style scoped>
@import "../assets/css/MainCommonStyle.css";

@media(hover: hover) and (pointer: fine) {
    .registration button:hover {
        background: #605b5bbd;
        color: white;
    }

    .search button:hover {
        background: #605b5bbd;
        color: white;
    }
}

.search button {
    background: #d9d9d9bd;
    border-radius: 25px;
    width: 70px;
    height: 70%;
    border: none;
    font-weight: 600;
    font-size: 16px;
}

.search input {
    padding-left: 10px;
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    font-family: "Inter";
    font-size: 14px;
    max-width: 167px;
}

.search input:focus {
    border: none;
}

.registration {
    display: flex;
    align-items: center;
    height: 80px;
    flex-wrap: wrap;
}

.registration button {
    background: rgba(217, 217, 217, 0.5);
    border-radius: 25px;
    border: none;
    width: 180px;
    height: 60px;
    font-family: "Inter";
    font-size: 17px;
    font-weight: 600;
    line-height: 18px;
}

.teacherReg {
    margin-right: 5px;
}

.mainContent {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 767px) {
    .userInfo {
        padding-left: 10px;
        padding-right: 15px;
    }

    .search {
        margin-left: 0;
    }

    .search button {
        width: 40px;
        height: 70%;
        font-weight: 500;
        font-size: 13px;
    }

    .search input {
        padding-left: 5px;
        height: 80%;
        font-family: "Inter";
        font-size: 12px;
        max-width: 167px;
    }

    .registration button {
        width: 110px;
        height: 60px;
        font-weight: 500;
        font-size: 11px;
    }
}

@media screen and (max-width: 500px) {
    .teacherReg {
        margin-right: 0px;
        margin-bottom: 2px;
    }

    .registration {
        display: flex;
        align-items: center;
        height: 80px;
        flex-direction: column;
        flex-wrap: nowrap;
    }
}
</style>
