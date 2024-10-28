import {
  Business,
  DirectionsCar,
  EvStation,
  List,
  People,
  History,
  Badge,
  SettingsApplications,
  Assignment,
  Settings,
  Assessment,
  InsertChart,
  ViewWeek,
  GridView
  
} from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
export interface IMenuItem {
  path: string;
  name: string;
  icon: any;
  onClick?: any;
  isVisibleWithoutPermission?: boolean;
  component?: string
}
export const MenuItems: IMenuItem[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: InsertChart,
  },
  {
    path: '/charging-stations',
    name: 'Charging Stations',
    icon: EvStation,
  },
  {
    path: '/energy-storage',
    name: 'Energy Storages',
    icon: ViewWeek,
  },
  {
    path: '/financials',
    name: 'Financials',
    icon: History,
  },
  {
    path: '/gridify',
    name: 'Gridify',
    icon: GridView,
  },
  {
    path: '/invoices',
    name: 'Financials',
    icon: ReceiptIcon,
 
  },
  {
    path: '/cars',
    name: 'cars',
    icon: DirectionsCar,

  },
  {
    path: '/users',
    name: 'users',
    icon: People,
  },
  {
    path: '/tags',
    name: 'tags',
    icon: Badge,
  },
  {
    path: '/assets',
    name: 'Assets',
    icon: AccountBalanceIcon,
  },
  {
    path: '/organizations',
    name: 'Organizations',
    icon: Business,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    icon: Assessment,
  },
  {
    path: '/integration-settings',
    name: 'Integration Settings',
    icon: Settings,
  },
  {
    path: '/technical-settings',
    name: 'Technical Skills',
    icon: SettingsApplications,
  },
  {
    path: '/charging-station-templates',
    name: 'Charging Station Templates',
    icon: Assignment,
  },
  {
    path: '/logs',
    name: 'logs',
    icon: List,
  },
];
