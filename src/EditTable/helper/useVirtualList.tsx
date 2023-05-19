import { useEffect, useRef, useState } from 'react';
import { virtualListOptions } from '../types';

const useVirtualList = (
  defaultList: Array<any>,
  options: virtualListOptions,
) => {
  const {
    overscan = 0,
    itemHeight = 40,
    maxHeight,
    height = 510,
    onScrolled = () => {},
    wrapperPropsStyle = {},
  } = options;
  const containerRef = useRef();
  const [startIdx, setStartIdx] = useState(0);
  const [wrapHeight, setWrapHeight] = useState(
    defaultList?.length * itemHeight,
  );
  const [showRowCount] = useState(Math.ceil(height / itemHeight));
  const [containerInfo, setContainerInfo] = useState({});
  const topHeight = startIdx * itemHeight;

  // 滚动设置当前虚拟表单位置
  const onScroll = (evt) => {
    onScrolled();
    const { scrollTop = 0, scrollLeft = 0 } = evt.target;
    setContainerInfo({ scrollTop, scrollLeft });
    // setStartIdx(Math.floor(scrollTop / itemHeight))
    // 把overscan数量分摊到上方和下方
    const currentIndex =
      overscan > 0
        ? Math.floor(scrollTop / itemHeight) - Math.ceil(overscan / 2)
        : Math.floor(scrollTop / itemHeight);
    setStartIdx(currentIndex > 0 ? currentIndex : 0);
  };
  //设置内部长表单滚动的位置
  const wrapperProps = {
    style: {
      ...wrapperPropsStyle,
      width: '100%',
      height: wrapHeight,
      transform: `translateZ(0)`,
      paddingTop: topHeight,
    },
    // ref: el => actualContentRef.current = el,
  };
  // 设置绑定父级DOM
  const containerProps = {
    onScroll,
    ref: (el) => (containerRef.current = el),
    style: {
      overflowY: 'overlay',
      overflowX: 'auto', //解决滚动条挤压宽度问题
      maxHeight,
      backgroundColor: '#fff',
      overflow: 'auto',
    },
  };

  useEffect(() => {
    setWrapHeight(defaultList?.length * itemHeight);
  }, [defaultList?.length]);
  useEffect(() => {
    if (containerRef?.current) {
      setContainerInfo({ offsetWidth: containerRef.current.offsetWidth });
    }
  }, [containerRef?.current]);

  const list = defaultList.slice(startIdx, startIdx + showRowCount + overscan);

  return {
    list,
    wrapperProps,
    containerProps,
    topHeight,
    bottomHeight: wrapHeight - topHeight - (list.length ?? 0) * itemHeight,
    containerInfo,
  };
};

export default useVirtualList;
