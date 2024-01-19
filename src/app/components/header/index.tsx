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

const Header = (_: any) => {
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
      <header className="bg-white shadow">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Editor
                </h1>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="ml-3 hidden sm:block">
              <Button variant="outlined">
                <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Preview
              </Button>
            </span>
            <span className="sm:ml-3">
              <Button variant="contained">
                <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                Save
              </Button>
            </span>
          </div>
      </div>
    </header>
    );
}

export default Header;