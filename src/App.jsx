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
  },
  absoluteDiv: {
    position: 'absolute',
    top: 20,
    right: 40,
  },
  buttonSecondary: {
    width: 90,
    height: 25
  },
  input: {
    width: 40,
    height: 25,
    marginRight: 5
  }
};

function App() {
  const [clickCount, setClickCoutn] = React.useState(0);
  const [inititalClickCount, setInitialClickCount] = React.useState(0);
  let clickingTimer;

  const isPalindrom = value => {
    if (typeof value !== 'number') throw new Error('Проверяемое на палиндром значение не число!');

    const arrayOfValue = String(value).split('');

    for (let i = 0; i < arrayOfValue.length; i++) {
      if (arrayOfValue[i] !== arrayOfValue[arrayOfValue.length - i - 1]) return false;
      if (i > arrayOfValue.length / 2) return true;
    }
    return true;
  }

  const checkInitialClickCount = value => {
    if (isNaN(value)) return setInitialClickCount(0);
    return setInitialClickCount(value);
  }

  const onDoubleClick = (value) => {
    clearTimeout(clickingTimer);

    try {
      const palindromResult = isPalindrom(value) ? 'Данное число является палиндромом!' : 'Данное число не является палиндромом!';
      alert(`Ваше число: ${value} \n${palindromResult}`);

    } catch(e) {
      return alert(e.message);
    }
  }

  const onSingleClick = () => {
    clickingTimer = setTimeout(setClickCoutn.bind(this, clickCount + 1), 300);
  }
  return (
    <>
    <div style={styles.container}>
      <button style={styles.button} onDoubleClick={onDoubleClick.bind(this, clickCount)} onClick={onSingleClick}>{clickCount}</button>
      <div style={styles.absoluteDiv}>
        <input value={inititalClickCount} onChange={e => checkInitialClickCount(Number(e.target.value))} style={styles.input} type="text"/>
        <button onClick={setClickCoutn.bind(this, inititalClickCount)} style={styles.buttonSecondary}>Установить</button>
      </div>
    </div>
    </>
  );
}

export default App;
