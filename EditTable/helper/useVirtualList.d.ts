import { virtualListOptions } from '../types';
declare const useVirtualList: (defaultList: Array<any>, options: virtualListOptions) => {
    list: any[];
    wrapperProps: {
        style: {
            width: string;
            height: number;
            transform: string;
            paddingTop: number;
        };
    };
    containerProps: {
        onScroll: (evt: EventInit) => void;
        ref: (el: any) => any;
        style: {
            overflowY: string;
            overflowX: string;
            maxHeight: number | undefined;
            backgroundColor: string;
            overflow: string;
        };
    };
    topHeight: number;
    bottomHeight: number;
    containerInfo: {};
};
export default useVirtualList;
