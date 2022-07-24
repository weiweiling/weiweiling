import BScroll from '@better-scroll/core'  // BScroll 核心
import MouseWheel from '@better-scroll/mouse-wheel'  // 引入滚轮
import PullDown from '@better-scroll/pull-down'  // 上拉
import PullUp from "@better-scroll/pull-up";  // 上拉
BScroll.use(MouseWheel)  // 下载滚轮插件
BScroll.use(PullDown)  // 下载上拉
BScroll.use(PullUp)
export const BS = (wrapper, num, action = false,) =>
{
    const { payload } = action
    if (wrapper)
    {
        if (typeof wrapper === 'string')
        {
            let wrapperRef = document.querySelector('#' + wrapper)
            return deploy(wrapperRef ? wrapperRef : null , payload ? payload.callback : null, num)
        }
    }
}

const deploy = (wrapper, callback, num) =>
{
    let bs = new BScroll(wrapper, {
        probeType: 3,
        pullUpLoad: true,
        pullDownRefresh: true,  // 向上拉 可以上拉 请求数据 加载更多
        mouseWheel: true,  // 鼠标滚轮
    })

    bs.on('scroll', position =>
    {
        if (callback)
        {
            const { scrolled } = callback
            scrolled(position, bs) // 发送两个参数 position 位置  bs 对象
        }
    })
    bs.on('pullingUp', () =>
    {
        console.log(num, '666666666666666666666');
        setTimeout(() =>
        {
            bs.finishPullUp()
            if (callback)
            {
                const { pullUp } = callback
                pullUp(num)
            }
        }, 20)  // 两秒拉一次
    })
    return bs;
}
// 防抖函数
export const debounce = (func, delay) =>
{
    let timer = null;
    return function (...args)
    {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() =>
        {
            func.apply(this, args);
        }, delay);
    };
}
