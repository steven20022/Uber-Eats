import { Button, Card, Form, Input, InputNumber, message } from "antd"
import TextArea from "antd/es/input/TextArea"

const CreateRestaurant = () => {
    function onFinish({name, address}) {
        if (!name) {
            message.error('Name required!')
            return
        }
        if (!address) {
            message.error('Description required!')
            return
        }
        message.success('Menu item created!')
    }
    return (
        <Card title={'Restaurant Details'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'Name'} required name='name'>
                    <Input placeholder="Enter Name"/>
                </Form.Item>
                <Form.Item label={'Address'} required name='address'>
                    <Input placeholder='Enter Address'/>
                </Form.Item>
                <Form.Item label={'Image'} name='image'>
                    <Input placeholder="Enter Image Link" />
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