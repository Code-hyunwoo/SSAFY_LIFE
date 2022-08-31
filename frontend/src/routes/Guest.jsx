import styles from "./Guest.module.css"
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

function Guest (){

    const [guest_name, setGuest_name] = useState("");
    const [guest_text, setGuest_text] = useState("");
    const [guest_list, setGuest_list] = useState([]);
    const [render_number, setRender_number] = useState(0);

    useEffect(()=> {
        axios.get("https://t7c08.p.ssafy.io/api/guest")
        .then((res)=>{
            setGuest_list(res.data.reverse());
            console.log(res)
        })
    },[render_number])

    
    function onNameChange(e){

        setGuest_name(e.target.value);
    }

    function onTextChange(e){

        setGuest_text(e.target.value);
    }

    function postVistor(){

        var today = new Date();

        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        var dateString = year + '년 '  + month  + '월 ' + day + '일';
        var hours = ('0' + today.getHours()).slice(-2); 
        var minutes = ('0' + today.getMinutes()).slice(-2);
        var seconds = ('0' + today.getSeconds()).slice(-2); 
        var timeString = hours + ':' + minutes  + ':' + seconds;



        if (guest_name !=="" & guest_text !==""){
            axios.post("https://t7c08.p.ssafy.io/api/guest",
            {
                "person_name": guest_name,
                "person_text": guest_text,
                "guest_date": dateString,
                "guest_hour": timeString

            },
            {
                headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
            },
            
        })
        .then((res)=>{
            console.log(res)
            setRender_number(render_number + 1);
            setGuest_name("");
            setGuest_text("");
        })
    }}

    function resetInput(){
        document.getElementById("inputname").value ='';
        document.getElementById("inputtext").value ='';
    }


    

    return (
        <>
            <div className={styles.title}>
                방명록
            </div>
            <input className={styles.inputname} id="inputname" onChange={onNameChange} maxLength="6" placeholder="성함을 적어주세요."></input>
            <input className={styles.inputtext} id="inputtext" onChange={onTextChange} name="text" maxLength="36" placeholder="하고 싶은 말 남기기"></input>
            <button id={styles.write} onClick={()=>{
                postVistor(); 
                resetInput();
              }}> 작성하기 </button>

            
            <div className={styles.container}>
            <Grid id={styles.post_container} container>
                {guest_list.map((guest, index) => (
                    <Grid key={index}
                    item xs={12} sm={4} lg={3} id={styles.rgyPostIt}>
                        <div id={styles.person_name}> {guest.person_name} </div>    
                        <div id={styles.person_text}> {guest.person_text} </div>    
                        <div id={styles.guest_date}> {guest.guest_date} </div>
                        <div id={styles.guest_hour}> {guest.guest_hour} </div>
                 
                    </Grid>
                ))}
                
            </Grid>
                <div>
                    <Link to='/' id={styles.back}><span> 돌아가기 </span></Link>
                </div>
            </div>
        </>
    );
}

export default Guest;