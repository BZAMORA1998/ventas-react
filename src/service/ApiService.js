
import { Component } from 'react'

class ApiService extends Component {

    /**
     * Llama de manera general los api rest segun se requiera
     * 
     * @author Bryan Zamora
     * @param {*} METHOD 
     * @param {*} API 
     * @param {*} HEADER 
     * @param {*} BODY 
     * @param {*} SECURITY 
     * @returns 
     */
    ApiCall(METHOD,API,HEADER,BODY,SECURITY) {

        if(HEADER!=null){
            HEADER=Object.assign(HEADER,
                {'Content-Type':'application/json',
            'canal':'49a5f60a-9f56-4feb-bcf1-5377c6152ef8'});
        }else{
            HEADER={
                'Content-Type': 'application/json',
                'canal':'49a5f60a-9f56-4feb-bcf1-5377c6152ef8'
            };
        }

        if(SECURITY){

        }

        switch(METHOD) {
            case "GET":
                console.log("Metodo GET");
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        headers: HEADER,
                        method: "GET"
                    }
                )
                .then((response) => {
                        return response.json();
                }).catch((err) => {
                    console.log("Error encontrado:", err);
                });

            case "POST":
                console.log("Metodo POST");
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        headers: HEADER,
                        method: "POST",
                        body:BODY
                    }
                )
                .then((response) => {
                        return response.json();
                }).catch((err) => {
                    console.log("Error encontrado:", err);
                });

            case "PUT":
                console.log("Metodo PUT");
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        headers: HEADER,
                        method: "PUT",
                        body:BODY
                    }
                )
                .then((response) => {
                        return response.json();
                }).catch((err) => {
                    console.log("Error encontrado:", err);
                });
     
            case "DELETE":
                console.log("Metodo DELETE");
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        headers: HEADER,
                        method: "DELETE",
                        body:BODY
                    }
                )
                .then((response) => {
                        return response.json();
                }).catch((err) => {
                    console.log("Error encontrado:", err);
                });

          }
       
    }
}

export default ApiService;