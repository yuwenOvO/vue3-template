import type zhCN from '@/lang/locales/zh-CN.json';

export type Lang = 'zh-CN' | 'en-US';

export type MessageSchema = typeof zhCN;

type Concat<K extends string, V extends string> = `${K}.${V}`;

type Flatten<T, K extends string = ''> =
	T extends Record<string, any>
		? {
				[P in keyof T]: Flatten<T[P], K extends '' ? P & string : Concat<K, P & string>>;
			}[keyof T]
		: K;

export type MessageKeySchema = Flatten<MessageSchema>;
