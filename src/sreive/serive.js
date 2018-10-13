import firebase from 'firebase'



export const config = {
    apiKey: "AIzaSyD3sp4zDUgSviX9MvAyzkVJUvPhPYrYE7U",
    authDomain: "fir-todo-12345.firebaseapp.com",
    databaseURL: "https://fir-todo-12345.firebaseio.com",
    projectId: "fir-todo-12345",
    storageBucket: "fir-todo-12345.appspot.com",
    messagingSenderId: "336460438656"
  };
  firebase.initializeApp(config);
  
  console.log(firebase)
  
  
  
  export function sumbit(fahad){
      if(fahad.lenght == 0){
          localStorage.removeItem('da')
      }
      var database = firebase.database();
var ref = database.ref('message').child('todo')

ref.set(fahad)
}

 export const ga = firebase.database().ref('message/todo').on('value',function(data){
 
    var da  = data.val()
    console.log(da)
    if(da != [] && da != null ){

     da = JSON.stringify(da)
    localStorage.setItem("da",da)
}
    })
    



