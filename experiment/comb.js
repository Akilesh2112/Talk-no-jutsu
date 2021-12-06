import {
    ModzyClient
} from '@modzy/modzy-sdk';

const modzyClient = new ModzyClient( 'https://app.modzy.com/api', '8cCHEh0qohi6W07WGoMh.e3dN9cAzHx8750i9mwd2' );

let sources = {};

//Add any number of inputs
sources[ "my-input" ] = {
    "input.txt": `
    So hello from the other side ara ara
    `,
};

let JOB = modzyClient
    .submitJobText( "uvdncymn6q", "0.0.3", sources )
    .then(
        async ( job ) => {
            job = await modzyClient.blockUntilComplete( job );
            let results = await modzyClient.getResult( job.jobIdentifier );
            //Identifier = results.jobIdentifier;
            //console.log( results );
            console.log( job );
            return job;
        }
    )
    .catch(
        ( error ) => {
            console.error( "Modzy job submission failed with code " + error.code + " and message " + error.message );
        }
    );





const printAddress = async () => {
    const jobDetail = await JOB;
    console.log(jobDetail.jobIdentifier);
    // try {
    //     const results = await modzyClient.getResult( jobIdentifier );
    //     console.log( results );
    // } catch ( error ) {
    //     console.error( "Modzy job submission failed with code " + error.code + " and message " + error.message );
    // }

};

printAddress();

