<template>
<header>
    <img src="../assets/background_logo-removebg-preview.png" class="logoImg" @click="goHome()" />

    <div class="ul">
        <h4 class="li">정준일</h4>

        <button class="li">로그인</button>
    </div>
</header>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push({
                path: "/mainpage",
            });
        },
    },
};
</script>

<style scoped>
header {
    background-color: #fff;
    color: white;
    padding-left: 15px;
    padding-right: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    max-height: 80px;
    min-height: 70px;
    z-index: 100;
}

.ul {
    list-style-type: none;
    padding: 0;
}

.li {
    display: inline-block;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: black;
}

.ul button {
    width: 80px;
    height: 40px;
    background: rgba(23, 61, 114, 0.85);
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 14px;
}

.ul button:hover {
    background-color: rgb(9 30 59 / 94%)
}

.ul h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 27px;
    /* identical to box height */
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
}

.logoImg {
    width: 110px;
    cursor: pointer;
}

@media screen and (max-width: 767px) {
    .header {
        padding-left: 0px;
        padding-right: 15px;
    }
}
</style>
