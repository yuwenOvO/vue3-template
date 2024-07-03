<template>
	<div class="text-red-400 text-3xl">{{ $t('common.setting') }}</div>

	<button class="border-red-500 border-solid border-[1px]" @click="changeLang">切换</button>

	<SvgIcon name="home" />
</template>

<script lang="ts" setup>
const { locale } = useI18n();

const changeLang = () => {
	locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN';
};
</script>
