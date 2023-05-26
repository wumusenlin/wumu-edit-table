import React, { useEffect, useMemo, useRef, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import { mustArray } from '../helper/fn';
import { inputProps } from '../types';
import './input.css';

const SelectInput: FC<inputProps> = (props) => {
  const {
    initValue,
    inputChange = () => {},
    onEdit = () => {},
    column,
  } = props;
  const { align = 'left', inputOptions, dataIndex } = column;
  const { selectData } = inputOptions ?? {};
  const selectRef = useRef<HTMLDivElement>(null);
  const [dropDownVisible, setDropDownVisible] = useState(true);
  const [inputBoxInfo, setInputBoxInfo] = useState({});

  const style = { textAlign: align };
  const dropDownPosition = {
    position: 'absolute',
    zIndex: '10',
    width: inputBoxInfo?.clientWidth ?? 120,
    left: inputBoxInfo?.left - 8,
    top: inputBoxInfo?.top + inputBoxInfo?.clientHeight + 2,
  };
  const dropDownStyle = { ...dropDownPosition };
  const options = useMemo(() => {
    if (selectData.length === 0) {
      return <div>暂无数据</div>;
    }
    const options = mustArray(selectData).map((d, dIndex) => {
      const { value, label } = d;
      const key = `${dIndex}-${value}`;

      return (
        <div
          key={key}
          className="wumu-dropdown-item"
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

  console.log('inputBoxInfo', inputBoxInfo);
  useEffect(() => {
    console.log('selectRef.current', selectRef.current);
    if (selectRef?.current) {
      let dom = selectRef.current;
      const { clientWidth, clientHeight, offsetTop, offsetLeft } =
        selectRef.current ?? {};
      // const { left, top } = selectRef.current?.getBoundingClientRect?.()
      let top = offsetTop; //获取该元素对应父容器的上边距
      let left = offsetLeft; //对应父容器的上边距
      //判断是否有父容器，如果存在则累加其边距
      while (dom?.offsetParent) {
        //等效 obj = obj.offsetParent;while (obj != undefined)
        top += dom.offsetTop; //叠加父容器的上边距
        left += dom.offsetLeft; //叠加父容器的左边距
        dom = dom?.offsetParent;
      }
      setInputBoxInfo({ clientWidth, clientHeight, top, left });
    }
  }, [selectRef?.current]);

  const dropDownCount = dropDownVisible
    ? createPortal(
        <div className="wumu-input-dropdown" style={dropDownStyle}>
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
        style={style}
        onBlur={() => onEdit('')}
      >
        {initValue}
      </div>
      {dropDownCount}
    </>
  );
};

export default SelectInput;
