// 1)
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

const App = () => {
  const handleClick = () => {
    console.log('Кнопка нажата');
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Нажми меня
      </Button>
    </div>
  );
};

export default App;

// 2)
// import React from 'react';

// const List = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// const App = () => {
//   const data = ['Пункт 1', 'Пункт 2', 'Пункт 3'];

//   return (
//     <div>
//       <List items={data} />
//     </div>
//   );
// };

// export default App;
