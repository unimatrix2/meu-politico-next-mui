import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CollectionsIcon from '@mui/icons-material/Collections';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import UserDataForm from '../components/forms/UserDataForm';

export const upperDrawerItemsEnum = [
    {
        text: 'Dados Pessoais',
        icon: <ManageAccountsIcon />,
        component: <UserDataForm />
    },
    {
        text: 'Reset de Senha',
        icon: <LockIcon />,
        component: null
    },
    {
        text: 'Atividade Recente',
        icon: <CollectionsIcon />,
        component: null
    }
];

export const lowerDrawerItemsEnum = [
    {
        text: 'Notícias Cadastradas',
        icon: <NewspaperIcon />,
        component: null
    },
    {
        text: 'Atos Cadastrados',
        icon: <BorderColorIcon />,
        component: null
    },
    {
        text: 'Sugestões de Edição',
        icon: <EditIcon />,
        component: null
    }
]