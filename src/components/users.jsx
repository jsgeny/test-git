import React, { useState } from "react";
import api from "../api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    
    const handleDelete = (userID) => {
        userID.target.parentNode.parentNode.parentNode.removeChild(userID.target.parentNode.parentNode);
        let len = document.querySelector(".table").rows.length-1;

        if(document.querySelector(".table").rows.length-1 === 0) {
            document.querySelector(".table").remove();
            document.querySelector(".badge").classList.remove("bg-primary");
            document.querySelector(".badge").classList.add("bg-danger");
            document.querySelector(".len").textContent = len;
        }
        
        
        if((len % 10) >= 2 && (len % 10) <= 4) {
            document.querySelector(".human").textContent = " человека";
            document.querySelector(".tusa").textContent = " тусанут";
        } else if(len >= 11 && len <= 20) {
            document.querySelector(".human").textContent = " человек";
            document.querySelector(".tusa").textContent = " тусанет";
        } else {
            document.querySelector(".human").textContent = " человек";
            document.querySelector(".tusa").textContent = " тусанет";
        }
        document.querySelector(".len").textContent = len;
    };
        
    const bgColor = (text) => {
        const style = "text-white rounded m-1 p-1";
        if(text === "Алкоголик") {
            return `bg-danger ${style}`;   // красный
        }
        if(text === "Красавчик") {
            return `bg-info ${style}`; // голубой
        }
        if(text === "Странный") {
            return `bg-secondary ${style}`; // серый
        }
        if(text === "Троль") {
            return `bg-success ${style}`; // зеленый
        }
        if(text === "Неуверенный") {
            return `bg-dark ${style}`; // черный
        }
        if(text === "Нудила") {
            return `bg-primary ${style}`; // синий
        }
    };
    
    const renderPhrase = (number) => {
        return number !== 0 && users.map((user) => (
            <tr key={user._id} >
                <td>{user.name}</td>
                <td>{user.qualities.map((qualiti) => (
                    <span className={bgColor(qualiti.name)} key={qualiti._id}>{qualiti.name}</span>
                    ))}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <button className="btn btn-danger" onClick={handleDelete}>delete</button>
                </td>
            </tr>
        ));
    };
    
    return(
        <div>
            <span className="badge bg-primary fs-3"><span className="len">{users.length}</span><span className="human"> человек</span><span className="tusa"> тусанет</span> с тобой сегодня</span>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Завершенные совещания</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>{renderPhrase(users.length)}</tbody>
            </table>
        </div>
    );
};

export default Users;