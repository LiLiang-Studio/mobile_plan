import icon5G from '../assets/images/5g.svg'
import iconFamily from '../assets/images/family.svg'
import iconRecharge from '../assets/images/recharge.svg'
import iconService from '../assets/images/service.svg'
import iconTerminal from '../assets/images/terminal.svg'
import { getSrc } from '../utils'

export default [
  {
    id: 1,
    title: '充值管理',
    banner: getSrc('005.jpg'),
    icon: iconRecharge,
    items: ['我要充值', '话费查询']
  },
  {
    id: 2,
    title: '5G套餐',
    banner: getSrc('004.jpg'),
    icon: icon5G,
    items: ['5G卡', '5G套餐']
  },
  {
    id: 3,
    title: '智慧家庭',
    banner: getSrc('002.jpg'),
    icon: iconFamily,
    items: ['宽带业务', '移动看家', '家庭共享群']
  },
  {
    id: 4,
    title: '智能终端',
    banner: getSrc('003.jpg'),
    icon: iconTerminal,
    items: ['智能手机', '智能手环', '智能门锁', '智能血压仪']
  },
  {
    id: 5,
    title: '用户服务',
    banner: getSrc('001.jpg'),
    icon: iconService,
    items: ['个人信息', '消费查询', '账单发票', '普法宣传']
  }
]
