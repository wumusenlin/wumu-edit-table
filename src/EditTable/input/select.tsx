import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from 'react';
import { createPortal } from 'react-dom';
import { tableContext } from '..';
import { mustArray } from '../helper/fn';
import { genPrimaryColor } from '../helper/utils';
import { inputProps } from '../types';
import './input.css';

const SelectInput: FC<inputProps> = (props) => {
  const initRef = useRef<any>({ current: { inited: false } });
  const { topHeight } = useContext(tableContext);
  const {
    initValue,
    inputChange = () => {},
    onEdit = () => {},
    column,
    config = null,
  } = props;
  const { align = 'left', inputOptions, dataIndex } = column;
  const { selectData } = inputOptions ?? {};
  const text =
    mustArray(selectData).find((s) => s.value === initValue)?.label ??
    initValue;
  const selectRef = useRef<HTMLDivElement>(null);
  const [dropDownVisible, setDropDownVisible] = useState(true);
  const [inputBoxInfo, setInputBoxInfo] = useState<any>({});

  const style = { textAlign: align };
  const dropDownPosition = {
    position: 'absolute',
    zIndex: '10',
    width: (inputBoxInfo?.clientWidth ?? 120) + 16,
    left: inputBoxInfo?.left - 16,
    top: inputBoxInfo?.top + inputBoxInfo?.clientHeight + 1 - topHeight,
  };

  const options = useMemo(() => {
    if (selectData?.length === 0) {
      return <div className="wumu-dropdown-notfount">暂无数据 ~</div>;
    }
    const options = mustArray(selectData).map((d, dIndex) => {
      const { value, label } = d;
      const key = `${dIndex}-${value}`;
      const isSelected = value === initValue;
      const className = `${
        isSelected ? 'wumu-dropDown-selected-item' : ''
      } wumu-dropdown-item`;
      const style = isSelected
        ? { backgroundColor: `${genPrimaryColor(config, 0.3)}` }
        : {};

      return (
        <div
          key={key}
          style={style}
          className={className}
          onClick={(e) => {
            e.stopPropagation();
            inputChange(value);
            onEdit('');
            setDropDownVisible(false);
          }}
        >
          {label}
        </div>
      );
    });
    return <>{options}</>;
  }, [selectData?.length]);

  const handleClick = () => {
    if (!initRef.current.inited) {
      initRef.current.inited = true;
    } else {
      setDropDownVisible(false);
      onEdit('');
    }
  };

  useEffect(() => {
    if (selectRef?.current) {
      let dom: HTMLElement = selectRef.current;
      const { clientWidth, clientHeight, offsetTop, offsetLeft } =
        selectRef.current ?? {};
      let top = offsetTop; //获取该元素对应父容器的上边距
      let left = offsetLeft; //对应父容器的上边距
      //判断是否有父容器，如果存在则累加其边距
      while (dom?.offsetParent) {
        //等效 obj = obj.offsetParent;while (obj != undefined)
        top += dom.offsetTop; //叠加父容器的上边距
        left += dom.offsetLeft; //叠加父容器的左边距
        // @ts-ignore
        dom = dom?.offsetParent;
      }

      setInputBoxInfo({ clientWidth, clientHeight, top, left });
    }
  }, [selectRef?.current]);
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const dropDownCount = dropDownVisible
    ? createPortal(
        <div
          className="wumu-input-dropdown"
          // @ts-ignore
          style={dropDownPosition}
        >
          {options}
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <div
        ref={selectRef}
        className="wumu-input"
        autoFocus
        name={dataIndex}
        // @ts-ignore
        style={style}
        onBlur={() => onEdit('')}
      >
        {text}
      </div>
      {dropDownCount}
    </>
  );
};

export default SelectInput;
