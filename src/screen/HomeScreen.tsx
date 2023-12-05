import React, { useState } from 'react';
import { Layout, Button, Text, Card, Icon, IndexPath } from '@ui-kitten/components';
import { Image, StyleSheet, FlatList } from 'react-native';
import AddTodoData from '../components/AddTodoData';
import EditTodoData from '../components/EditTodoData';
import { Task } from '../components/AddTodoData';
import moment from 'moment';
import { Swipeable } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [todos, setTodos] = useState<Task[]>([
    { task: 'Học Retrofit Android', date: new Date(), category: 'Android Studio', completed: true },
    { task: 'Học Redux', date: new Date(), category: 'React Native', completed: false },
  ]);
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState<Task | null>(null);
  const deleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const openEditModal = (item: Task) => {
    setCurrentItem(item);
    setEditVisible(true);
  };

  const getCardStatus = (item: Task) => {
    const timeLeft = moment(item.date).diff(moment(), 'hours');
    if (item.completed) {
      return 'success';
    }
    return timeLeft <= 1 ? 'danger' : 'warning';
  };

  const markAsCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const renderItem = ({ item, index }: { item: Task; index: number}) => {
    const status = getCardStatus(item);
    return (
      <Swipeable
        renderRightActions={() => (
          <Layout style={styles.swipeableRight}>
            <Button
              onPress={() => openEditModal(item)}
              style={styles.swipeableButton}
              status='warning'
              accessoryLeft={(props) => <Icon {...props} name='edit-outline' />}
            />
            <Button
              onPress={() => deleteTask(todos.indexOf(item))}
              style={styles.swipeableButton}
              status='danger'
              accessoryLeft={(props) => <Icon {...props} name='trash-2-outline' />}
            />
          </Layout>
        )}
      >
        <Card status={status} style={styles.card} onLongPress={() => markAsCompleted(index)}>
          <Text style={styles.taskText}>{item.task}</Text>
          <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.dateText}>{moment(item.date).format('DD/MM/YYYY')}</Text>
            <Text style={styles.dateText}>{moment(item.date).fromNow()}</Text>
          </Layout>
          <Text style={styles.categoryText}>{item.category}</Text>
        </Card>
      </Swipeable>
    )
  };

  return (
    <Layout style={styles.layout}>
      <Image style={styles.shapeImage} source={require('../assets/shape.png')} />
      <Layout style={styles.instructionLayout}>
        <Image source={require('../assets/swipe.png')} />
        <Text style={styles.instructionText}>swipe right to delete or update</Text>
      </Layout>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <Button onPress={() => setVisible(true)} style={styles.addButton} status='danger' size='large'>+</Button>
      <AddTodoData visible={visible} setVisible={setVisible} setTodos={setTodos} />
      <EditTodoData visible={editVisible} setVisible={setEditVisible} item={currentItem} setTodos={setTodos} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  shapeImage: {
    top: 0,
    left: 0,
  },
  instructionLayout: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: '#EEE',
  },
  instructionText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  swipeableRight: {
    backgroundColor: '#EEE',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  swipeableButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  taskText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 50,
  },
});

export default HomeScreen;