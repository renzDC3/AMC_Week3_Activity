import React from 'react';
import {StyleSheet, TextInput,Image,View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



const TextInputExample = () => {
  const [text, onChangeTextName] = React.useState('Name:');

  const [number, onChangeTextAge] = React.useState('Age:');

  const [Address, onChangeTextAddress] = React.useState('Address:');

  const [School, onChangeTextSchool] = React.useState('School:');

  const [Course, onChangeTextCourse] = React.useState('Course:');

   const [Email, onChangeTextEmail] = React.useState('Email:');

  const [Contact, onChangeTextContact] = React.useState('Contact no: ');

  const [value, onChangeTextvalue] = React.useState('About me:');



  return (
    <SafeAreaProvider>
      <SafeAreaView>
       <View style={styles.inputContainer}>
    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp4Wwicr1i3NGIc3K4vGl7NJhxKkDLkjq4g&s' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextName}
            value={text}
            placeholder="Name"
          />
        </View>

  <View style={styles.inputContainer}>
    <Image source={{ uri: 'https://th.bing.com/th/id/OIP.tdWgIuoPoRaaXmfhVafLqgHaFz?rs=1&pid=ImgDetMain' }} style={styles.icon} />
        <TextInput
        
          style={styles.input}
          onChangeText={onChangeTextAge}
          value={number}
          placeholder="Age:"
          keyboardType="numeric"
        />  </View>

        <View style={styles.inputContainer}>
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1280/1280242.png' }} style={styles.icon} />
       <TextInput
          style={styles.input}
          onChangeText={onChangeTextAddress}
          value={Address}
          placeholder="Address"
        />
        </View>

       <View style={styles.inputContainer}>
    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/206/174/original/school-building-icon-free-vector.jpg' }} style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextSchool}
          value={School}
          placeholder="School"
        />
         </View>

          <View style={styles.inputContainer}>
    <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/education-3-5/48/108-512.png' }} style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextCourse}
          value={Course}
          placeholder="Course"
        />
          </View>

          
          <View style={styles.inputContainer}>
    <Image source={{ uri: 'https://th.bing.com/th/id/OIP.GMO7tjFCF-9gVlYe1rcvIwHaHa?rs=1&pid=ImgDetMain' }} style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextEmail}
          value={Email}
          placeholder="Email"
        />    </View>

         <View style={styles.inputContainer}>
    <Image source={{ uri: 'https://th.bing.com/th/id/OIP.I9ILOU9MvDd171cTLQ0ppAHaHa?rs=1&pid=ImgDetMain' }} style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextContact}
          value={Contact}
          placeholder="Contact"
        />
        </View>

<View style={styles.inputContainer}>
    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DcXr1VlWx6ZnI-ihvb9bEpsvqorKx-DmOA&s' }} style={styles.icon} />
            <TextInput
          
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeTextvalue(text)}
          value={value}
          style={styles.textInput}
          
        />
         </View>


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
    borderTopWidth:10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  icon: {
    width: 20,  
    height: 20,
    marginRight: 10,  
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});


export default TextInputExample;