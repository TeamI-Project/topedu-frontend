<template>
<div class="tableFrame">
    <v-data-table :headers="headers" :items="studentInfo" item-value="name" class="elevation-1" v-model:items-per-page="itemsPerPage" :items-per-page-options="itemsPerPageOptions" :items-per-page-text="itemsPerPageText" :height="tableHeight" :search="userNameSearch">
        <!-- 테이블 헤더(Header) -->

        <template v-slot:headers="{ columns }">
            <tr>
                <template v-for="column in columns" :key="column.key">
                    <td class="tableHeader">
                        <span class="mr-2 cursor-pointer">{{ column.title }}</span>
                    </td>
                </template>
            </tr>
        </template>
        <!-- 테이블 행(Row) -->
        <template v-slot:item="{ item }">
            <tr class="tableRow" @click="handleClick(item)">
                <td>{{ item.index + 1 }}</td>

                <td>{{ item.columns.id }}</td>

                <td>{{ item.columns.studentName }}</td>

                <td>{{ item.columns.academyBranch }}</td>
            </tr>
        </template>
    </v-data-table>
</div>
</template>

<script>
import {
    VDataTable
} from "vuetify/labs/VDataTable";

export default {
    mounted() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize(); //최초 로딩 시 디자인 수정을 위한 함수 실행
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
    },
    props: {
        userNameSearch: String, //부모컴포넌트에서 검색 키워드 데이터 받기
    },
    components: {
        VDataTable,
    },
    data() {
        return {
            width: 0,
            height: 0,
            itemsPerPage: 5, // 테이블 당 행 수
            itemsPerPageText: "",
            itemsPerPageOptions: [{
                value: 5,
                title: "5",
            }, ],
            tableHeight: 330, // 테이블 높이
            search: "",
            headers: [{
                    title: "#",
                    align: "start",
                    key: "index",
                },
                {
                    title: "ID",
                    key: "id",
                },
                {
                    title: "학생명",
                    key: "studentName",
                },
                {
                    title: "지점",
                    key: "academyBranch",
                },
            ],
            studentInfo: [{
                    id: "jjuneya_0402",
                    studentName: "손배준",
                    academyBranch: "청솔점",
                },
                {
                    id: "jujuwon",
                    studentName: "이주원",
                    academyBranch: "마산점",
                },
                {
                    id: "jisajang",
                    studentName: "지종권",
                    academyBranch: "부산점",
                },
                {
                    id: "Seung_U",
                    studentName: "유승훈",
                    academyBranch: "부산점",
                },
                {
                    id: "kingdow",
                    studentName: "김도우",
                    academyBranch: "마산점",
                },
                {
                    id: "hxxseung",
                    studentName: "최현승",
                    academyBranch: "마산점",
                },
                {
                    id: "ss0ng",
                    studentName: "송대선",
                    academyBranch: "청솔점",
                },
                {
                    id: "ss0ng",
                    studentName: "송대선",
                    academyBranch: "청솔점",
                },
                {
                    id: "ss0ng",
                    studentName: "송대선",
                    academyBranch: "청솔점",
                },
                {
                    id: "ss0ng",
                    studentName: "송대선",
                    academyBranch: "청솔점",
                },
                {
                    id: "ss0ng",
                    studentName: "송대선",
                    academyBranch: "청솔점",
                },
            ],
        };
    },
    methods: {
        /* 패드 사용시 페이지 당 행 개수 증가 및 테이블 높이 증가시키는 함수 */
        handleResize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.height > 1023 && this.width > 767 ?
                ((this.itemsPerPage = 8), (this.tableHeight = 500)) :
                ((this.itemsPerPage = 5), (this.tableHeight = 330));
        },
        /* 테이블 행 클릭 시 이벤트리스너 */
        handleClick(items) {
            this.$router.push({
                name: "StudentDetailPage",
                params: {
                    id: items.columns.id,
                },
            });
        },
    },
};
</script>

<style scoped>
.tableHeader {
    background-color: #e5e5e5 !important;
    border-radius: 4px 0px 0px 0px;
    border: 1px solid #828282;
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: white;
}

.tableRow {
    cursor: pointer;
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    color: black;
}

.tableRow:hover {
    font-size: 15px;
    font-weight: 600;
}

.tableRow td {
    border: 1px solid #828282;
}

.tableFrame {
    width: 70%;
    min-width: 445px;
}

@media screen and (max-width: 1280px) {
    .tableFrame {
        width: 85%;
    }
}

@media screen and (max-width: 767px) {
    .tableFrame {
        width: fit-content;
        min-width: 0;
        padding: 0px 10px;
    }
}
</style>
