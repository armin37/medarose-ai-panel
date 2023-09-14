import {INavData} from '@coreui/angular';

export const navAbsoluteURLS =
  {
    DASHBOARD: '/index',
    INSURED: {
      LIST: '/index/insured/list',
      NEW_EDIT: {
        PHONE: '/index/insured/new/phone',
        APPROVE_DATA: '/index/insured/new/approve-data'
      }
    },
  }

export const navItems: INavData[] = [
  {
    name: 'داشبورد',
    url: navAbsoluteURLS.DASHBOARD,
    iconComponent: {name: 'cil-speedometer'},
  },
  {
    title: true,
    name: 'بیمه شده'
  },
  {
    name: 'فهرست کاربرها',
    url: navAbsoluteURLS.INSURED.LIST,
    icon: 'pi pi-users'
  },
  {
    name: 'ثبت کاربر',
    url: navAbsoluteURLS.INSURED.NEW_EDIT.PHONE,
    icon: 'pi pi-user-plus'
  }
];
