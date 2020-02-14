import React from "react";

const styles = {
  button: {
    display: 'inline-block',
    color: 'black',
    fontSize: '125%',
    fontWeight: 700,
    textDecoration: 'none',
    userSelect: 'none',
    padding: '.25em .5em',
    outline: 'none',
    border: '1px solid rgb(250,172,17)',
    borderRadius: 7,
    background: 'rgb(255,212,3) linear-gradient(rgb(255,212,3), rgb(248,157,23))',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0), inset 0 1px 2px rgba(0,0,0,0), inset 0 0 0 60px rgba(255,255,0,0)',
    transition: 'box-shadow .2s, border-color .2s',
    cursor: 'pointer',
    width: 110,
    height: 40,
  },
  container: {
    backgroundColor: 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

function App() {
  const [clickCount, setClickCoutn] = React.useState(0);
  const buttonRef = React.useRef();
  let clickingTimer;

  const isPalindrom = value => {
    if (typeof value !== 'number') return new Error('Проверяемое на палиндром значение не число!')
    const arrayOfValue = String(value).split('');

    for (let i = 0; i < arrayOfValue.length; i++) {
      if (arrayOfValue[i] !== arrayOfValue[arrayOfValue.length - 1]) return false;
      if (i > arrayOfValue.length / 2) return true;
    }

    return true;
  }

  const onDoubleClick = (value) => {
    clearTimeout(clickingTimer);
    const palindromResult = isPalindrom(true) ? 'Данное число является палиндромом!' : 'Данное число не является палиндромом!'
    alert(`Ваше число: ${value} \n${palindromResult}`);
  }

  const onSingleClick = () => {
    clickingTimer = setTimeout(setClickCoutn.bind(this, clickCount + 1), 300);
  }
  return (
    <div style={styles.container}>
      <button ref={buttonRef} style={styles.button} onDoubleClick={onDoubleClick.bind(this, clickCount)} onClick={onSingleClick}>{clickCount}</button>
    </div>
  );
}

export default App;
