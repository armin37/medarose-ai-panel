import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'داشبورد',
    url: '/index',
    iconComponent: {name: 'cil-speedometer'},
  },
  {
    title: true,
    name: 'بیمه شده'
  },
  {
    name: 'فهرست کاربرها',
    url: '/index/insured/list',
    icon: 'pi pi-users'
  },
  {
    name: 'ثبت کاربر',
    url: '/index/insured/new',
    icon: 'pi pi-user-plus'
  }
];
