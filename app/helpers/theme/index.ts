import ImageAssets from '~assets/images';
import Dimens from './Dimensions';
import { themeDefault } from './ThemeDefault';
import * as mColors from './Colors';
import { ITheme } from './ThemeInterface';

export interface IFontSize {
    tiny: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    huge: number;
    extraHuge: number;
}

export let theme: ITheme = {
    ...themeDefault,
};

export const Images = ImageAssets;

export const Dimensions = Dimens;

export const Colors = mColors;

export const Themes = {
    themeDefault,
};

export const createTheme = (_theme: ITheme): ITheme => {
    theme = { ..._theme };

    return theme;
};
export const listScreenWithLightBar = [
    'SignatureWelcome',
    'ExploreCourseScreen',
    'CourseDetail',
    'SignatureLesson',
    'ArticleDetail',
    'MiniCourseDetail',
    'HiOnboarding',
];

export const getAppTheme = (): ITheme => theme;
