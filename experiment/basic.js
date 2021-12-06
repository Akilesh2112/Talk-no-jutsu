import {ModzyClient} from '@modzy/modzy-sdk';
const modzyClient = new ModzyClient( 'https://app.modzy.com/api', '8cCHEh0qohi6W07WGoMh.e3dN9cAzHx8750i9mwd2' );

var abc;
async function basic() {
    //try {
        let job = await modzyClient.submitJobText(
            "ed542963de",
            "0.0.27", {
                'input-1': {
                    'input.txt': 'Modzy is great'
                },
                'input-2': {
                    'input.txt': 'Modzy is great'
                },
            }
        );


    // } catch ( error ) {
    //     console.log( error );
    // }

    job = await modzyClient.blockUntilComplete( job );
    let results = await modzyClient.getResult( job.jobIdentifier );
    return results;
}


const printAddress = async () => {
    const a = await basic();
    console.log(a);
  };

  printAddress();