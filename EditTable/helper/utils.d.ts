import React from 'react';
import { autoCol, colProps } from '../types';
export declare function genColGroup(props: {
    columns: Array<colProps>;
    autoCol: autoCol;
    scrollBar?: number;
}): React.JSX.Element;
export declare function getAutoWidthCol(props: {
    columns: Array<colProps>;
    clientWidth: number;
}): {
    autoWidthColIndex: null;
    autoColWidth: number;
};
export declare function setRowKey(list: Array<object>): any[];
