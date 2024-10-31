import { useEffect, useMemo, useRef, useState } from 'react';
import { containerInfoProps } from '../type/types.basic';
import { virtualListOptions } from '../types';

const useVirtualList = (
  defaultList: Array<any>,
  options: virtualListOptions,
) => {
  const {
    overscan = 0,
    itemHeight = 40,
    maxHeight = 400,
    onScrolled = () => {},
    wrapperPropsStyle = {},
    calcDelay = 50,
  } = options ?? {};
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeController = useRef({ lastTime: Date.now(), timer: null });
  const [startIdx, setStartIdx] = useState(0);
  const [showRowCount] = useState(Math.ceil(maxHeight / itemHeight));
  const [containerInfo, setContainerInfo] = useState<containerInfoProps>({
    offsetWidth: 0,
    clientWidth: 0,
  });
  const topHeight = useMemo(
    () => startIdx * itemHeight,
    [startIdx, itemHeight],
  );
  const wrapHeight = useMemo(
    () => defaultList?.length * itemHeight,
    [defaultList?.length, itemHeight],
  );

  // 滚动设置当前虚拟表单位置
  const onScroll = (evt: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop = 0, scrollLeft = 0 } = evt.target as HTMLDivElement;
    onScrolled({ scrollLeft, scrollTop });
    // 把overscan数量分摊到上方和下方
    const currentIndex =
      overscan > 0
        ? Math.floor(scrollTop / itemHeight) - Math.ceil(overscan / 2)
        : Math.floor(scrollTop / itemHeight);

    if (Date.now() - timeController.current.lastTime > calcDelay) {
      setStartIdx(currentIndex > 0 ? currentIndex : 0);
      timeController.current.lastTime = Date.now();
    } else {
      if (timeController.current.timer) {
        clearTimeout(timeController.current.timer);
      }
      timeController.current.timer = setTimeout(() => {
        setStartIdx(currentIndex > 0 ? currentIndex : 0);
      }, calcDelay);
    }
  };
  //设置内部长表单滚动的位置
  const wrapperProps = useMemo(
    () => ({
      style: {
        ...wrapperPropsStyle,
        width: '100%',
        height: wrapHeight,
        transform: `translateZ(0)`,
        paddingTop: topHeight,
      },
    }),
    [topHeight, wrapHeight],
  );
  // 设置绑定父级DOM
  const containerProps: React.HTMLAttributes<HTMLDivElement> &
    React.RefAttributes<HTMLDivElement> = {
    onScroll,
    ref: (el: HTMLDivElement) => (containerRef.current = el),
    style: {
      overflowY: 'auto',
      overflowX: 'auto', //解决滚动条挤压宽度问题
      maxHeight,
      overflow: 'auto',
    },
  };

  // resize后重新计算容器的长宽信息
  useEffect(() => {
    if (!containerRef?.current) {
      return;
    }
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        //@ts-ignore
        const { offsetWidth, clientWidth } = entry.target;
        setContainerInfo({ offsetWidth, clientWidth });
      });
    });
    resizeObserver.observe(containerRef?.current);
    return () => {
      resizeObserver.disconnect();
    };
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
