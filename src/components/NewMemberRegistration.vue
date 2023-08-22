<template>
<div v-if="memberSep == 'student'">학생페이지</div>

<div v-else-if="memberSep == 'teacher'">선생페이지</div>

<div v-else>유효하지 않습니다</div>
</template>

<script>
export default {
    data() {
        return {
            memberSep: undefined,
        };
    },
    created() {
        this.memberSep = this.$route.params.member;
    },
    methods: {},
};
</script>

<style>
</style>
