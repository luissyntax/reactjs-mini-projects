import { useState } from 'react';
import styles from './App.module.css'
import powered from './assets/powered.png';
import leftArrow from './assets/leftarrow.png'
import {GridItem} from './components/GridItem'
import {calculateImc, Level, levels} from './helpers/imc'

const App = () =>{

  const [heightField, setHeighField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

   const handleCalculeteButton = () => {
    if(heightField && weightField){
        setToShow(calculateImc(heightField, weightField));
    }else{
      alert('Digite todos os campos')
    }
   };

   const handleBackButton = () => {
    setToShow(null);
    setHeighField(0);
    setWeightField(0);
  }


  return(
    <div className={styles.main}>
      <header className={styles.headerConteiner}>
      </header>
      <div className={styles.conteiner}>
      <div className={styles.leftSlide}>
        <h1>Calcule seu IMC.</h1>
        <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>

        <input 
              type="number"
              placeholder='Digite sua altura. Ex 1,5 (em metros)'
              onChange={(e) => setHeighField(parseFloat(e.target.value))}
              value={heightField > 0 ? heightField : ''}
              disabled={toShow ? true : false}
        />

        <input 
              type="number"
              placeholder='Digite seu peso. Ex 78.6 (em kg)'
              onChange={(e) => setWeightField(parseFloat(e.target.value))}
              value={weightField > 0 ? weightField : ''}
              disabled={toShow ? true : false}
        />

        <button onClick={handleCalculeteButton} disabled={toShow ? true : false}>Calcular</button>

      </div>
        <div className={styles.rightSlide}>

          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
             <GridItem key={key} item={item}/>
            ))}
          </div>
          }

          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" />
              </div>
              <GridItem item={toShow}/>
            </div>
          }

        </div>
      </div>
    </div>
  )
};

export default App;