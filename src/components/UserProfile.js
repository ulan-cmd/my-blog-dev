import React from "react";
import styles from "./../styles/UserProfile.module.css";

const UserProfile = () => {

    const getValue = (event) => {
        if (event.target.checked){
            console.log(event.target.value)
        }
    }


    return (
        <form className={styles.form}>
            <div className={styles.form_control}>
                <label htmlFor="fio">ФИО</label>
                <input
                    onChange={getValue}
                    type="text"
                    id="fio"
                    placeholder="Введите фио"
                    defaultValue="Test"
                />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Почта</label>
                <input
                    onChange={getValue}
                    type="email"
                    id="email"
                    placeholder="Введите почту"
                />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="self">О себе</label>
                <textarea
                    onChange={getValue}
                    id="self"
                />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="city">Город</label>
                <select onChange={getValue} id="city">
                    <option value="Бишкек">Бишкек</option>
                    <option value="Ош">Ош</option>
                    <option value="Каракол">Каракол</option>
                </select>
            </div>
            <div className={styles.form_control}>
                <h3>Вы</h3>
                <label>
                    Javascript
                    <input onChange={getValue} type="checkbox" value="js"/>
                </label>
                <label>
                    Java
                    <input onChange={getValue} type="checkbox" value="java"/>
                </label>
                <label>
                    Python
                    <input onChange={getValue} type="checkbox" value="py"/>
                </label>
            </div>
            <div className={styles.form_control}>
                <label>
                    Филиал №1
                    <input type="radio" name="branch" value="1"/>
                </label>
                <label>
                    Филиал №2
                    <input type="radio" name="branch" value="2"/>
                </label>
            </div>
            <div className={styles.form_control}>
                <input className={styles.btn} type="submit" value="Сохранить"/>
            </div>
        </form>
    )
}

export default UserProfile;