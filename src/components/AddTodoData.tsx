import { StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card, Modal, Text, Input, Select, SelectItem, Datepicker, IndexPath } from '@ui-kitten/components';

export type Task = {
    task: string;
    date: Date;
    category: string;
}

type ModalProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}
const AddTodoData: React.FC<ModalProps> = ({ visible, setVisible, setTodos }) => {
    const [task, setTask] = React.useState('')
    const [date, setDate] = React.useState(new Date())
    const options = ['React Native', 'Android Studio', 'Server'];
    const [selectedOptions, setSelectedOptions] = React.useState<IndexPath>(new IndexPath(0));
    const displayValue = options[selectedOptions.row];

    const renderOption = (title: string, index: number): React.ReactElement => (
        <SelectItem key={index} title={title} />
    );

    const addTask = () => {
        const newTask: Task = {
            task,
            date,
            category: displayValue
        };
        setTodos(oldTodos => [...oldTodos, newTask]);
        setTask('');
        setDate(new Date());
        setSelectedOptions(new IndexPath(0));
        setVisible(false);
    };
    return (
        <Modal
            style={{ width: '90%', padding: 10 }}
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <Card disabled={true}>
                <Text style={{ margin: 15, alignSelf: 'center'}} category='h5'>
                    Add Task
                </Text>
                <Input
                    style={{ margin: 15 }}
                    value={task}
                    label='Task Name'
                    onChangeText={nextValue => setTask(nextValue)}
                />
                <Datepicker
                    label='Date'
                    style={{ margin: 15 }}
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />

                <Select
                    label='Category'
                    style={{ margin: 15 }}
                    placeholder='Select Category'
                    value={displayValue}
                    selectedIndex={selectedOptions}
                    onSelect={index => setSelectedOptions(index as IndexPath)}>
                    {options.map((option, index) => renderOption(option, index))}
                </Select>

                <Button style={{ backgroundColor: '#50C2C9', width: '90%', alignSelf: 'center', marginTop: 20 }} onPress={addTask}>
                    Add Task
                </Button>
            </Card>
        </Modal>
    )
}

export default AddTodoData

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})