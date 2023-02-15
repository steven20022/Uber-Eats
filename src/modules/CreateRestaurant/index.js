import { Button, Card, Form, Input, InputNumber, message } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import { DataStore } from "aws-amplify"
import { Restauraunt } from "../../models"
import { useRestaurantContext } from "../../context/RestaurantContext"

const CreateRestaurant = () => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')

    const { sub, setRestaurant, restauraunt} = useRestaurantContext()

    useEffect(() => {
        if (!restauraunt) {
            return
        }
        setName(restauraunt.name)
        setAddress(restauraunt.address)
        setImage(restauraunt.image)
    }, [restauraunt])
    
    async function onFinish() {
        if (!name) {
            message.error('Name required!')
            return
        }
        if (!address) {
            message.error('Description required!')
            return
        }
        if (!image) {
            message.error('Image Link required!')
            return
        }

        if (!restauraunt) {
            await createNewRestaurant();
        }else{
            await updateRestaurant();
        }
    }

    async function updateRestaurant(){
        const updateRestaurant = await DataStore.save(
            Restauraunt.copyOf(restauraunt, (updated) => {
                updated.name = name;
                updated.address = address;
                updated.image = image;
            })
        )
        setRestaurant(updateRestaurant)
        message.success('Restaurant updated!')
    }

    async function createNewRestaurant(){
        const newRestaurant = DataStore.save(new Restauraunt({
            name,
            image,
            address,
            adminSub: sub,
        }))
        setRestaurant(newRestaurant)
        message.success('restaurant created!')
    }

    return (
        <Card title={'Restaurant Details'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'Name'} required >
                    <Input 
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Address'} required >
                    <Input 
                        placeholder='Enter Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Image'} required>
                    <Input 
                        placeholder="Enter Image Link"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

const styles = {
    page: {
        margin: 20
    }
}

export default CreateRestaurant