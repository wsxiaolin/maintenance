export type NavItem = {
  label: string;
  path: string;
  enabled: boolean;
};

export type HomeTile = {
  label: string;
  path: string;
  normal: string;
  active: string;
  className: string;
};

export type ProjectEntry = {
  id: string;
  partner: string;
  project: string;
  cover: string;
  mobileCover: string;
  plant: string;
  summary: string;
};

export const asset = (path: string) => {
  if (path.startsWith('https://cafe24img.poxo.com')) {
    return path.replace('https://cafe24img.poxo.com', '/cafe24-proxy');
  }

  return `/asset-proxy${path}`;
};

export const navItems: NavItem[] = [
  { label: 'HOME', path: '/', enabled: true },
  { label: 'MARSHVILLE', path: '#marshville', enabled: false },
  { label: 'CHARACTERS', path: '#characters', enabled: false },
  { label: 'HISTORY', path: '/history/1f/', enabled: true },
  { label: 'PROJECT', path: '/project/', enabled: true },
  { label: 'CONTACT', path: '#contact', enabled: false },
  { label: 'DOWNLOAD', path: '#download', enabled: false },
  { label: 'NOTICE', path: '#notice', enabled: false },
  { label: 'SHOP', path: '#shop', enabled: false },
];

export const searchKeywords = [
  'Beloved items at DinoTang',
  "It's Bobo!",
  'Items for your desk',
  'Staff Pick! Gift recommendations',
  'Little friends that stand out',
  'Mug',
  'Passport cover',
  'Car air freshener',
  'Umbrella',
  'Quokka',
];

export const homeTiles: HomeTile[] = [
  { label: 'CONTACT', path: '#contact', normal: '/web/upload/fave/images/main/img_main_contact-pc.webp', active: '/web/upload/fave/images/main/img_main_contact_active-pc.webp', className: 'contact' },
  { label: 'HISTORY', path: '/history/1f/', normal: '/web/upload/fave/images/main/img_main_history-pc.webp', active: '/web/upload/fave/images/main/img_main_history_active-pc.webp', className: 'history' },
  { label: 'NOTICE', path: '#notice', normal: '/web/upload/fave/images/main/img_main_notice-pc.webp', active: '/web/upload/fave/images/main/img_main_notice_active-pc.webp', className: 'notice' },
  { label: 'CHARACTER', path: '#characters', normal: '/web/upload/fave/images/main/img_main_character-pc.webp', active: '/web/upload/fave/images/main/img_main_character_active-pc.webp', className: 'character' },
  { label: 'DOWNLOAD', path: '#download', normal: '/web/upload/fave/images/main/img_main_download-pc.webp', active: '/web/upload/fave/images/main/img_main_download_active-pc.webp', className: 'download' },
  { label: 'PROJECT', path: '/project/', normal: '/web/upload/fave/images/main/img_main_project-pc.webp', active: '/web/upload/fave/images/main/img_main_project_active-pc.webp', className: 'project' },
  { label: 'SHOP', path: '#shop', normal: '/web/upload/fave/images/main/img_main_shop-pc.webp', active: '/web/upload/fave/images/main/img_main_shop_active-pc.webp', className: 'shop' },
];

export const historyFrames = [
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/20b981b3eff3018783f9d310b0d0aed2.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/1ff2ac2254c2b406de7f8c16beb767e1.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/124610db96cdb81c2c2dce64e511e0fb.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/19408f97e8aa21cbbc361f69d112585a.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/00bfa376d17df8d2eb66f2adfd179f2e.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/5777cab5357cdc6dfa5c46ac38056301.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/48b7185c3e071eb18ecf94bde1af2185.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/f91d9171c9a5d4bf665474860860fa1d.png',
  'https://cafe24img.poxo.com/dinotaeng/file_data/dinotaeng//2025/10/29/c34f9364756bd12de3145f62d34c5138.png',
];

export const projects: ProjectEntry[] = [
  { id: '01', partner: 'DINOTAENG', project: 'House of Quokka', cover: '/web/upload/fave/images/project/img_project_house_default-1-pc.webp', mobileCover: '/web/upload/fave/images/project/img_project-1-mo-n.webp', plant: '/web/upload/fave/images/project/img_project_plant_1-pc.webp', summary: 'A cozy pop-up house with warm display windows and a soft garden path.' },
  { id: '02', partner: 'DINOTAENG', project: 'Lazy Picnic Shop', cover: '/web/upload/fave/images/project/img_project_house_default-2-pc.webp', mobileCover: '/web/upload/fave/images/project/img_project-2-mo.webp', plant: '/web/upload/fave/images/project/img_project_plant_2-pc.webp', summary: 'A retail room for plush, stationery, mugs and everyday collectible goods.' },
  { id: '03', partner: 'DINOTAENG', project: 'Bobo Cafe', cover: '/web/upload/fave/images/project/img_project_house_default-3-pc.webp', mobileCover: '/web/upload/fave/images/project/img_project-3-mo.webp', plant: '/web/upload/fave/images/project/img_project_plant_1-pc.webp', summary: 'A collaboration cafe façade with illustrated signage and cheerful plants.' },
  { id: '04', partner: 'DINOTAENG', project: 'Travel Goods', cover: '/web/upload/fave/images/project/img_project_house_default-4-pc.webp', mobileCover: '/web/upload/fave/images/project/img_project-4-mo-n.webp', plant: '/web/upload/fave/images/project/img_project_plant_1-pc.webp', summary: 'A compact campaign booth for outdoor, travel and gift-ready products.' },
  { id: '05', partner: 'DINOTAENG', project: 'Gift Market', cover: '/web/upload/fave/images/project/img_project_house_default-5-pc.webp', mobileCover: '/web/upload/fave/images/project/img_project-5-mo.webp', plant: '/web/upload/fave/images/project/img_project_plant_2-pc.webp', summary: 'A limited package corner that presents seasonal stories like a small village.' },
];
