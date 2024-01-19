import { Fragment } from 'react';
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import Button from '@mui/material/Button';

const Settings = (_: any) => {
    const classes = {
        root: {
            position: 'absolute',
            right: 0,
            top: 0,
            width: '20%',
            height: '100%',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            padding: '1rem'
        }
    };

    return(
        <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Settings</h2>
        </div>
    );
};
export default Settings;