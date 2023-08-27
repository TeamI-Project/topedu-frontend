<template>
<!-- <VCalendar />
<VDatePicker v-model="date" /> -->
<div class="mainBox">
    <div class="userInfo">
        <div class="studentInfo">
            <img src="../assets/background_logo.png">
            <h1>손배준</h1>
            <p>모라점</p>
        </div>

        <div class="registration">
            <button @click="DischargedStudent()">학생퇴원</button>
            <button @click="RoutingComponent('MainPage')">메인페이지</button>
        </div>
    </div>

    <div class="mainContent">
        <div class="cartegorySection">
            <div v-for="(click, idx) in clicked" :key="idx" :class="click.index ? 'cartegoryClicked' : 'cartegory'" @click="changeBtn(idx)">{{ click.title }}</div>
        </div>
        <div class="detailView">
            detailView
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            clicked: [{
                    title: "신규생 기록사항",
                    index: 0,
                },
                {
                    title: "각종 검사 결과",
                    index: 0,
                },
                {
                    title: "학교 성적표",
                    index: 0,
                },
                {
                    title: "월간 상담지",
                    index: 0,
                },
                {
                    title: "상담 및 기타",
                    index: 0,
                },
            ],
        }
    },
    methods: {
        /* 라우팅 함수 */
        RoutingComponent(componentName) {
            this.$router.push({
                name: componentName,
            });
        },
        changeBtn(idx) {
            if (this.clicked[idx].index == 1) {
                this.clicked[idx].index = 0;
            } else {
                this.clicked.map((item) => {
                    item.index = 0;
                })
                this.clicked[idx].index = 1;
            }
        },
        DischargedStudent() {
            console.log(1);
        }
    },
}
</script>

<style scoped>

.detailView {
    padding: 5px;
    height: 100%;
}
.registration {
    display: flex;
    gap: 0px 5px;
    align-items: center;
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

@media(hover: hover) and (pointer: fine) {
    .registration button:hover {
        background: #605b5bbd;
        color: white;
    }
}

.userInfo {
    justify-content: normal;
    gap: 0px 25px;
}

.studentInfo p {
    font-weight: 400;
    font-size: 16px;
    color: #757575;
    padding-top: 15px;
}

.studentInfo h1 {
    padding-left: 5px;
}

.studentInfo {
    display: flex;
    align-items: center;
    padding-right: 10px;
    margin-left: 10px;
    gap: 0px 5px;
}

.studentInfo img {
    width: 100px;
    border-radius: 70%;
}

.mainContent {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.cartegorySection {
    height: 10%;
    display: flex;
}

.cartegory {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.cartegoryClicked {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #605b5bbd;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

@media screen and (max-width: 1280px) {
    .studentInfo p {
        font-weight: 400;
        font-size: 13px;
        color: #757575;
        padding-top: 15px;
    }

    .studentInfo h1 {
        padding-left: 5px;
        font-size: 22px;
    }
}

@media screen and (max-width: 767px) {
    .studentInfo p {
        font-size: 12px;
    }

    .studentInfo h1 {
        padding-left: 0px;
        font-size: 20px;
    }

    .registration button {
        width: 90px;
        height: 60px;
        font-size: 13px;
    }

    .userInfo {
        gap: 0px 5px;
        padding: 0;
    }

    .cartegoryClicked,
    .cartegory {
        font-size: 10px;
        font-weight: 300;
    }

    .studentInfo img {
        width: 80px;
    }

    .mainBox {
        width: 95%;
    }
}

@media screen and (max-width: 450px) {
    .studentInfo p {
        font-weight: 400;
        font-size: 10px;
        color: #757575;
    }

    .studentInfo h1 {
        padding-left: 5px;
        font-size: 18px;
    }

    .registration button {
        width: 65px;
        height: 60px;
        font-size: 11px;
    }

    .userInfo {
        gap: 0px 0px;
        padding: 0;
    }
}
</style>
