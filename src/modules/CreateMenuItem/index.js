import { Card, Input, Button, InputNumber, message, Form } from "antd"

const { TextArea } = Input;

const CreateMenuItem = () => {
    function onFinish({name, description, price}) {
        if (!name) {
            message.error('Name required!')
            return
        }
        if (!description) {
            message.error('Description required!')
            return
        }
        if (!price) {
            message.error('Price required!')
            return
        }
        message.success('Menu item created!')
    }
    return (
        <Card title={'Create New Item'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'Name'} required name='name'>
                    <Input placeholder="Enter Name"/>
                </Form.Item>
                <Form.Item label={'Description'} required name='description'>
                    <TextArea 
                        rows={4}
                        placeholder='Enter Description'
                    />
                </Form.Item>
                <Form.Item label={'Price'} required name='price'>
                    <InputNumber placeholder="Enter Price"/>
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
export default CreateMenuItem