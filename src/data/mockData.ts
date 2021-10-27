import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    id: '2',
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    id: '3',
    name: 'Switchs',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    id: '4',
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertsScreen',
  },
];
