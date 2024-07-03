<template>
	<svg aria-hidden="true" :class="`iconfont ${className}`" :style="`width:${width};height:${height};color:${color};${style}`">
		<use :xlink:href="symbolId" />
	</svg>
</template>

<script lang="ts" setup>
import type { SvgIconProps } from '@/types';

const props = withDefaults(defineProps<SvgIconProps>(), {
	prefix: 'icon',
	name: '',
	color: '',
	width: '',
	height: '',
	className: '',
	style: '',
});

const symbolId = computed(() => `#${props.prefix}-${props.name.replace('icon-', '')}`);
</script>
