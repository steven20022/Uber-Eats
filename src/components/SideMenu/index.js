import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

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
        }
    ]

    function onMenuItemClick (menuItem) {
        navigate(menuItem.key)
    }

    return (
        <Menu items={menuItems} onClick={onMenuItemClick} />
    )
}

export default SideMenu