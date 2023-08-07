import React, { useState } from 'react'
import styles from './product.module.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Product() {
    const [cart,setCart] = useState(0)

    function handleClick(){
        setCart(cart + 1)
    }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>MI</h1>
            </div>
            
            <div className={styles.cart}>
            <AiOutlineShoppingCart className={styles.cartIcon}/>
           <span className={styles.cartNumber}>{cart}</span> 
            </div>
        </div>


        <div className={styles.card_container}>
            <div className={styles.card}>
                <img src='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672740801.76754728.jpg?width=400&height=400'></img>
                <h4>Redmi Note 12 Pro+ 5G</h4>
                <span style={{fontSize:18}}>&#8377; <p>23,999</p> </span>
                <button onClick={handleClick} className={styles.cartBtn}>Add to cart</button>
            </div>
            <div className={styles.card}>
                <img src='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738683.48387848.jpg?width=400&height=400'></img>
                <h4>Redmi Note 12 Pro 5G</h4>
                <span style={{fontSize:18}}>&#8377; <p>18,500</p></span>
                <button onClick={handleClick} className={styles.cartBtn}>Add to cart</button>
            </div>
            <div className={styles.card}>
                <img src='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1658292445.18054589.jpg?width=400&height=400'></img>
                <h4>Redmi K50i 5G</h4>
                <span style={{fontSize:18}}>&#8377; <p>16,000</p></span>
                <button onClick={handleClick} className={styles.cartBtn}>Add to cart</button>
            </div>
            <div className={styles.card}>
                <img src='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1663331044.2354491.jpg?width=400&height=400'></img>
                <h4>Redmi 11 Prime</h4>
                <span style={{fontSize:18}}>&#8377; <p>10,999</p></span>
                <button onClick={handleClick} className={styles.cartBtn}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product