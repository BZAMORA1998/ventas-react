
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
            HEADER={HEADER,'Content-Type':'application/json'};
        }else{
            HEADER={
                'Content-Type': 'application/json'
            };
        }

        if(SECURITY){

        }
       
        
        switch(METHOD) {
            case "GET":
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        HEADERS: HEADER,
                        METHOD:"GET"
                    }
                )
                .then((response) => {
                        return response.json();
                }).catch((err) => {
                    console.log("Error encontrado:", err);
                });

            case "POST":
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        HEADERS: HEADER,
                        METHOD: "POST",
                        body:BODY
                    }
                )
                .then((response) => {
                        return response.json();
                }).catch((err) => {
                    console.log("Error encontrado:", err);
                });

            case "PUT":
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        HEADERS: HEADER,
                        METHOD: "PUT",
                        body:BODY
                    }
                )
                .then((response) => {
                        return response.json();
                }).catch((err) => {
                    console.log("Error encontrado:", err);
                });
     
            case "DELETE":
                return fetch(process.env.REACT_APP_BASE_URL+API,
                    {
                        HEADERS: HEADER,
                        METHOD: "DELETE",
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