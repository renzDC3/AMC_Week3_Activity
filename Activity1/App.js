import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
 
  const [text, onChangeTextName] = React.useState('Name:');
  const [number, onChangeTextAge] = React.useState('Age:');
  const [Address, onChangeTextAddress] = React.useState('Address:');
  const [School, onChangeTextSchool] = React.useState('School:');
  const [Course, onChangeTextCourse] = React.useState('Course:');
   const [Email, onChangeTextEmail] = React.useState('Email:');
     const [Contact, onChangeTextContact] = React.useState('Contact no: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={text}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAge}
          value={number}
          placeholder="Age:"
          keyboardType="numeric"
        />
       <TextInput
          style={styles.input}
          onChangeText={onChangeTextAddress}
          value={Address}
          placeholder="Address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextSchool}
          value={School}
          placeholder="School"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextCourse}
          value={Course}
          placeholder="Course"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextEmail}
          value={Email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextContact}
          value={Contact}
          placeholder="Contact"
        />
        


      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;