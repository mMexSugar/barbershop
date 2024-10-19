interface NavItem {
    icon: string;
    label: string;
    url: string;
}

interface RegistrationItem {
    label: string;
    placeholder: string;
}
  
 export const navItems: NavItem[] = [
    { icon: 'home_icon', label: 'Головна', url: '/' },
    { icon: 'barbers_icon', label: 'Барбери', url: '/barbers' },
    { icon: 'pricelist_icon', label: 'Ціни', url: '/pricelist' },
];
  

export const registrationItems: RegistrationItem[] = [
    { label: 'Nickname', placeholder: 'nick' },
    { label: 'Email', placeholder: 'example@mail' },
    { label: 'Password', placeholder: 'password' },
];