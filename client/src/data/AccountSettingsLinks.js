import { MdOutlinePersonAddAlt, MdOutlinePayment } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';
import { CiLock } from 'react-icons/ci';
import { AiOutlineBell } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

export const accountSettingsData = [
    {
        id: 1,
        icon: <MdOutlinePersonAddAlt />,
        title: 'Personal details',
        text: 'Update your information and find out how it\'s used.',
        linkText: 'Manage personal details',
        link: 'mysettings'
    },
    {
        id: 2,
        icon: <VscSettings />,
        title: 'Preferences',
        text: 'Change your language, currency and accessibility requirements.',
        linkText: 'Manage preferences',
        link: 'mysettings'
    },
    {
        id: 3,
        icon: <CiLock />,
        title: 'Security',
        text: 'Adjust your security settings and set up two-factor authentication.',
        linkText: 'Manage account security',
        link: 'mysettings'
    },
    {
        id: 4,
        icon: <MdOutlinePayment />,
        title: 'Payment details',
        text: 'Securely add or remove payment methods to make it easier when you book.',
        linkText: 'Manage payment details',
        link: 'mysettings'
    },
    {
        id: 5,
        icon: <AiOutlineBell />,
        title: 'Email notifications',
        text: 'Decide what you want to be notified about, and unsubscribe from what you don\'t.',
        linkText: 'Manage notifications',
        link: 'mysettings'
    },
    {
        id: 6,
        icon: <BsPeople />,
        title: 'Other travellers',
        text: 'Add or edit information about the people you\'re travelling with.',
        linkText: 'Manage travellers',
        link: 'mysettings'
    },
];