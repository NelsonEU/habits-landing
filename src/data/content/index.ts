import type { Locale } from '../site';
import { en } from './en';
import { fr } from './fr';

export type { Content } from './en';

export const content: Record<Locale, typeof en> = { en, fr };
