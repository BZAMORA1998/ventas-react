
import React, { Component } from 'react'
import ApiService from "./ApiService";

class AutenticacionService extends Component {

    /**
     * @description Refresca el token
     * @author Bryan Zamora
     * @returns 
     */
    refreshToken() {

        let header={"token":"token"};
       
        let Body=JSON.stringify({
            "refreshToken":"Bearer eyJ0eXBlQXV0aCI6IlJFRlJFU0giLCJjYW5hbCI6IjQ5YTVmNjBhLTlmNTYtNGZlYi1iY2YxLTUzNzdjNjE1MmVmOCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJEQVJBTUJVTE8iLCJpYXQiOjE2MzU4MTE3MTQsImV4cCI6MTYzODQwMzcxMn0.NWbTyRnej4oHaU4K7TKA49TWV7MlLegtLB68afsBbDk"   
        });
        return new ApiService().ApiCall("PUT","/autenticacion/refreshToken",header,Body,false);
    }
}

export default AutenticacionService;