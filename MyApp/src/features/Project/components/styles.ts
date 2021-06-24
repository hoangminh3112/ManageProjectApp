import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    top: 50,
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  spacer: {
    height: 35,
    width: '100%',
  },
  content: {
    marginLeft: 22,
    marginRight: 20,
    marginTop: 10,
  
  },
  image: {
    height: 25,
    width: 25,
    left: 22,
    top: 9,
  },
  detail: {
    
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
    textShadowColor: 'white',

  },
  text: {
    textAlign: 'left',
    paddingBottom: 10
  },
  wrapInput: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  titles: {
    width: 50,
  },
  input: {
    flex: 1,
    borderBottomWidth: 0.5,

  },
  wrapIcon: {
    borderWidth: 1,
    borderRadius: 60,
    marginLeft: 250
  },
  tasks: {

    // flexDirection: 'row',
    flex: 1,
  
    margin: 20,
    padding: 10,
    marginRight: 40,
    marginBottom: 140,
    borderRadius: 20,
    marginTop: 10,
    width: 350,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 2,
    textShadowColor: 'white',
  },
  addButton: {
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '30%',
    borderRadius: 10,
    marginTop: 10,
    alignItems:'center'

  },
  textAdd: {
    textAlign: 'center', fontSize: 20, color: 'white'
  },
  taskHeader: {
    backgroundColor: '#E1F4F3',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    height: 60,
    flex: 1,
   
  },
  textTaskHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  lowerHeader: {
    alignSelf: 'center',
    margin: 10,
    
  },
  textInput: {
    margin: 10,
  
    height: 100,
    
    textShadowColor: 'white',
   
    padding: 20,
    
  },
  field: {
    flex: 1,
    alignItems: 'center',
    textShadowColor: 'white',
    backgroundColor: 'white',
    margin: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.30,
    // shadowRadius: 4.65,
    // elevation: 2,
  },
  dot1: {
    borderRadius: 60,
    width: 20,
    height: 20,
    backgroundColor: '#7A9EBB',
    margin: 10,
    marginTop: '100%',
    
    
    
  },
  dot2: {
    borderRadius: 60,
    width: 20,
    height: 20,
    backgroundColor: '#DF4666',
    margin: 10,
 
  },
  dot3:{
    borderRadius: 60,
    width: 20,
    height: 20,
    backgroundColor: '#E5A45E',
    margin: 10,
  
  },
  row:{
    flexDirection: 'row'
  },
  body: {
    alignItems: 'center',
    flex: 1,
    
  },
  works:{
    marginTop: 20,
    borderRadius: 4,
    height: 50,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderBottomWidth: 0.22,
    textShadowColor: 'white',
    elevation: 5,
    width: '60%',
    alignItems: 'center',
    
  },
  textStatistic:{
    marginTop: '100%',
  },
  textStatistic1:{
    marginTop: 10
  },
  projectDetailContainer :{
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  // scroll:{
  //   flex: 1,
  //   padding: 10,
   
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.30,
  //   shadowRadius: 4.65,

  //   elevation: 8,
  //   textShadowColor: 'white',
  // }
 
})

export default styles;