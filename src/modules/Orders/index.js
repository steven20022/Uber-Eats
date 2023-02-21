import { Card, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { useRestaurantContext } from "../../context/RestaurantContext";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Order } from "../../models";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { restaurant } = useRestaurantContext();

    useEffect(() => {
        if (!restaurant) {
        return;
        }
        DataStore.query(Order, (order) =>
        order.orderRestaurauntId.eq(restaurant.id)
        ).then(setOrders);
    }, [restaurant]);

    const navigate = useNavigate();

    function renderOrderStatus(orderStatus) {
        const statusToColor = {
        PENDING: "blue",
        COMPLETED: "green",
        ACCEPTED: "orange",
        DECLINED: "red",
        };
        return <Tag color={statusToColor[orderStatus]}>{orderStatus}</Tag>;
    }

    const tableColumns = [
        { 
            title: "Id", 
            dataIndex: "id", 
            key: "id" 
        },
        { 
            title: "Created At", 
            dataIndex: "createdAt", 
            key: "createdAt" 
        },
        {
            title: "Price",
            dataIndex: "total",
            key: "total",
            render: (total) => `$${total.toFixed(2)}`,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: renderOrderStatus,
        },
    ];

    const styles = {
        page: {
        margin: 20,
        },
    };

    return (
        <Card title="Orders" style={styles.page}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                rowKey="id"
                onRow={(order) => ({
                    onClick: () => navigate(`order/${order.id}`),
                })}
            />
        </Card>
    );
};
export default Orders;
