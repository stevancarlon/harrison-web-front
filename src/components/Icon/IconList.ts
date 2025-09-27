import Bag from '@/assets/icons/Bag.svg?react';
import Calendar from '@/assets/icons/Calendar.svg?react';
import Email from '@/assets/icons/Email.svg?react';
import FIleFolder from '@/assets/icons/FileFolder.svg?react';
import Finance from '@/assets/icons/Finance.svg?react';
import LilGuy from '@/assets/icons/LilGuy.svg?react';
import LilOpenBook from '@/assets/icons/LilOpenBook.svg?react';
import NameTag from '@/assets/icons/NameTag.svg?react';
import NotificationBox from '@/assets/icons/NotificationBox.svg?react';
import Search from '@/assets/icons/Search.svg?react';
import Task from '@/assets/icons/Task.svg?react';
import Telephone from '@/assets/icons/Telephone.svg?react';
import ThumbsUp from '@/assets/icons/ThumbsUp.svg?react';

const icons = {
  bag: Bag,
  calendar: Calendar,
  email: Email,
  fileFolder: FIleFolder,
  finance: Finance,
  lilGuy: LilGuy,
  lilOpenBook: LilOpenBook,
  nameTag: NameTag,
  notificationBox: NotificationBox,
  search: Search,
  task: Task,
  telephone: Telephone,
  thumbsUp: ThumbsUp,
};

export type IconName = keyof typeof icons;
export const iconList = icons as Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
>;
