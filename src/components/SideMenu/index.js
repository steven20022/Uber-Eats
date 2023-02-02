import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Auth } from "aws-amplify";

function SideMenu () {

    const navigate = useNavigate()

    const menuItems = [
        {
            key: '/',
            label: 'Orders'
        },
        {
            key: 'menu',
            label: 'Restaurant Menu'
        },
        {
            key: 'restaurant',
            label: 'Create Restaurant'
        },
        {
            key: 'signout',
            label: 'Sign Out'
        }
    ]

    async function onMenuItemClick(menuItem) {
        if (menuItem.key === 'signout'){
            await Auth.signOut();
            window.location.reload();
        }else{
            navigate(menuItem.key);
        }
    }

    return (
        <Menu items={menuItems} onClick={onMenuItemClick} />
    )
}

export default SideMenu