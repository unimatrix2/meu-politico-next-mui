import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CollectionsIcon from '@mui/icons-material/Collections';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const upperDrawerItemsEnum = [
    {
        text: 'Dados Pessoais',
        icon: <ManageAccountsIcon />
    },
    {
        text: 'Reset de Senha',
        icon: <LockIcon />
    },
    {
        text: 'Atividade Recente',
        icon: <CollectionsIcon />
    }
];

export const lowerDrawerItemsEnum = [
    {
        text: 'Notícias Cadastradas',
        icon: <NewspaperIcon />
    },
    {
        text: 'Atos Cadastrados',
        icon: <BorderColorIcon />
    },
    {
        text: 'Sugestões de Edição',
        icon: <EditIcon />
    }
]