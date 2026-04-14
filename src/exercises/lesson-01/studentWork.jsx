//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const myName = 'Gumaro Pedro Matias';
  const myAge = 27;
  const myHobbies = [
    { id: 1, activity: 'Fishing' },
    { id: 2, activity: 'Playing soccer' },
    { id: 3, activity: 'Hiking' },
    { id: 4, activity: 'Reading' },
    { id: 5, activity: 'Learning languages' },
    { id: 6, activity: 'Cooking' },
  ];
  return (
    <div>
      <h1>About me</h1>
      <p>
        My name is Gumaro Pedro Matias and I'm extremely enthusiastic about
        becoming a software engineer. I went to college doubting whether to
        study CS or Biology. I ended up choosing biology, which I enjoyed a lot,
        but the feeling that CS is my real passion has brought me here.
      </p>
      <h2>My hobbies</h2>
      <ul>
        {
          /* add JSX here */
          myHobbies.map((hobby) => (
            <li key={hobby.id}>{hobby.activity}</li>
          ))
        }
      </ul>
      <p> Student output will go here </p>
    </div>
  );
}
