import {Card,Table,Tag} from "antd";
import orders from '../../data/dashboard/orders.json';
import { useNavigate } from "react-router-dom";
import { useRestaurantContext } from "../../context/RestaurantContext";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Order } from "../../models";

const Orders = () => {
    const [orders, setOrders] = useState([])
    const {restaurant} = useRestaurantContext()

    useEffect(() => {
        if (!restaurant) {
            return
        }
        DataStore.query(Order, (order) => 
            order.orderRestaurauntId.eq(restaurant.id)).then(setOrders)
    },[restaurant])



    const navigate = useNavigate();

    function renderOrderStatus (orderStatus) {
        let color = '';

        switch (orderStatus) {
            case 'Accepted':
                color = 'green';
                break;
            case 'Pending':
                color = 'orange';
                break;

            default:
                color = 'red'
                break;
        }
        return <Tag color={color}>{orderStatus}</Tag>
    }

    const tableColumns = [
        {
            title: 'Id',
            dataIndex: 'orderID',
            key: 'orderID'
        },
        {
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
            key: 'deliveryAddress'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderOrderStatus
        },
    ]

    const styles = {
        page:{
            margin: 20,
        },
    }

    return (
        <Card title='Orders' style={styles.page}>
            <Table 
                dataSource={orders}
                columns={tableColumns}
                rowKey='orderID'
                onRow={(order) => ({
                    onClick: () => navigate(`order/${order.orderID}`)
                })}
            />
        </Card>
    )

    
}
export default Orders