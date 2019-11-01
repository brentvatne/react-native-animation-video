declare module "@wcisco17/react-native-animation-video" {
    import { ImageRequireSource } from 'react-native';

    export interface RNAnimationProps {
        id: number;
        name: string;
        views: string;
        businessTitle: string;
        location: string;
        source: ImageRequireSource | ImageRequireSource | any;
        videoUrl: string | any;
    }
    export type RNAnimation = RNAnimationProps[];

    export interface Position {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    interface RootAppProps {
        isIcon: boolean;
        items: RNAnimation | any[];
    }

    export class RNAnimationVideo extends React.Component<RootAppProps, any> { }
}