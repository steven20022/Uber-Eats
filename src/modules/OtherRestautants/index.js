import { Card, Image, Table, Tag } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRestaurantContext } from "../../context/RestaurantContext";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Restauraunt } from "../../models";

const OtherRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const { restaurant } = useRestaurantContext();

    useEffect(() => {
        if (!restaurant?.id) {
        return;
        }
        DataStore.query(Restauraunt, (r) =>
        r.id.notContains(restaurant.id)
        ).then(setRestaurants);
    }, [restaurant]);

    function findImageName(r, image) {
        return r.image === image
    }

    const tableColumns = [
        { 
            title: "Name", 
            dataIndex: "name", 
            key: "name",

        },
        { 
            title: "Address", 
            dataIndex: "address", 
            key: "address" 
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => <a href={image}>{restaurants.find(r =>findImageName(r, image)).name}</a>
        },
    ];

    const styles = {
        page: {
        margin: 20,
        },
    };

    return (
        <Card title="Other Restaurants" style={styles.page}>
            <Table
                dataSource={restaurants}
                columns={tableColumns}
                rowKey="name"
                
            />
        </Card>
    );
};
export default OtherRestaurants;
