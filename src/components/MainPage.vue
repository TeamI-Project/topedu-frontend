<template>
  <div class="mainBox">
    <div class="userInfo">
      <div class="search">
        <input
          placeholder="학생명을 입력하세요"
          v-model="userNameSearch"
          @keyup.enter="searchName()"
        />
        <button @click="searchName()">검색</button>
      </div>
      <div class="registration">
        <button class="teacherReg">선생님 신규등록</button>
        <button>학생 신규등록</button>
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
  components: { DataTable },
  data() {
    return {
      userNameSearch: "",
    };
  },
  methods: {
    searchName() {
      console.log(this.userNameSearch);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/MainCommonStyle.css";

.search button {
  background: #d9d9d9bd;
  border-radius: 25px;
  width: 70px;
  height: 50%;
  border: none;
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
  .search button {
    width: 40px;
    height: 70%;
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
    font-size: 10px;
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