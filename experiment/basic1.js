import { ModzyClient } from '@modzy/modzy-sdk';

//Import Fetch in es6 format
//import fetch from 'node-fetch';
//import express from 'express';

const modzyClient = new ModzyClient( 'https://app.modzy.com/api', '8cCHEh0qohi6W07WGoMh.e3dN9cAzHx8750i9mwd2' );

let sources = {};

//Add any number of inputs
sources[ "my-input" ] = {
    "input.txt": `
    Hello From The Other side
    `,
};

async function basic() {
    try {

        modzyClient
            .submitJobText( "uvdncymn6q", "0.0.3", sources )
            .then(
                async ( job ) => {
                   // console.log( 'yay got ' + JSON.stringify( job ) );
                                        
                         let results = await modzyClient.getResult( job.jobIdentifier );
                         console.log( results );
                    
                }
            )
            .catch(
                ( error ) => {
                    console.error( "Modzy job submission failed with code " + error.code + " and message " + error.message );
                }
            );

    } catch ( error ) {
        console.log( error );
    }


}


basic();